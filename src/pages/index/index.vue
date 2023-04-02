<template>
  <DashboardRecently/>
  <DashboardAudiobooks/>
  <DashboardShows/>
  <DashboardFallowArtist :follow-list="followedSectionData" v-if="followedSectionFlag"/>
</template>

<script setup lang="ts">
import {useFollowedArtist} from "~/composables/useSections";
definePageMeta({name:'DASHBOARD_INDEX', path:'/'})
const {followedSectionData,followedSectionFlag}=useFollowedArtist()



</script>

<style scoped>
</style>