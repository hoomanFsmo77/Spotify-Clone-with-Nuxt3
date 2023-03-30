<template>
    <section id="recently">
      <container-full class="!px-1.6">
        <div class="flex justify-between items-center">
         <NuxtLink :to="{name:'GENRE_INDEX',params:{name:'recently-played'}}">
           <p class="section-link">Recently played</p>
         </NuxtLink >
          <NuxtLink :to="{name:'GENRE_INDEX',params:{name:'recently-played'}}">
            <p class="show-all-link">Show all</p>
          </NuxtLink>
        </div>
        <div v-if="recentlyPlayFlag"
            class="section-items">
            <MusicBox v-for="item in recentlyPlayData" :song-data="item"/>
        </div>
      </container-full>
    </section>
</template>

<script setup lang="ts">
const {recentlyPlayData,recentlyPlayFlag}=useRecently()
</script>

<style scoped>

</style>