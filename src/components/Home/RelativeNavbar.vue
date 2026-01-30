<template>
  <nav>
    <router-link to="/">Blog</router-link>
    <router-link to="/cv">CV</router-link>
    <router-link to="/projects">Projects</router-link>
    <router-link to="/contact">Contact</router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  gap: 30px;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;

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
