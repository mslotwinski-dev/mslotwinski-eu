<template>
  <div>
    <Navbar />
    <Hero :article="article" />

    <div class="articlecontent">
      <div v-html="article.content" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from '@/components/Blog/Navbar.vue'
import Hero from '@/components/Blog/Hero.vue'

import articles from '@/data/blog/articles'

export default defineComponent({
  components: {
    Navbar,
    Hero,
  },
  data() {
    return {
      articles,
      article: {} as any,
    }
  },
  created() {
    const articleId = (this as any).$route.params.id
    this.article = this.articles.find((a) => a.id === articleId) || {}
  },
})
</script>

<style lang="scss" scoped>
.articlecontent {
  padding: 40px 20px;
  font-size: 18px;
  max-width: 800px;
  margin: 0 auto;
}
</style>
