<template>
  <div class="w-[100vw] h-[100vh] flex justify-center items-center">
    <button @click="loginHandler" class="btn btn-primary">
      Login
    </button>
  </div>
</template>

<script setup lang="ts">
const {loginHandler}=useLogin()
</script>

<style scoped>

</style>