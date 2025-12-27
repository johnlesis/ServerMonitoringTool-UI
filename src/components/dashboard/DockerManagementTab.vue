<script setup lang="ts">
import { Box } from 'lucide-vue-next'
import EmptyState from '../shared/EmptyState.vue'
</script>

<template>
  <div class="p-6">
    <EmptyState
      :icon="Box"
      title="Docker Management"
      description="Container management features are coming soon. You'll be able to select a server and manage Docker containers directly from here."
    />
  </div>
</template>
