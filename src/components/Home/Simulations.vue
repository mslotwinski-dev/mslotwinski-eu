<template>
  <div class="blog">
    <div
      class="section"
      :style="{
        backgroundImage:
          `url(` +
          require(`@/assets/screenshots/${simprojets[currentIndex].screenshots[0]}`) +
          `)`,
      }"
    />
    <!-- <div class="checkout">Sprawdź moje wpisy</div> -->
    <div class="abc">
      <header>Zanurkuj w świat fizyki komputerowej!</header>
      <div class="container">
        <div class="articles" :style="{ left: `-${currentIndex * 1240}px` }">
          <Simulation v-for="sim in simprojets" :key="sim.title" :sim="sim" />
        </div>
      </div>
      <div class="barcont">
        <div class="button left" @click="left()">
          <ic icon="angles-left" />
        </div>
        <div class="bar">
          <ic
            class="dot"
            icon="circle"
            :class="{ active: i === currentIndex + 1 }"
            v-for="i in simprojets.length"
            :key="i"
          />
        </div>
        <div class="button right" @click="right()">
          <ic icon="angles-right" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Simulation from './Simulation.vue'
import projects from '@/data/projects'

export default defineComponent({
  data() {
    return {
      simprojets: projects
        .map((c) => c.projects)
        .reverse()
        .flat()
        .filter((p) => p.simulation),
      currentIndex: 0,
      slideMoveTime: 0,
    }
  },
  components: {
    Simulation,
  },
  methods: {
    left() {
      this.currentIndex =
        (this.currentIndex - 1 + this.simprojets.length) %
        this.simprojets.length
      this.slideMoveTime = -5
    },
    right() {
      this.currentIndex = (this.currentIndex + 1) % this.simprojets.length
      this.slideMoveTime = -5
    },
    autoSlide() {
      setInterval(() => {
        this.slideMoveTime++
        if (this.slideMoveTime >= 7) {
          this.currentIndex = (this.currentIndex + 1) % this.simprojets.length
          this.slideMoveTime = 0
        }
      }, 1000)
    },
  },
  mounted() {
    this.autoSlide()
  },
})
</script>

<style lang="scss" scoped>
.blog {
  display: flex;
  justify-content: center;

  padding: 40px 0;
  margin: 40px 0;
}

.container {
  width: 1220px;
  overflow: hidden;
}

.articles {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
  // left: -420px;
  transition: left 0.5s ease;
}

.section {
  width: 100vw;
  height: 100%;
  position: absolute;
  top: 0;
  background: $dark;
  background-size: cover;
  background-position: center;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #28353abb;
    backdrop-filter: blur(10px);
  }
}

.abc {
  display: flex;
  flex-direction: column;
  align-items: center;

  .dot {
    font-size: 10px;
    animation: float 3s ease-in-out infinite;
    &.active {
      color: $dark;
    }
  }
}

.barcont {
  display: flex;
  align-items: center;
  font-size: 20px;
  gap: 20px;
  color: $light;
  margin-top: 20px;
}

.bar {
  background: $dark_gray;
  display: inline-flex;
  gap: 5px;
  padding: 10px 30px;
  border-radius: 1000px;
}

.button {
  cursor: pointer;
}

header {
  font-size: 24px;
  font-weight: 600;
  color: $light;
  margin-bottom: 20px;
  text-transform: uppercase;
}
</style>
