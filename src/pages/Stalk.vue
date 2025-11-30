<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import {
  ElCard,
  ElTable,
  ElTableColumn
} from 'element-plus'

// === PC 数据 ===
const pcData = ref({
  cpu_info: {},
  mem_info: {},
  pc_info: {},
  running_window: {}
})

// === 多服务器配置 ===
const servers = [
  { id: 'ubuntu', name: 'Ubuntu 服务器' },
  { id: 'debian13', name: 'Debian 13 服务器' }
]

// 每台服务器的数据：{ ubuntu: {...}, debian13: {...} }
const serverDataMap = ref({})

// 工具函数
const formatGB = (value) => {
  if (value == null || isNaN(value)) return '未知'
  return `${Number(value).toFixed(2)} GB`
}

const formatPercent = (value) => {
  if (value == null || isNaN(value)) return '未知'
  return `${Number(value).toFixed(1)}%`
}

// 获取 PC 信息
const fetchPCInfo = async () => {
  try {
    const res = await axios.get('https://api.wsmdn.top/get?type=pc&id=pc')
    pcData.value = res.data
  } catch (error) {
    console.error('获取 PC 信息失败:', error)
  }
}

// 获取单个服务器信息
const fetchServerInfo = async (serverId) => {
  try {
    const res = await axios.get(
      `https://api.wsmdn.top/get?type=server&id=${serverId}`
    )
    serverDataMap.value[serverId] = res.data
  } catch (error) {
    console.error(`获取 ${serverId} 服务器信息失败:`, error)
    // 初始化空结构，避免模板报错
    serverDataMap.value[serverId] = {
      system_info: {},
      cpu_info: {},
      mem_info: {},
      disk_info: {},
      used: { cpu: [], mem: [] }
    }
  }
}

// 初始化：加载所有设备数据
onMounted(() => {
  fetchPCInfo()
  servers.forEach(server => fetchServerInfo(server.id))
})
</script>

<template>
  <div class="container">
    <!-- PC 卡片 -->
    <el-card class="system-info-card" shadow="hover">
      <template #header>
        <div class="card-header">🖥️ 我的电脑（未知就是没开机）</div>
      </template>

      <div class="info-section">
        <h4>CPU 信息</h4>
        <p><strong>核心数：</strong>{{ pcData.cpu_info?.cores || '未知' }}</p>
      </div>

      <div class="info-section">
        <h4>内存信息</h4>
        <p><strong>总内存：</strong>{{ formatGB(pcData.mem_info?.all) }}</p>
        <p><strong>已用内存：</strong>{{ formatGB(pcData.mem_info?.used) }}</p>
        <p><strong>空闲内存：</strong>{{ formatGB(pcData.mem_info?.free) }}</p>
      </div>

      <div class="info-section">
        <h4>PC 信息</h4>
        <p><strong>操作系统：</strong>{{ pcData.pc_info?.system || '未知' }}</p>
        <p><strong>系统版本：</strong>{{ pcData.pc_info?.version || '未知' }}</p>
      </div>

      <div class="info-section">
        <h4>当前活动窗口</h4>
        <p><strong>进程名：</strong>{{ pcData.running_window?.name || '无' }}</p>
        <p><strong>窗口标题：</strong>{{ pcData.running_window?.title || '无' }}</p>
        <p><strong>程序路径：</strong>{{ pcData.running_window?.path || '无' }}</p>
      </div>
    </el-card>

    <!-- 动态渲染每台 Linux 服务器 -->
    <el-card
      v-for="server in servers"
      :key="server.id"
      class="system-info-card"
      shadow="hover"
    >
      <template #header>
        <div class="card-header">🐧 {{ server.name }}</div>
      </template>

      <div class="info-section">
        <h4>系统信息</h4>
        <p><strong>操作系统：</strong>{{ serverDataMap[server.id]?.system_info?.system || '未知' }}</p>
        <p><strong>版本：</strong>{{ serverDataMap[server.id]?.system_info?.version || '未知' }}</p>
      </div>

      <div class="info-section">
        <h4>CPU 信息</h4>
        <p><strong>核心数：</strong>{{ serverDataMap[server.id]?.cpu_info?.cores || '未知' }}</p>
        <p><strong>使用率：</strong>{{ formatPercent(serverDataMap[server.id]?.cpu_info?.used) }}</p>
      </div>

      <div class="info-section">
        <h4>内存信息</h4>
        <p><strong>总内存：</strong>{{ formatGB(serverDataMap[server.id]?.mem_info?.all) }}</p>
        <p><strong>已用：</strong>{{ formatGB(serverDataMap[server.id]?.mem_info?.used) }}</p>
        <p><strong>空闲：</strong>{{ formatGB(serverDataMap[server.id]?.mem_info?.free) }}</p>
      </div>

      <div class="info-section">
        <h4>磁盘信息</h4>
        <p><strong>总容量：</strong>{{ formatGB(serverDataMap[server.id]?.disk_info?.all) }}</p>
        <p><strong>已用：</strong>{{ formatGB(serverDataMap[server.id]?.disk_info?.used) }}</p>
        <p><strong>空闲：</strong>{{ formatGB(serverDataMap[server.id]?.disk_info?.free) }}</p>
      </div>

      <!-- CPU Top 进程 -->
      <div class="info-section">
        <h4>CPU 占用 Top 进程</h4>
        <el-table
          :data="serverDataMap[server.id]?.used?.cpu || []"
          size="small"
          empty-text="暂无高 CPU 占用进程"
        >
          <el-table-column prop="0" label="PID" width="80" />
          <el-table-column prop="1" label="进程名" min-width="120" />
          <el-table-column prop="2" label="CPU %" width="100">
            <template #default="scope">{{ scope.row[2] }}%</template>
          </el-table-column>
        </el-table>
      </div>

      <!-- 内存 Top 进程 -->
      <div class="info-section">
        <h4>内存占用 Top 进程</h4>
        <el-table
          :data="serverDataMap[server.id]?.used?.mem || []"
          size="small"
          empty-text="暂无高内存占用进程"
        >
          <el-table-column prop="0" label="PID" width="80" />
          <el-table-column prop="1" label="进程名" min-width="120" />
          <el-table-column prop="2" label="内存 %" width="100">
            <template #default="scope">{{ scope.row[2] }}%</template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
.container {
  padding: 20px;
  max-width: 750px;
  margin: 20px auto;
}

.system-info-card {
  border-radius: 12px;
  margin-bottom: 24px;
}

.card-header {
  font-size: 16px;
  font-weight: bold;
  color: #409eff;
  display: flex;
  align-items: center;
  gap: 8px;
}

.info-section {
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px dashed #ebeef5;
}

.info-section:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.info-section h4 {
  margin: 12px 0 8px;
  color: #606266;
  font-size: 15px;
}

.info-section p {
  margin: 4px 0;
  line-height: 1.6;
}
</style>