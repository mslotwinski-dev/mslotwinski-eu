<template>
  <div class="rel-nav-wrapper">
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
        $t('nav.home')
      }}</router-link>
      <router-link to="/cv" @click="isOpen = false">{{
        $t('nav.cv')
      }}</router-link>
      <LanguageSelector />
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LanguageSelector from '@/components/Shared/LanguageSelector.vue'

export default defineComponent({
  components: {
    LanguageSelector,
  },
  data() {
    return {
      isOpen: false,
    }
  },
})
</script>

<style lang="scss" scoped>
.rel-nav-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
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

nav {
  display: flex;
  gap: 30px;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: -20px;
    right: -15px;
    width: 95vw;
    max-width: 380px;
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
