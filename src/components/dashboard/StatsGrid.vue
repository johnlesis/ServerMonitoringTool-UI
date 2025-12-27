<script setup lang="ts">
import type { Component } from 'vue'

interface Stat {
  label: string
  value: string
  icon: Component
  trend: string
  color: string
}

defineProps<{
  stats: Stat[]
}>()

const getStatColor = (color: string) => {
  switch (color) {
    case 'blue':
      return 'bg-blue-50 text-blue-600'
    case 'green':
      return 'bg-green-50 text-green-600'
    case 'yellow':
      return 'bg-yellow-50 text-yellow-600'
    case 'purple':
      return 'bg-purple-50 text-purple-600'
    default:
      return 'bg-gray-50 text-gray-600'
  }
}
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
    <div
      v-for="stat in stats"
      :key="stat.label"
      class="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-200"
    >
      <div class="flex items-start justify-between">
        <div class="flex-1">
          <p class="text-sm font-medium text-gray-600 mb-1">{{ stat.label }}</p>
          <p class="text-3xl font-bold text-gray-900 mb-2">{{ stat.value }}</p>
        </div>
        <div
          :class="[
            'w-12 h-12 rounded-xl flex items-center justify-center',
            getStatColor(stat.color),
          ]"
        >
          <component :is="stat.icon" class="w-6 h-6" />
        </div>
      </div>
    </div>
  </div>
</template>
