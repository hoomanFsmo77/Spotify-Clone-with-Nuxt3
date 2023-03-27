<template>
  <nav class="topbar-navigation">
    <container-full class="flex justify-between items-center">
      <TopbarNavigation/>
      <div class="user-info flex gap-1">
        <a
            class="border-[1px] text-0.8 font-600 border-light/50 py-0.4 px-0.8 rounded-full block transition-all hover:scale-105 hover:border-light"
            target="_blank"
            href="https://www.spotify.com/fr/premium/?utm_source=app&utm_medium=desktop&utm_campaign=upgrade&ref=web_loggedin_upgrade_button">
          Upgrade
        </a>
        <TopbarUser />
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