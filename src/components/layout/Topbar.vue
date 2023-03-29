<template>
  <nav :style="{backgroundColor:`rgba(18,18,18,${scrollYPercent/100})`}" class="topbar-navigation transition-all">
    <container-full class="flex justify-between items-center">
          <font-awesome-icon @click="sidebarFlag=true" class="sidebar-icon" :icon="['fas', 'align-justify']" />
      <TopbarNavigation/>
      <div class="user-info flex gap-1">
        <a
            class="upgrade-link "
            target="_blank"
            href="https://www.spotify.com/fr/premium/?utm_source=app&utm_medium=desktop&utm_campaign=upgrade&ref=web_loggedin_upgrade_button">
          Upgrade
        </a>
        <TopbarUser />
      </div>
    </container-full>

  </nav>
</template>

<script setup lang="ts">
import {useTopbar} from "~/composables/useTopbar";
const sidebarFlag=useState<boolean>('sidebarFlag',()=>false)
const {scrollYPercent}=useTopbar()
</script>

<style scoped>
@tailwind components;
@layer components {
  .upgrade-link{
    @apply border-[1px] text-0.8 font-600 border-light/50 py-0.4 px-0.8 rounded-full block transition-all hover:scale-105 hover:border-light sm:block hidden
  }
}
</style>