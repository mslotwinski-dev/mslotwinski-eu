<template>
  <h2 class="header">Zainteresowania</h2>
  <section class="container">
    <div class="grid-layout">
      <div
        :class="`item-${i + 1}`"
        class="item"
        v-for="(int, i) in interests"
        :key="i"
      >
        <img :src="require('@/assets/interests/' + int.image + '.jpg')" />
        <div class="text">
          <div class="name">{{ int.name }}</div>
          <div class="desc">{{ int.description }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import interests from '@/data/interests'

export default defineComponent({
  data() {
    return {
      interests,
    }
  },
})
</script>

<style scoped lang="scss">
.grid-layout {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(3, 1fr);

  gap: 0.75rem;
  max-width: 1000px;
  margin: auto;
  min-height: 400px;
}

.item {
  // background-color: $rose;
  overflow: hidden;
  border-radius: 0.5rem;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    transform: translate3d(0, 0, 1px);

    top: 0;
    left: 0;
  }
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.025);
    .text {
      transform: scaleX(1);
    }
  }
}

.text {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  background: $light;
  height: 100%;
  width: 100%;
  padding: 15px;

  top: 0;
  left: 0;

  transition: all 0.3s ease-in-out;
  transform: scaleX(0);
  .name {
    font-size: 15px;
    font-weight: 500;
    color: $dark;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
  .desc {
    font-size: 12px;
  }
}

.item-1 {
  grid-column: 1 / 4;
  grid-row: 1;

  .text {
    transform-origin: left;
  }
}
.item-2 {
  grid-column: 4 / 6;
  grid-row: 1;
  .text {
    transform-origin: right;
  }
}
.item-3 {
  grid-column: 6 / 8;
  grid-row: 1 / 4;
  .text {
    transform-origin: left;
  }
}

.item-4 {
  grid-column: 1 / 3;
  grid-row: 2 / 4;
  .text {
    transform-origin: left;
  }
}
.item-5 {
  grid-column: 3 / 6;
  grid-row: 2 / 4;
  .text {
    transform-origin: right;
  }
}
</style>
