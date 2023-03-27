<template>
  <div class="flex gap-0.8">
    <button @click="gotoPreviousRoute">
      <Tooltip content="Go back" width="70px" :disable="!backwardFlag">
                <span class="icon-wrapper " :class="{'disable':!backwardFlag}">
                  <font-awesome-icon class="text-light text-1.1" icon="fa-solid fa-chevron-left" />
                </span>
      </Tooltip>
    </button>
    <button @click="gotoNextRoute">
      <Tooltip content="Go forward" width="95px" :disable="!forwardFlag">
              <span class="icon-wrapper" :class="{'disable':!forwardFlag}">
                  <font-awesome-icon class="text-light text-1.1" icon="fa-solid fa-chevron-right" />
             </span>
      </Tooltip>
    </button>


  </div>

</template>

<script setup lang="ts">
import {useNavigation} from "~/composables/useTopbar";
const {gotoPreviousRoute,gotoNextRoute,forwardFlag,backwardFlag}=useNavigation()
</script>

<style scoped>

</style>