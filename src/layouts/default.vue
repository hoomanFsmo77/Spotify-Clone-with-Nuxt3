<template>
    <div id="default-layout">
      <LayoutSidebar />
      <div @click="closeSidebar($event)" class="bg-dark-light transition-all" :class="{'blur-[4px]':sidebarFlag}">
        <LayoutTopbar />
        <slot />
        <LayoutBottombar/>
      </div>
    </div>
</template>

<script setup lang="ts">
const sidebarFlag=useState<boolean>('sidebarFlag')
const closeSidebar = (ev:Event) => {
  const el=ev.target as HTMLElement
  if(sidebarFlag.value && el.tagName!=='svg' && el.tagName!=='path'){
    sidebarFlag.value=false
  }
}

</script>

<style scoped>

</style>