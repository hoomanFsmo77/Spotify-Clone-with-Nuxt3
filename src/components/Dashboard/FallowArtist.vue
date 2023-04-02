<template>
  <section id="follow-artist"  class="section">
    <container-full class="!px-1.6">
      <div class="flex justify-between items-center relative">
        <NuxtLink :to="{name:'SECTION_INDEX',params:{id:'follow-artist'}}">
          <p class="section-link">Your favorite artists</p>
        </NuxtLink >
        <NuxtLink :to="{name:'SECTION_INDEX',params:{id:'follow-artist'}}">
          <p class="show-all-link">Show all</p>
        </NuxtLink>
      </div>
      <div
          class="section-items">
        <MusicBox v-for="item in filterFollowedList(followList.artistsData).slice(0,4)"
                  artists="Artist"
                  :track-name="item.name"
                  link="ARTIST_INDEX"
                  :routeParam="item.id"
                  :images="item.images"
                  :size="320"
                  :disableSong="true"
        />
      </div>
    </container-full>
  </section>
</template>

<script setup lang="ts">
import {filterFollowedList} from "~/utils/Helper";
const props=defineProps<{
  followList:{
    total:number,
    artistsData:{id:string,name:string,images:any[]}[]
  }
}>();


</script>

<style scoped>

</style>