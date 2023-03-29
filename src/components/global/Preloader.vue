<template>
  <client-only>
    <teleport to="body">
      <div v-bind="$attrs" class="preloader">
        <breeding-rhombus-spinner
            :animation-duration="2000"
            :size="80"
            color="#aeaeae"
        />
        <h5 class="text-gray">Please wait...</h5>
      </div>
    </teleport>
  </client-only>

</template>

<script setup lang="ts">
import { BreedingRhombusSpinner } from 'epic-spinners'
</script>

<style scoped>
@tailwind components;
@layer components {
  .preloader{
    @apply w-[100vw] h-[100vh] bg-dark-light-2 z-50 flex justify-center items-center flex-col gap-2;
  }
}
</style>