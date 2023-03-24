<template>
  <div class="tooltip relative" @mouseenter="hoverFlag=true" @mouseleave="hoverFlag=false">
    <slot/>
    <Transition name="fade">
      <p :style="{width:width}" class="tooltip-content" v-if="!disable && hoverFlag">{{content}}</p>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const hoverFlag=ref<boolean>(false)
const props=defineProps({
  content:{
    type:String
  },
  disable:{
    type:Boolean,
    default:false
  },
  width:{
    type:String,
    default:'auto'
  }
})

</script>

<style>
@tailwind components;
@layer components {
  .fade-enter-active,.fade-leave-active{
    @apply transition duration-300 ease-in-out
  }
  .fade-enter-from,.fade-leave-to{
    @apply opacity-0 invisible
  }
  .fade-enter-to,.fade-leave-from{
    @apply opacity-100 visible
  }
  .tooltip-content{
    @apply absolute w-[92px] bottom-[-43px] shadow-[0_0px_27px_rgba(0,0,0,0.7)] left-[-20px] bg-dark-light-2 p-0.3 rounded-4
  }
}

</style>