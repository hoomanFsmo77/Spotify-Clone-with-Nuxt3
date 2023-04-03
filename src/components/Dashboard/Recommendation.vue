<template>
  <section id="recommendation" v-if="recommendationFlag" class="section">
    <container-full class="!px-1.6">
      <div class="flex justify-between items-center relative">
        <NuxtLink :to="{name:'SECTION_INDEX',params:{id:'recommend'}}">
          <p class="section-link">Recommended for today</p>
        </NuxtLink >
        <NuxtLink :to="{name:'SECTION_INDEX',params:{id:'recommend'}}">
          <p class="show-all-link">Show all</p>
        </NuxtLink>
      </div>
      <div
          class="section-items">
        <MusicBox v-for="item in recommendationData"
                  :artists="item.artists"
                  :track-id="item.id"
                  :track-name="item.album.name"
                  :size="300"
                  :images="item.album.images"
                  link="ALBUM_INDEX"
                  :routeParam="item.id"

        />
      </div>
    </container-full>
  </section>
  <SectionLoader v-else/>

</template>

<script setup lang="ts">
import {useRecommendation} from "~/composables/useSections";
const props=defineProps<{
  followList:{
    total:number,
    artistsData:{id:string,name:string,images:any[]}[]
  }
}>()
const {recommendationFlag,recommendationData}=useRecommendation(props.followList.artistsData)
</script>

<style scoped>

</style>