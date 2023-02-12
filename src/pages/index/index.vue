<template>
  <h1>dashboard page</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur consequatur consequuntur corporis, deleniti dolore dolorem laborum mollitia nisi odio optio sed similique sint sit unde voluptatem, voluptatibus? Maxime, nobis.
  </p>
  <NuxtLink :to="{name:'index-search'}">
    search page
  </NuxtLink>
  <br>
  <p>
    {{userData}}
  </p>
  <button @click="getTrack">
    get track
  </button>

</template>

<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const {userData,getTrack}=useIndex()
</script>

<style scoped>

</style>