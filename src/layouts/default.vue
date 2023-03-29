<template>
  <Preloader v-if="!userDataFetchFlag"/>
    <div id="default-layout" v-else>
      <LayoutSidebar />
      <main @click="closeSidebar($event)" class="bg-dark-light transition-all relative" :class="{'blur-[4px]':sidebarFlag}">
        <LayoutTopbar />
        <slot />
        <LayoutBottombar/>
      </main>
    </div>
</template>

<script setup lang="ts">
import {useStates} from "~/composables/useStore";
const {sidebarFlag,userDataFetchFlag}=useStates()
const closeSidebar = (ev:Event) => {
  const el=ev.target as HTMLElement
  if(sidebarFlag.value && el.tagName!=='svg' && el.tagName!=='path'){
    sidebarFlag.value=false
  }
}

</script>

<style scoped>

</style>