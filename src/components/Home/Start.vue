<template>
  <header>
    <Hero />
    <Navbar />
    <div class="container" :class="{ active: scrollPosition > 100 }">
      <div class="column">
        <div class="me">
          <img src="@/assets/logo.png" />
          <h2>Mateusz Słotwiński</h2>
        </div>
        <h3>Inżynier • Fizyk • Programista</h3>
      </div>
      <RelativeNavbar class="only-active" />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Hero from '@/components/Shared/styled/Hero.vue'
import Navbar from '@/components/Shared/Navbar.vue'
import RelativeNavbar from '@/components/Home/RelativeNavbar.vue'

export default defineComponent({
  data() {
    return {
      scrollPosition: 0,
    }
  },
  components: {
    Hero,
    Navbar,
    RelativeNavbar,
  },
  methods: {
    _scrollListener() {
      this.scrollPosition = Math.round(window.pageYOffset)
    },
  },
  created() {
    this._scrollListener()

    window.addEventListener('scroll', this._scrollListener)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this._scrollListener)
  },
})
</script>

<style scoped lang="scss">
$t: 0.5s;

header {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: $dark;
}

h2 {
  font-size: calc(17px + 1.7vw);
  font-weight: 500;
  margin: 0;
  font-family: 'One';
}

h3 {
  font-size: calc(8px + 0.8vw);
  font-weight: 500;
  margin: 0;
}
img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
}

.only-active {
  opacity: 0;
  transform: scaleX(0);
  font-size: 0px;
  transition: 0.2s all;
  display: none;
}

.container {
  $width: 900px;

  padding: 20px;
  border-radius: 50px;
  width: 600px;
  height: 300px;
  margin: 20px;
  backdrop-filter: blur(10px);
  border: 3px solid $gray;
  left: calc(50vw - $width / 2);
  top: calc(40vh - 150px);

  position: fixed;
  transition: all $t;

  position: absolute;
  border-radius: 50px;
  width: $width;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: $t all;
  img {
    margin-bottom: 0px;
  }

  .content h2 {
    transition: all $t ease-in-out !important;
  }

  &.active {
    position: fixed;
    top: 20px;
    left: 20px;
    border: 0;
    background: $dark;
    height: 75px;
    border-radius: 15px;
    padding: 0px;
    z-index: 10;

    justify-content: space-evenly;
    border: 0px solid $dark;
    color: $light;
    width: calc(100vw - 40px);
    height: 75px;
    top: 0px;
    left: 0px;
    h2 {
      font-size: calc(10px + 1vw);
      font-weight: 500;
      margin: 0;
    }

    img {
      border: 3px solid $light;
      background: $light;
    }

    .only-active {
      display: flex;
      opacity: 1;
      transform: scaleX(1);
      font-size: initial;
    }

    h3 {
      opacity: 0;
      transform: scaleX(0);
      font-size: 0px;
      transition: 0.2s all;
      display: none;
    }
  }
}

.me {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 1;
  transform: scaleX(1);
  font-size: initial;
}
</style>
