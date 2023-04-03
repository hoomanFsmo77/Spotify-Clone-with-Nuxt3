<template>
  <DashboardRecently/>
  <DashboardAudiobooks/>
  <DashboardShows/>
  <template v-if="followedSectionFlag">
    <DashboardFollowArtist :follow-list="followedSectionData" />
    <DashboardRelatedSong
        v-for="item in getRandomItem(followedSectionData.artistsData)"
        :id="item?.id"
        :name="item?.name"
    />
    <DashboardRecommendation :follow-list="followedSectionData"/>
  </template>
  <DashboardNewReleases/>
</template>

<script setup lang="ts">
import {getRandomItem} from "~/utils/Helper";
import {useFollowedArtist} from "~/composables/useSections";
definePageMeta({name:'DASHBOARD_INDEX', path:'/'})
const {followedSectionData,followedSectionFlag}=useFollowedArtist()

</script>

<style scoped>
</style>