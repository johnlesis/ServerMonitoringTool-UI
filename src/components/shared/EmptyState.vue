<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  icon: Component
  title: string
  description: string
  actionText?: string
}>()

defineEmits<{
  action: []
}>()
</script>

<template>
  <div class="p-12 text-center">
    <component :is="icon" class="w-16 h-16 text-gray-400 mx-auto mb-4" />
    <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ title }}</h3>
    <p class="text-gray-600 mb-4">{{ description }}</p>
    <button
      v-if="actionText"
      @click="$emit('action')"
      class="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
    >
      <span>{{ actionText }}</span>
    </button>
  </div>
</template>
