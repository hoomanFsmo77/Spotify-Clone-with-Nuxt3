<template>
  <section v-if="showSectionFlag" id="shows" class="section">
    <container-full class="!px-1.6">
      <div class="flex justify-between items-center">
        <NuxtLink :to="{name:'SECTION_INDEX',params:{id:'shows'}}">
          <p class="section-link">Shows you might like</p>
        </NuxtLink >
        <NuxtLink :to="{name:'SECTION_INDEX',params:{id:'shows'}}">
          <p class="show-all-link">Show all</p>
        </NuxtLink>
      </div>
      <div
          class="section-items">
        <MusicBox v-for="item in showSectionData"
                  :artists="item.publisher"
                  :track-name="item.name"
                  link="SHOW_INDEX"
                  :routeParam="item.id"
                  :images="item.images"
                  :size="300"
                  :disableSong="true"

        />


      </div>
    </container-full>
  </section>
  <SectionLoader v-else/>

</template>

<script setup lang="ts">
import {useShows} from "~/composables/useSections";

const {showSectionFlag,showSectionData}=useShows()
</script>

<style scoped>

</style>