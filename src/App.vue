<template>
  <router-view v-slot="{ Component }">
    <transition name="route" mode="in-out">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  mounted() {
    document.title = 'Mateusz Słotwiński'
  },
})
</script>

<style lang="scss">
.route-enter-from {
  opacity: 0;
  transform: translateX(2em);
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-2em);
}

.route-enter-active,
.route-leave-active {
  transition: 0.3s all ease;
}
</style>
