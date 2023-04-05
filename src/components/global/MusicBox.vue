<template>
  <div class="v-music-box group">
    <div class="v-music-box-image">
      <template v-if="images===undefined||null">
        <nuxt-img v-if="artist.flag" :src="artist.image"/>
        <Skeletor v-else class="!rounded-4 !absolute !top-0 left-0" width="100%" :height="200"/>
      </template>
      <template v-else-if="images.length===1">
        <nuxt-img  v-load :src="images[0].url"/>
        <Skeletor  class="!rounded-4 !absolute !top-0 left-0" width="100%" :height="200"/>
      </template>
      <template v-else-if="images.length>1">
        <nuxt-img v-if="filterImage(images,size)" v-load :src="filterImage(images,size)"/>
        <Skeletor  class="!rounded-4 !absolute !top-0 left-0" width="100%" :height="200"/>
      </template>
      <template v-else>
        <div class="h-[190px] flex justify-center items-center bg-dark-light-2 rounded-4">
          <svg role="img" height="64" width="64"  viewBox="0 0 24 24"  class="fill-gray"><path d="M6 3h15v15.167a3.5 3.5 0 1 1-3.5-3.5H19V5H8v13.167a3.5 3.5 0 1 1-3.5-3.5H6V3zm0 13.667H4.5a1.5 1.5 0 1 0 1.5 1.5v-1.5zm13 0h-1.5a1.5 1.5 0 1 0 1.5 1.5v-1.5z"></path></svg>
        </div>
      </template>

      <button v-if="!disableSong" v-pulse="changePlayStatus" class="btn-play group-hover:!opacity-100 group-hover:!visible group-hover:!bottom-[10px]">
        <font-awesome-icon v-if="play.flag" class="text-1.2" icon="fa-solid fa-pause" />
        <font-awesome-icon v-else class="text-1.2" icon="fa-solid fa-play" />
      </button>
    </div>
    <div class="v-music-box-content">
        <p :title="trackName" class="font-600 text-hidden">{{trackName}}</p>
      <p class="mt-0.5 text-hidden">
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
  disableSong:boolean,
  size:number
}>();
const {artist,changePlayStatus,play,filterImage}=useMusicBox(props)

</script>

<style scoped>

</style>