<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Hero',
})
</script>

<style scoped>
div {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-image: url('../../../assets/start.png');
  background-size: cover;
  background-position: center;
}
</style>
