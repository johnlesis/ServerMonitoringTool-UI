import apiClient from './client'
import type { ServerRegisterRequest, Server, ContainerDataRequest } from '@/types/api'

export const serversApi = {
  register: async (serverData: ServerRegisterRequest): Promise<Server> => {
    const { data } = await apiClient.post('/servers/register', serverData)
    return data.data
  },

  getServerWithContainers: async (serverId: number): Promise<any> => {
    const { data } = await apiClient.get(`/servers/monitoting/${serverId}`)
    return data
  },

  getServers: async (): Promise<any> => {
    const { data } = await apiClient.get('/servers/all-servers')
    return data
  },

  getServerContainers: async (serverId: number): Promise<any> => {
    const requestData: ContainerDataRequest = { server_id: serverId }
    const { data } = await apiClient.post('/containers/get-container-data', requestData)
    return data
  },

  collectAll: async (): Promise<any> => {
    const { data } = await apiClient.get('/servers/monitoring/collect-all')
    return data
  },

  getAllServersWithContainers: async (): Promise<any> => {
    const { data } = await apiClient.get('/servers/containers/all')
    return data
  },
}
