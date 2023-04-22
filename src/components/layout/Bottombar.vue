<template>
  <section id="music-controller">
    <container-full class="h-full justify-between !p-0.9 flex gap-2 items-center">
      <div class="flex gap-1 items-center">
        <nuxt-img v-if="getTrackFullInfo.image" width="64" height="64" :src="getTrackFullInfo.image"/>
        <div v-if="getTrackFullInfo.id">
          <NuxtLink class="hover:underline" :to="{name:'ALBUM_INDEX',params:{id:getTrackFullInfo.id}}">
            {{getTrackFullInfo.name}}
          </NuxtLink>
          <br>
          <NuxtLink class="!text-0.7 text-gray hover:underline" :to="{name:'ARTIST_INDEX',params:{id:'7tYKF4w9nC0nq9CsPZTHyP'}}">
            {{getTrackFullInfo.artist}}
          </NuxtLink>
        </div>
        <Tooltip content="Save to Your Library" width="158px" className="!top-[-43px] !left-[-43px] !bottom-[34px]">
          <font-awesome-icon class="text-gray ml-1 !text-1.2 cursor-pointer" icon="fa-regular fa-heart" />
        </Tooltip>
      </div>
      <div >
        <div class="flex gap-1.8 justify-center items-center">
          <Tooltip content="Enable Shuffle" width="120px" className="!top-[-43px] !left-[-43px] !bottom-[34px]">
            <font-awesome-icon class="controller-icon" icon="fa-solid fa-shuffle" />
          </Tooltip>
          <Tooltip content="Previous" width="75px" className="!top-[-43px] !left-[-30px] !bottom-[34px]">
            <font-awesome-icon class="controller-icon" icon="fa-solid fa-backward-step" />
          </Tooltip>
          <Tooltip content="Play" width="41px" className="!top-[-43px] !left-[-5px] !bottom-[38px]">
            <div class="play-controller">
              <font-awesome-icon  icon="fa-solid fa-play" />
            </div>
          </Tooltip>
          <Tooltip content="Next" width="45px" className="!top-[-43px] !left-[-15px] !bottom-[34px]">
            <font-awesome-icon class="controller-icon" icon="fa-solid fa-forward-step" />
          </Tooltip>
          <Tooltip content="Enable Repeat" width="120px" className="!top-[-43px] !left-[-43px] !bottom-[34px]">
            <font-awesome-icon class="controller-icon" icon="fa-solid fa-repeat" />
          </Tooltip>
        </div>
        <div class="progress-bar-section custom-range">
          <span class="progress-bar-timer">
            00:30
          </span>
          <input class="range-input " type="range">
          <div class="progress-bar">
            <div class="progress-bar-inner"></div>
          </div>
        </div>
      </div>
      <div class="pr-1 flex gap-1 items-center">
        <Tooltip content="Lyrics" width="52px" className="!top-[-43px] !left-[-18px] !bottom-[34px]">
          <font-awesome-icon class="controller-icon" icon="fa-solid fa-microphone" />
        </Tooltip>
        <Tooltip content="Queue" width="58px" className="!top-[-43px] !left-[-18px] !bottom-[34px]">
          <font-awesome-icon class="controller-icon" icon="fa-solid fa-bars" />
        </Tooltip>
        <div class="flex gap-1 items-center">
          <Tooltip content="Mute" width="52px" className="!top-[-43px] !left-[-10px] !bottom-[34px]">
            <font-awesome-icon class="controller-icon" icon="fa-solid fa-volume-high" />
          </Tooltip>
          <input class="custom-volume-range" type="range">
        </div>


<!--        <p>-->
<!--          <font-awesome-icon icon="fa-solid fa-microphone" />-->
<!--          <font-awesome-icon icon="fa-solid fa-bars" />-->
<!--          <font-awesome-icon icon="fa-solid fa-volume-high" />-->
<!--        </p>-->
      </div>
    </container-full>
  </section>
</template>

<script setup lang="ts">
import {useMusicStore} from "~/composables/useStore";
const {getTrackFullInfo,musicStore}=useMusicStore()
onMounted(()=>{
  musicStore.setInitialTrack()
})

</script>

<style >
.custom-range input[type=range]::-webkit-slider-thumb ,
.custom-range input[type=range]::-webkit-slider-runnable-track,
.custom-range input[type=range]::-webkit-slider-thumb,
.custom-range input[type=range]::-moz-range-track,
.custom-range input[type=range]::-moz-range-thumb{
  display: none;
  -webkit-appearance: none;
  opacity: 0;
  visibility: hidden;
}

.custom-volume-range{
  -webkit-appearance: none;
  appearance: none;
  background: #1abc54 !important;
  height: 4px;
  border-radius: 10px;
  cursor: pointer;
  width: 80px;
}


.custom-volume-range::-webkit-slider-thumb ,
.custom-volume-range::-webkit-slider-runnable-track,
.custom-volume-range::-moz-range-thumb{
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: none;
  outline: none;
}


</style>