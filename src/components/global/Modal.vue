<template>
  <client-only>
    <Teleport to="body">
      <div v-fade:50="fire" class="full-page modal">
          <div class="modal-box">
            <slot/>
          </div>
      </div>
      <div @click="closeModal" v-fade:40="fire"  class="dark-overlay"></div>
    </Teleport>
  </client-only>
</template>

<script setup lang="ts">
const {fire}=defineProps<{
  fire:boolean
}>();
const emits=defineEmits<{
  (e:'close'):void
}>()
const closeModal = () => {
  emits('close')
}
</script>

<style scoped>

</style>