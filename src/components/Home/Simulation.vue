<template>
  <div
    class="container"
    :style="{
      backgroundImage:
        `url(` + require(`@/assets/screenshots/${sim.screenshots[0]}`) + `)`,
    }"
  >
    <div class="grow"></div>
    <div class="bottom">
      <a class="title" :href="sim.github" target="_blank">
        {{ sim.title }}
      </a>
      <div class="date">{{ sim.description }}</div>
    </div>
    <!-- <div class="tags">
      <span v-for="tag in article.tags" :key="tag">{{ tag }} </span>
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['sim'],
  methods: {
    open(url: string) {
      this.$router.push(url)
    },
  },
})
</script>

<style lang="scss" scoped>
.container {
  cursor: pointer;
  width: 1220px;
  min-width: 1200px;
  height: 525px;
  background-size: cover;
  background-position: center;
  background-color: $main;
  display: flex;
  flex-direction: column;
}
.grow {
  flex-grow: 1;
}

.bottom {
  background: #28353aaa;
  box-shadow: 0px 0px 10px #28353aaa;
  padding: 10px;
}

.date {
  margin-top: 10px;
  font-size: 15px;
  color: $light;
}
.title {
  font-size: 20px;
  margin-top: 10px;
  color: $light;
  text-transform: uppercase;
  font-weight: 500;
}
.tags {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 10px;
  color: $light;
  font-size: 10px;

  span {
    background: $rose;
    padding: 5px 10px;
    border-radius: 5px;
    text-transform: uppercase;
  }
}
</style>
