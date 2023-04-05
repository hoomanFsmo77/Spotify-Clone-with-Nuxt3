<template>
  <section v-if="playListFlag" id="playlist"  class="section">
    <container-full class="!px-1.6">
      <div class="flex justify-between items-center relative">
        <p class="section-title">Your Playlist</p>
      </div>
      <div
          class="section-items">
        <MusicBox v-for="item in playListData"
                  :artists="'By '+item.owner.display_name"
                  :images="item.images"
                  :track-id="item.id"
                  :track-name="item.name"
                  link="PLAYLIST_INDEX"
                  :routeParam="item.id"
                  :disableSong="true"

        />
      </div>
    </container-full>

  </section>
  <SectionLoader v-else/>
</template>

<script setup lang="ts">
import {usePlaylist} from "~/composables/useSections";
const {playListFlag,playListData}=usePlaylist()
</script>

<style scoped>

</style>