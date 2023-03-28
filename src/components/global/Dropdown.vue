<template >
  <div  class="dropdown ">
      <ul class="dropdown-inside">
          <slot ></slot>
      </ul>
  </div>
</template>

<script >
export default {
  props:['width','top']
}
</script>
<style lang="css">
@tailwind components;
.dropdown{
  width: v-bind(width);
  top: v-bind(top);
  @apply absolute bg-white overflow-hidden rounded-2 bg-dark-light-2 right-0 shadow-[0_5px_15px_rgba(0,0,0,0.19)] z-30;
}
</style>