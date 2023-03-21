<template>
  <div class="full-page">
    <button @click="loginHandler" class="btn btn-primary">
      Login
    </button>
  </div>
</template>

<script setup lang="ts">
definePageMeta({name:'LOGIN', path:'/login',layout:false})
const {loginHandler}=useLogin()
</script>

<style scoped>

</style>