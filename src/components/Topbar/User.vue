<template>
  <Tooltip  v-if="userDataFetchFlag" :disable="isActive" :content="userData.display_name" className="!left-[20px]">
    <div @click="isActive=!isActive" v-click-outside="closeBox" :class="{'bg-dark-light-2':isActive}"  class="user-box">
      <nuxt-img class="rounded-full w-[28px] h-[28px] object-cover" width="28" height="28" :src="userData.images[0].url"/>
      <p class="font-700 text-hidden max-w-[130px]">{{userData.display_name}}</p>
      <font-awesome-icon class="text-light" icon="fa-solid fa-caret-down" />
    </div>
    <Transition name="fade">
      <Dropdown width="202px" top="43px" v-if="isActive">
        <li >
          <a class="p-0.7 flex justify-between  items-center cursor-pointer hover:bg-[#444]" target="_blank" href="https://www.spotify.com/tr-tr/account/overview/">
            <p class="text-0.8">Account</p>
            <font-awesome-icon class="text-light/70" icon="fa-solid fa-up-right-from-square" />
          </a>
        </li>
        <li >
          <NuxtLink :to="{name:'USER_INDEX',params:{id:userData.id}}" class="p-0.7 w-full block flex justify-between  items-center cursor-pointer hover:bg-[#444]" >
            <p class="text-0.8">Profile</p>
          </NuxtLink>
        </li>
        <li >
          <a class="p-0.7 block flex justify-between  items-center cursor-pointer hover:bg-[#444]" href="https://www.spotify.com/tr-tr/premium/" target="_blank">
            <p class="text-0.8">Upgrade to premium</p>
            <font-awesome-icon class="text-light/70" icon="fa-solid fa-up-right-from-square" />
          </a>

        </li>
        <li >
          <NuxtLink class="p-0.7 block flex justify-between  items-center cursor-pointer hover:bg-[#444]" to="/preferences">
            <p class="text-0.8">Setting</p>
          </NuxtLink>
        </li>
        <li class="w-full h-[1px] bg-[#444]"></li>
        <li >
          <button @click="logoutHandler" class="p-0.7 w-full flex justify-between  items-center cursor-pointer hover:bg-[#444]">
            <p class="text-0.8">Log out</p>
          </button>
        </li>
      </Dropdown>
    </Transition>

  </Tooltip>
</template>

<script setup lang="ts">
import {useStates} from "~/composables/useStore";
const {userData,userDataFetchFlag}=useStates();
const isActive=ref<boolean>(false)
const closeBox = () => {
  isActive.value=false
}
const logoutHandler = async () => {
  try {
    const data=await $fetch('/api/logout',{method:'POST'})
    if(process.client){
      localStorage.removeItem('spotify-refresh-token')
    }
    navigateTo({name:'LOGIN'})
  }catch (err) {
    console.log(err)
  }
}
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