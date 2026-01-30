<template>
  <div class="blog">
    <Article
      v-for="article in articles.sort(
        (a, b) =>
          parseInt(b.id.match(/\d+$/)[0]) - parseInt(a.id.match(/\d+$/)[0])
      )"
      :key="article.id"
      :article="article"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Article from './Article.vue'
import articles from '@/data/blog/articles'

export default defineComponent({
  data() {
    return {
      articles,
    }
  },
  components: {
    Article,
  },
})
</script>

<style lang="scss" scoped>
.blog {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
}
</style>
