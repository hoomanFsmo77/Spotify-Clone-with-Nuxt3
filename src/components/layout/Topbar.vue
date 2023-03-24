<template>
  <nav class="topbar-navigation">
    <container-full>
      <div class="flex gap-0.8">
     <Tooltip content="Go back" width="70px" :disable="true">
        <span class="icon-wrapper disable">
            <font-awesome-icon class="text-light text-1.1" icon="fa-solid fa-chevron-left" />
         </span>
     </Tooltip>
      <Tooltip content="Go forward" width="95px">
        <span class="icon-wrapper">
            <font-awesome-icon class="text-light text-1.1" icon="fa-solid fa-chevron-right" />
        </span>
      </Tooltip>

      </div>
      <!--    <font-awesome-icon @click="sidebarFlag=true" class="sidebar-icon" :icon="['fas', 'align-justify']" />-->
      <!--    <h5>top bar</h5>-->

    </container-full>

  </nav>
</template>

<script setup lang="ts">

const sidebarFlag=useState<boolean>('sidebarFlag',()=>false)

</script>

<style scoped>

</style>