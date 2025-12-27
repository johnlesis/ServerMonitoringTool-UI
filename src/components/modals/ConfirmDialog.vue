<script setup lang="ts">
defineProps<{
  show: boolean
  title: string
  message: string
  confirmText?: string
  confirmColor?: 'red' | 'blue' | 'green'
  loading?: boolean
}>()

defineEmits<{
  confirm: []
  cancel: []
}>()

const getConfirmButtonClass = (color: 'red' | 'blue' | 'green' = 'blue') => {
  switch (color) {
    case 'red':
      return 'bg-red-600 hover:bg-red-700 focus:ring-red-500'
    case 'green':
      return 'bg-green-600 hover:bg-green-700 focus:ring-green-500'
    case 'blue':
    default:
      return 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'
  }
}
</script>

<template>
  <div
    v-if="show"
    class="fixed inset-0 flex items-center justify-center z-50 p-4"
    style="background-color: rgba(0, 0, 0, 0.3)"
    @click.self="$emit('cancel')"
  >
    <div class="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
      <h2 class="text-xl font-bold text-gray-900 mb-2">{{ title }}</h2>
      <p class="text-gray-600 mb-6">{{ message }}</p>

      <div class="flex space-x-3">
        <button
          type="button"
          @click="$emit('cancel')"
          :disabled="loading"
          class="flex-1 px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Cancel
        </button>
        <button
          type="button"
          @click="$emit('confirm')"
          :disabled="loading"
          :class="[
            'flex-1 px-4 py-2 text-sm text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed',
            getConfirmButtonClass(confirmColor),
          ]"
        >
          <span v-if="loading">Processing...</span>
          <span v-else>{{ confirmText || 'Confirm' }}</span>
        </button>
      </div>
    </div>
  </div>
</template>
