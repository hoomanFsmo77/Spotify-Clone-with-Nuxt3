<template>
  <div class="full-page">
    <div class="flex flex-col justify-center items-center">
      <h4>Welcome to Spotify clone by Hooman</h4>
      <nuxt-img width="300" class="mb-5" src="https://res.cloudinary.com/dhpxutwun/image/upload/v1679992739/spotify/spotify-logo-png-7081_fudjlj.png"/>
    </div>
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