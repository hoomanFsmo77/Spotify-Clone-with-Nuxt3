<template>
  <section v-if="artistTrackData.flag" id="related-song"  class="section">
    <container-full class="!px-1.6">
      <div class="flex justify-between items-center relative">
        <NuxtLink :to="{name:'SECTION_INDEX',params:{id:id}}">
          <p class="section-link">More like {{name}}</p>
        </NuxtLink >
        <NuxtLink :to="{name:'SECTION_INDEX',params:{id:id}}">
          <p class="show-all-link">Show all</p>
        </NuxtLink>
      </div>
      <div
          class="section-items">
        <MusicBox v-for="item in artistTrackData.data.slice(0,4)"
                  :artists="item.artists"
                  :track-id="item.id"
                  :track-name="item.name"
                  link="PLAYLIST_INDEX"
                  :routeParam="item.id"

        />
      </div>
    </container-full>
  </section>
  <SectionLoader v-else/>
</template>

<script setup lang="ts">
import {useRelatedSong} from "~/composables/useSections";
const props=defineProps<{
  id:string
  name:string
}>();
const {artistTrackData}=useRelatedSong(props)
</script>

<style scoped>

</style>