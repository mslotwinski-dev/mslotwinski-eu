<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/cv">CV</router-link>
    <LanguageSelector />
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LanguageSelector from '@/components/Shared/LanguageSelector.vue'
export default defineComponent({
  components: {
    LanguageSelector,
  },
})
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  gap: 30px;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  align-items: center;

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
