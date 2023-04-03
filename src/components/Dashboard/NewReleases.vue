<template>
  <section id="new-release" v-if="newReleaseFlag"  class="section">
    <container-full class="!px-1.6">
      <div class="flex justify-between items-center relative">
        <NuxtLink :to="{name:'SECTION_INDEX',params:{id:'new-releases'}}">
          <p class="section-link">New release for you</p>
        </NuxtLink >
        <NuxtLink :to="{name:'SECTION_INDEX',params:{id:'new-releases'}}">
          <p class="show-all-link">Show all</p>
        </NuxtLink>
      </div>
      <div
          class="section-items">
        <MusicBox v-for="item in newReleaseData"
                  :artists="item.artists"
                  :track-id="item.id"
                  :track-name="item.name"
                  :images="item.images"
                  :size="300"
                  link="ALBUM_INDEX"
                  :routeParam="item.id"
        />
      </div>
    </container-full>
  </section>
  <SectionLoader v-else/>
</template>

<script setup lang="ts">
import {useNewReleases} from "~/composables/useSections";
const {newReleaseFlag,newReleaseData}=useNewReleases()

</script>

<style scoped>

</style>