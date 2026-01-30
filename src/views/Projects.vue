<template>
  <div>
    <Start />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Start from '@/components/Projects/Start.vue'

export default defineComponent({
  name: 'Projects',
  components: {
    Start,
  },
})
</script>

<style>
main {
  margin: 10vh auto;
}
</style>
