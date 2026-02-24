<template>
  <div class="container" @click="open(`/blog/${article.id}`)">
    <div class="image" :style="{ backgroundImage: `url(${article.img})` }" />
    <div class="date">{{ article.date }}</div>
    <div class="title">
      {{ article.title }}
    </div>
    <!-- <div class="tags">
      <span v-for="tag in article.tags" :key="tag">{{ tag }} </span>
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['article'],
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
  width: 380px;
  min-width: 380px;
  padding: 10px;
}
.image {
  width: 100%;
  height: 225px;
  border-radius: 20px;
  background-size: cover;
  background-position: center;
  background-color: $main;
}

.date {
  margin-top: 10px;
  font-size: 13px;
  text-transform: uppercase;
  color: gray;
}
.title {
  font-size: 16px;
  margin-top: 10px;
  color: $light;
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
