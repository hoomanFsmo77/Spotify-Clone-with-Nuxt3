<template>
  <Modal :fire="errorModalFlag">
    <div class="px-1 py-1.5">
      <h5 class="text-dark font-700">Something went wrong</h5>
      <p class="text-dark mt-1 font-600">Try reloading the page</p>
      <button @click="reloadPage" class="btn btn-primary mt-1.5 ml-auto ">Reload Page</button>
    </div>
  </Modal>
  <Preloader v-if="!userDataFetchFlag"/>
  <div id="default-layout" v-else>
      <LayoutSidebar />
      <main @click="closeSidebar($event)" class=" transition-all relative" :class="{'blur-[4px]':sidebarFlag}">
        <div class="main-shadow"></div>
        <LayoutTopbar />
        <slot />
        <LayoutBottombar/>
      </main>
    </div>
</template>

<script setup lang="ts">
import {useStates} from "~/composables/useStore";
const {sidebarFlag,userDataFetchFlag,errorModalFlag}=useStates()
const closeSidebar = (ev:Event) => {
  const el=ev.target as HTMLElement
  if(sidebarFlag.value && el.tagName!=='svg' && el.tagName!=='path'){
    sidebarFlag.value=false
  }
}
const reloadPage = () => {
  if(process.client){
    location.reload()
  }
}
</script>

<style scoped>

</style>