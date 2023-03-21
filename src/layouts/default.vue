<template>
    <div id="default-layout">
      <LayoutSidebar />
      <div>
        <LayoutTopbar />
        <slot />
        <LayoutBottombar/>
      </div>
    </div>
</template>

<script>
export default {
  name: "default"
}
</script>

<style scoped>

</style>