import apiClient from './client'
import type { ServerRegisterRequest, Server, ServerHealth } from '@/types/api'

export const serversApi = {
  register: async (serverData: ServerRegisterRequest): Promise<Server> => {
    const { data } = await apiClient.post('/servers/register', serverData)
    return data.data
  },

  getServerHealth: async (serverId: number): Promise<ServerHealth> => {
    const { data } = await apiClient.get(`/servers/server-health/${serverId}`)
    return data
  },

  collectAll: async (): Promise<any> => {
    const { data } = await apiClient.post('/servers/monitoring/collect-all')
    return data
  },
}
