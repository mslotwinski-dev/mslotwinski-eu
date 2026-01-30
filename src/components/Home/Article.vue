<template>
  <div class="container" @click="open(`/blog/${article.id}`)">
    <div class="image" :style="{ backgroundImage: `url(${article.img})` }" />
    <div class="date">{{ article.date }}</div>
    <div class="title">
      {{ article.title }}
    </div>
    <div class="tags">
      <span v-for="tag in article.tags" :key="tag">{{ tag }} </span>
    </div>
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
  width: 400px;
  cursor: pointer;
}
.image {
  height: 250px;
  border-radius: 20px;
  background-size: cover;
  background-position: center;
}

.date {
  margin-top: 10px;
  font-size: 14px;
  text-transform: uppercase;
  color: gray;
}
.title {
  font-size: 18px;
  margin-top: 10px;
}
.tags {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 10px;
  color: $light;

  span {
    background: $rose;
    padding: 5px 10px;
    border-radius: 5px;
    text-transform: uppercase;
  }
}
</style>
