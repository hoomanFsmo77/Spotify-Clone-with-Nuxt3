<template>
  <div>
    <font-awesome-icon @click="sidebarFlag=true" class="sidebar-icon" :icon="['fas', 'align-justify']" />
    <h5>top bar</h5>
  </div>
</template>

<script setup lang="ts">
const sidebarFlag=useState<boolean>('sidebarFlag',()=>false)

</script>

<style scoped>

</style>