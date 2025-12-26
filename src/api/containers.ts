import apiClient from './client'
import type { Container, ContainerDataRequest } from '@/types/api'

export const containersApi = {
  getContainerData: async (request: ContainerDataRequest): Promise<Container[]> => {
    const { data } = await apiClient.post('/containers/get-container-data', request)
    return Array.isArray(data) ? data : [data]
  },
}
