<template>
  <div class="text-light">
    <p v-for="item in songData.track.artists">artist name:{{item.name}}</p>
    <hr>
    <p >song name:{{songData.track.name}}</p>
    <hr>
    <nuxt-img  :src="filterImage"/>
  </div>
</template>

<script setup lang="ts">
const props=defineProps<{
  songData:SpotifyApi.UsersRecentlyPlayedTracksResponse['items'][0]
}>()
console.log(props.songData.track.artists)
const {filterImage}=useMusicBox(props)

</script>

<style scoped>

</style>