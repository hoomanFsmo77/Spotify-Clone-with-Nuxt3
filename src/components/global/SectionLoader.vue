<template>
  <section id="section-loader" class="section">
    <container-full class="!px-1.6">
      <div>
        <Skeletor :width="220" :height="30" pill/>
      </div>
      <div class="section-items">
          <div class="v-music-box" v-for="i in 4">
            <div class="v-music-box-image">
              <Skeletor class="!rounded-4" width="100%" :height="200"/>
            </div>
            <div class="v-music-box-content">
              <Skeletor :width="150" :height="30" pill/>
              <Skeletor class="mt-1" :width="100" :height="20" pill/>

            </div>
          </div>
      </div>
    </container-full>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>