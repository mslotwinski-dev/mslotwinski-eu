<template>
  <div class="container">
    <div class="column">
      <div class="me">
        <img src="@/assets/logo.png" />
        <h2>Mateusz Słotwiński</h2>
      </div>
    </div>
    <button
      class="hamburger"
      @click="isOpen = !isOpen"
      :class="{ active: isOpen }"
      aria-label="Menu"
    >
      <ic :icon="isOpen ? 'times' : 'bars'" />
    </button>
    <div class="mobile-overlay" v-if="isOpen" @click="isOpen = false" />
    <nav :class="{ open: isOpen }">
      <router-link to="/" @click="isOpen = false">{{
        $t('nav.blog')
      }}</router-link>
      <router-link to="/cv" @click="isOpen = false">{{
        $t('nav.cv')
      }}</router-link>
      <router-link to="/projects" @click="isOpen = false">{{
        $t('nav.projects')
      }}</router-link>
      <router-link to="/contact" @click="isOpen = false">{{
        $t('nav.contact')
      }}</router-link>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      isOpen: false,
    }
  },
})
</script>

<style lang="scss" scoped>
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
}

.hamburger {
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    background: $light;
    color: $dark;
    border: 2px solid $light;
    border-radius: 50%;
    font-size: 14px;
    cursor: pointer;
    z-index: 1001;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s ease, background 0.2s ease;

    &:active {
      transform: scale(0.92);
    }
  }
}

.mobile-overlay {
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
    z-index: 999;
  }
}

.container {
  margin: 20px;
  display: flex;
  align-items: center;

  position: fixed;
  top: 20px;
  left: 20px;
  border: 0;
  background: $dark;
  border-radius: 15px;
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

  @media (max-width: 768px) {
    flex-direction: row !important;
    height: 46px !important;
    padding: 0 15px !important;
    margin: 0 !important;
    border-radius: 0 !important;
    width: 100vw !important;
    top: 0 !important;
    left: 0 !important;
    justify-content: space-between !important;

    h2 {
      font-size: 13px !important;
    }

    img {
      width: 30px !important;
      height: 30px !important;
      border-width: 2px !important;
    }
  }
}

.me {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 10px;
  }
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

nav {
  display: flex;
  gap: 30px;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    width: 75vw;
    max-width: 280px;
    height: 100vh;
    background: $dark;
    box-shadow: -5px 0 25px rgba(0, 0, 0, 0.5);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    font-size: 20px;
    z-index: 1000;
    transform: translateX(100%);
    visibility: hidden;
    pointer-events: none;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.3s;

    &.open {
      transform: translateX(0);
      visibility: visible;
      pointer-events: auto;
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), visibility 0s;
    }
  }

  a {
    color: $light;
    text-decoration: none;
    position: relative;
    transition: color 0.3s ease;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -4px;
      width: 0%;
      height: 2px;
      background: $light;
      transition: width 0.3s ease;
    }

    &:hover {
      color: lighten($light, 10%);
    }

    &:hover::after {
      width: 100%;
    }
  }
}
</style>
