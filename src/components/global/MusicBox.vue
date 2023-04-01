<template>
  <div class="v-music-box group">
    <div class="v-music-box-image">
      <template v-if="images">
        <nuxt-img v-load :src="filterImage(images,300)"/>
        <Skeletor  class="!rounded-4" width="100%" :height="200"/>
      </template>
      <template v-else>
        <nuxt-img v-if="artist.flag" :src="artist.image"/>
        <Skeletor v-else class="!rounded-4" width="100%" :height="200"/>
      </template>

      <button v-if="!disableSong" v-pulse="changePlayStatus" class="btn-play group-hover:!opacity-100 group-hover:!visible group-hover:!bottom-[10px]">
        <font-awesome-icon v-if="play.flag" class="text-1.2" icon="fa-solid fa-pause" />
        <font-awesome-icon v-else class="text-1.2" icon="fa-solid fa-play" />
      </button>
    </div>
    <div class="v-music-box-content">
        <p :title="trackName" class="font-600 text-hidden">{{trackName}}</p>
      <p class="mt-0.5">
        <template v-if="typeof artists==='string'">
          <span class="!text-0.8 font-600 text-gray">{{artists}}</span>
        </template>

        <template v-else-if="typeof  artists!=='string' &&artists.length>3">
              <span class="!text-0.8 font-600 text-gray" v-for="(item,index) in artists">
                  {{index<2 ? item.name+', ' : index===2 ? item.name+' and more': null}}
              </span>
        </template>
        <template v-else>
          <span class="!text-0.8 font-600 text-gray" v-for="(item,index) in artists">
              {{index+1===artists.length ? item.name: item.name+ ', '}}
            </span>
        </template>

      </p>
    </div>
    <NuxtLink :to="{name:link,params:{id:routeParam}}" class="link-stretch"></NuxtLink>
  </div>
</template>

<script setup lang="ts">
const props=defineProps<{
  artists:{id:string,name:string}[] | string
  trackName:string,
  link:string,
  images:any[],
  routeParam:string,
  disableSong:boolean
}>();
const {artist,changePlayStatus,play,filterImage}=useMusicBox(props)

</script>

<style scoped>

</style>