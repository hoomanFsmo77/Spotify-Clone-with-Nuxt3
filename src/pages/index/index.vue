<template>
  <DashboardRecently/>
  <DashboardAudiobooks/>
  <DashboardShows/>
  <template v-if="followedSectionFlag">
    <DashboardFallowArtist :follow-list="followedSectionData" />
    <DashboardRecommend
        v-for="item in getRandomItem(followedSectionData.artistsData)"
        :id="item.id"
        :name="item.name"
    />
  </template>

</template>

<script setup lang="ts">
import {getRandomItem} from "~/utils/Helper";
import {useFollowedArtist} from "~/composables/useSections";
definePageMeta({name:'DASHBOARD_INDEX', path:'/'})
const {followedSectionData,followedSectionFlag}=useFollowedArtist()



</script>

<style scoped>
</style>