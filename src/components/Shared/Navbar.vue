<template>
  <nav>
    <a href="#cv" v-smooth-scroll>CV</a>
    <a href="#projects" v-smooth-scroll>Projects</a>
    <a href="#contact" v-smooth-scroll>Contact</a>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
nav {
  position: absolute;
  top: 80px;
  right: 150px;
  display: flex;
  gap: 30px; // równy odstęp między linkami
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;

  a {
    color: $dark;
    text-decoration: none;
    position: relative;
    transition: color 0.3s ease;

    // delikatny underline animowany
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -4px;
      width: 0%;
      height: 2px;
      background: $dark;
      transition: width 0.3s ease;
    }

    &:hover {
      color: lighten($dark, 10%);
    }

    &:hover::after {
      width: 100%;
    }
  }
}
</style>
