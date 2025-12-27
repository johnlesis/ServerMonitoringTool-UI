<script setup lang="ts">
import { ref } from 'vue'
import type { ServerRegisterRequest } from '@/types/api'

defineProps<{
  show: boolean
  loading: boolean
  error: string
}>()

const emit = defineEmits<{
  close: []
  submit: [formData: ServerRegisterRequest]
}>()

const registerForm = ref<ServerRegisterRequest>({
  registrator_id: 0,
  name: '',
  password: '',
  ip_address: '',
  port: 22,
})

const handleSubmit = () => {
  emit('submit', { ...registerForm.value })
}

const handleClose = () => {
  // Reset form
  registerForm.value = {
    registrator_id: 0,
    name: '',
    password: '',
    ip_address: '',
    port: 22,
  }
  emit('close')
}
</script>

<template>
  <div
    v-if="show"
    class="fixed inset-0 flex items-center justify-center z-50 p-4"
    style="background-color: rgba(0, 0, 0, 0.3)"
    @click.self="handleClose"
  >
    <div class="bg-white rounded-xl shadow-xl max-w-lg w-full p-6">
      <h2 class="text-xl font-bold text-gray-900 mb-4">Register New Server</h2>

      <form @submit.prevent="handleSubmit" class="space-y-3">
        <!-- SSH Username -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1.5">
            SSH Username
            <span class="text-xs text-gray-500 font-normal ml-1">(for server connection)</span>
          </label>
          <input
            v-model="registerForm.name"
            type="text"
            required
            placeholder="e.g., root, ubuntu, admin"
            class="block w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <!-- Server IP Address -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1.5">
            Server IP Address
          </label>
          <input
            v-model="registerForm.ip_address"
            type="text"
            required
            placeholder="e.g., 192.168.1.100 or example.com"
            class="block w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <!-- SSH Port -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1.5">
            SSH Port
            <span class="text-xs text-gray-500 font-normal ml-1">(default: 22)</span>
          </label>
          <input
            v-model.number="registerForm.port"
            type="number"
            required
            placeholder="22"
            class="block w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <!-- SSH Password -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1.5">
            SSH Password
            <span class="text-xs text-gray-500 font-normal ml-1">(for the user above)</span>
          </label>
          <input
            v-model="registerForm.password"
            type="password"
            required
            autocomplete="off"
            placeholder="Enter SSH password"
            class="block w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <!-- Error Message -->
        <div v-if="error" class="rounded-lg bg-red-50 border border-red-200 p-3">
          <p class="text-sm text-red-800">{{ error }}</p>
        </div>

        <!-- Actions -->
        <div class="flex space-x-3 pt-1">
          <button
            type="button"
            @click="handleClose"
            class="flex-1 px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            :disabled="loading"
            class="flex-1 px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="loading">Registering...</span>
            <span v-else>Register Server</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
