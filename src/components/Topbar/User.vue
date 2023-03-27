<template>
  <Tooltip  v-if="userDataFetchFlag" :disable="isActive" :content="userData.display_name" className="!left-[20px]">
    <button @focus="isActive=true" @blur="isActive=false"  class="user-box">
      <nuxt-img class="rounded-full w-[28px] h-[28px] object-cover" width="28" height="28" :src="userData.images[0].url"/>
      <p class="font-700 text-ellipsis overflow-hidden whitespace-nowrap max-w-[130px]">{{userData.display_name}}</p>
      <font-awesome-icon class="text-light" icon="fa-solid fa-caret-down" />
    </button>
    <Transition name="fade">
      <Dropdown width="202px" top="43px" v-if="isActive">
        <li class="p-0.7 flex justify-between  items-center cursor-pointer hover:bg-[#444]">
          <p class="text-0.8">Account</p>
          <font-awesome-icon class="text-light/70" icon="fa-solid fa-up-right-from-square" />
        </li>
        <li class="p-0.7 flex justify-between  items-center cursor-pointer hover:bg-[#444]">
          <p class="text-0.8">Profile</p>
        </li>
        <li class="p-0.7 flex justify-between  items-center cursor-pointer hover:bg-[#444]">
          <p class="text-0.8">Upgrade to premium</p>
          <font-awesome-icon class="text-light/70" icon="fa-solid fa-up-right-from-square" />
        </li>
        <li class="p-0.7 flex justify-between  items-center cursor-pointer hover:bg-[#444]">
          <p class="text-0.8">Setting</p>
        </li>
        <li class="w-full h-[1px] bg-[#444]"></li>
        <li class="p-0.7 flex justify-between  items-center cursor-pointer hover:bg-[#444]">
          <p class="text-0.8">Log out</p>
        </li>
      </Dropdown>
    </Transition>

  </Tooltip>
</template>

<script setup lang="ts">
import {useStates} from "~/composables/useStore";
const {userData,userDataFetchFlag}=useStates();
const isActive=ref<boolean>(false)

</script>

<style scoped>
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
}
</style>