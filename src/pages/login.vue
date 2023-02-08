<template>
  <button @click="loginHandler" class="bg-red-600 p-1">
    Login
  </button>
</template>

<script setup lang="ts">
const {loginHandler}=useLogin()
</script>

<style scoped>

</style>