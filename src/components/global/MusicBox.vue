<template>
  <div class="v-music-box group">
    <div class="v-music-box-image">
      <nuxt-img v-if="artist.flag" :src="artist.image"/>
      <button v-pulse="changePlayStatus" class="btn-play group-hover:!opacity-100 group-hover:!visible group-hover:!bottom-[10px]">
        <font-awesome-icon v-if="play.flag" class="text-1.2" icon="fa-solid fa-pause" />
        <font-awesome-icon v-else class="text-1.2" icon="fa-solid fa-play" />
      </button>
    </div>
    <div class="v-music-box-content">
        <p :title="songData.track.name" class="font-600 text-hidden">{{songData.track.name}}</p>
      <p class="mt-0.5">
        <template v-if="songData.track.artists.length>3">
              <span class="!text-0.8 font-600 text-gray" v-for="(item,index) in songData.track.artists">
                  {{index<2 ? item.name+', ' : index===2 ? item.name+' and more': null}}
              </span>
        </template>
        <template v-else>
          <span class="!text-0.8 font-600 text-gray" v-for="(item,index) in songData.track.artists">
              {{index+1===songData.track.artists.length ? item.name: item.name+ ', '}}
            </span>
        </template>

      </p>
    </div>
    <NuxtLink :to="{name:'ARTIST_INDEX',params:{id:songData.track.artists[0].id}}" class="link-stretch"></NuxtLink>
  </div>
</template>

<script setup lang="ts">
const props=defineProps<{
  songData:SpotifyApi.UsersRecentlyPlayedTracksResponse['items'][0]
}>();
const {artist,changePlayStatus,play}=useMusicBox(props)

</script>

<style scoped>

</style>