<template>
  <div class="full-page">
    <p class="sm:h2 h4">Redirecting to dashboard page ...</p>
    <br>
    <button @click="redirectToDashboard">
      <p class="h6 text-gray underline underline-offset-4">If nothing happened click here</p>
    </button>
  </div>
</template>
<script setup lang="ts">
definePageMeta({name:'AUTH', path:'/authentication',layout:false})
const {redirectToDashboard}=useAuth()
</script>

<style scoped>

</style>