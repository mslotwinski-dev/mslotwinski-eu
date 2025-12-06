<template>
  <div class="flex">
    <div>
      <div class="text">
        Fizyka techniczna daje mi unikalne spojrzenie na problemy i możliwości
        ich rozwiązania, a jednocześnie naturalnie łączy wszystkie zagadnienia,
        którymi się zajmuję — od elektroniki przez symulacje po AI i technologie
        przyszłości.
      </div>
      <div class="text">
        Na co dzień zajmuje się fizyką zaawansowanych materiałów badając ich
        właściwości pod kątem zastosowania w nowoczesnych technologiach.
        Specjalizuję się w fizyce procesów jonowych i metalami ziem rzadkich.
        Interesują mnie także fizyka półprzewodników i układów
        mikroprocesorowych, technologie przetwarzania energii oraz materiały
        organiczne i 2D, a także stosowana fizyka i technika jądrowa.
      </div>
    </div>
    <div class="graph">
      <div
        class="dot"
        v-for="(item, index) in items"
        :key="index"
        :style="{
          left: item.x + 'px',
          top: item.y + 'px',
          width: item.bubble_size + 'px',
          height: item.bubble_size + 'px',
          animationDuration: item.duration,
          animationDelay: item.delay,
        }"
      >
        <img
          :src="require(`@/assets/tshaped/${item.icon}.svg`)"
          :style="{ width: item.size + 'px', height: item.size + 'px' }"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      items: [
        {
          icon: 'physics',
          x: 100,
          y: 0,
          size: 50,
          bubble_size: 90,
          duration: '0s',
          delay: '0s',
        },
        {
          icon: 'electronics',
          x: 200,
          y: 5,
          size: 45,
          bubble_size: 70,
          duration: '0s',
          delay: '0s',
        },
        {
          icon: 'telecommunications',
          x: 180,
          y: 80,
          size: 30,
          bubble_size: 50,
          duration: '0s',
          delay: '0s',
        },
        {
          icon: 'informatics',
          x: 30,
          y: 60,
          size: 38,
          bubble_size: 70,
          duration: '0s',
          delay: '0s',
        },
        {
          icon: 'ai',
          x: 110,
          y: 100,
          size: 30,
          bubble_size: 50,
          duration: '0s',
          delay: '0s',
        },
      ],
    }
  },
  mounted() {
    this.items.forEach((item) => {
      item.duration = `${3 + Math.random() * 4}s`
      item.delay = `${Math.random() * -5}s`
    })
  },
})
</script>

<style lang="scss" scoped>
@keyframes float {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, -5px);
  }
  100% {
    transform: translate(0, 0);
  }
}

.flex {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
}

.text {
  width: 800px;
  text-align: justify;
  font-size: 17px;
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.graph {
  width: 320px;
  height: 150px;
  background-size: cover;
  position: relative;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: 0.2s all;
  }
}

.dot {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: $main;
  background-image: url('@/assets/tshaped/bubble.png');
  background-size: cover;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s all ease-in-out;

  animation-name: float;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;

  img {
    width: 45px;
    height: 45px;
    filter: invert(0.5) grayscale(1) brightness(2);
  }
}
</style>
