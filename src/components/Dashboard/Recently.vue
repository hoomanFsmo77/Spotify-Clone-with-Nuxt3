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
      </container-full>
    </section>
</template>

<script setup lang="ts">
const {recentlyPlayData}=useRecently()
</script>

<style scoped>

</style>