<template>
    <section id="recently" v-if="recentlyPlayFlag" class="section">
      <container-full class="!px-1.6">
        <div class="flex justify-between items-center relative">
         <NuxtLink :to="{name:'GENRE_INDEX',params:{name:'recently-played'}}">
           <p class="section-link">Recently played</p>
         </NuxtLink >
          <NuxtLink :to="{name:'GENRE_INDEX',params:{name:'recently-played'}}">
            <p class="show-all-link">Show all</p>
          </NuxtLink>
        </div>
        <div
            class="section-items">
            <MusicBox v-for="item in filterItem(recentlyPlayData).slice(0,4)"
                      :artists="item.track.artists"
                      :track-id="item.track.id"
                      :track-name="item.track.name"
                      link="ARTIST_INDEX"
                      :routeParam="item.track.id"

            />
        </div>
      </container-full>
    </section>
    <SectionLoader v-else/>
</template>

<script setup lang="ts">
import {filterItem} from "~/utils/Helper";
import {useRecently} from "~/composables/useSections";
const {recentlyPlayData,recentlyPlayFlag}=useRecently()

</script>

<style scoped>

</style>