<template>
  <aside  :class="{'!left-0 z-[10]':sidebarFlag}" id="sidebar">
    <div class="banner">
      <NuxtLink class="md:!flex !hidden" :to="{name:'DASHBOARD_INDEX'}">
        <svg style="color: white" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-spotify" viewBox="0 0 16 16"> <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z" fill="white"></path>
        </svg>
        <h3 class="ml-0.5 font-600">Spotify</h3>
      </NuxtLink>
      <div class="md:hidden flex mb-2 justify-between items-center">
        <NuxtLink class="!mb-0" :to="{name:'DASHBOARD_INDEX'}">
          <svg style="color: white" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-spotify" viewBox="0 0 16 16"> <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z" fill="white"></path>
          </svg>
          <h4 class="ml-0.5 font-600">Spotify</h4>
        </NuxtLink>
        <font-awesome-icon @click="sidebarFlag=false" class="sidebar-icon" :icon="['fab', 'mixer']" />
      </div>
    </div>
    <div v-if="userDataFetchFlag" class="pages-list">
      <ul>
        <li class="mb-0.9" v-for="item in sidebarData.section_1" :key="item.id">
          <NuxtLink active-class="sidebar-list-item-active" exact-active-class="sidebar-list-item-active" class=" sidebar-list-item" :to="item.link">
            <div class=" w-[20%]">
              <font-awesome-icon class="text-1.3 sidebar-list-item-hover" :icon="item.icon" />
            </div>
            <p class=" font-700 leading-1 sidebar-list-item-hover">{{item.title}}</p>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div v-if="userDataFetchFlag" class="pages-list">
      <ul>
        <li class="mb-0.9" v-for="item in sidebarData.section_2" :key="item.id">
          <NuxtLink active-class="sidebar-list-item-active" exact-active-class="sidebar-list-item-active" class=" sidebar-list-item" :to="item.link">
            <div class=" w-[20%]">
              <font-awesome-icon class="text-1.3 sidebar-list-item-hover" :icon="item.icon" />
            </div>
            <p class=" font-700 leading-1 sidebar-list-item-hover">{{item.title}}</p>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div class="divider"></div>
    <div v-if="userDataFetchFlag" class="user-playlist">
      <ul>
        <li v-for="item in userPlayListItems">
          <NuxtLink exact-active-class="sidebar-list-item-active"
                    class="sidebar-list-item"
                    :to="`/playlist/`+item.id">
            <p class="sidebar-list-item-hover font-600">{{item.name}}</p>
          </NuxtLink>

        </li>
      </ul>
    </div>
    <client-only><div class="download-app mt-1.5">
        <NuxtLink  to="/download" class="flex items-center">
          <font-awesome-icon class="text-1.3" icon="fa-regular fa-circle-down" />
          <p class="ml-1">Install App</p>
        </NuxtLink>
      </div></client-only>
  </aside>
</template>

<script setup lang="ts">
import {useSidebar} from "~/composables/useSidebar";
const {userDataFetchFlag}=useStates()
const sidebarFlag=useState<boolean>('sidebarFlag')
const {sidebarData,userPlayListItems}=useSidebar()
</script>

<style scoped>

</style>