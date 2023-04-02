<template>
  <section v-if="audioBookFlag" id="foryou" class="section">
    <container-full class="!px-1.6">
      <div class="flex justify-between items-center">
        <NuxtLink :to="{name:'SECTION_INDEX',params:{id:'audiobooks'}}">
          <p class="section-link">Audiobooks for you</p>
        </NuxtLink >
      </div>
      <div class="section-items">
        <MusicBox v-for="item in audioBookData"
                  :artists="item.authors"
                  :images="item.images"
                  :size="300"
                  :track-name="item.name"
                  :route-param="item.id"
                  link="SHOW_INDEX"
                  :disableSong="true"

        />
      </div>
    </container-full>
  </section>
  <SectionLoader v-else/>
</template>

<script setup lang="ts">
import {useAudiobook} from "~/composables/useSections";
const {audioBookFlag,audioBookData}=useAudiobook()
// https://open.spotify.com/section/0JQ5DAnM3wGh0gz1MXnucK
</script>

<style scoped>

</style>