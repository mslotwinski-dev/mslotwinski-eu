<template>
  <div>
    <Navbar />
    <Hero :article="article" />
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
      article: {},
    }
  },
  created() {
    const articleId = this.$route.params.id
    this.article = this.articles.find((a) => a.id === articleId) || {}
  },
})
</script>

<style lang="scss" scoped></style>
