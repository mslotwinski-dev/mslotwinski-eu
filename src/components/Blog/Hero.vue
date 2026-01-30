<template>
  <div class="container" :style="{ backgroundImage: `url(${article.img})` }">
    <div class="content">
      {{ article.title }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['article'],
})
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 70vh;
  background-size: cover;
  box-shadow: 0 0 15px $black;
}

.content {
  width: 100%;
  height: 100%;
  padding: 0 20vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: 600;
  backdrop-filter: blur(8px);
  color: $light;
  background: #1b202366;
  text-align: center;
}
</style>
