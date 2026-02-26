<template>
  <div class="blog">
    <div class="section" />
    <!-- <div class="checkout">Sprawdź moje wpisy</div> -->
    <div class="abc">
      <header>Sprawdź moje artykuły!</header>
      <div class="container">
        <div class="articles" :style="{ left: `-${currentIndex * 420}px` }">
          <Article
            v-for="article in articles.sort(
              (a, b) =>
                parseInt(b.id.match(/\d+$/)[0]) -
                parseInt(a.id.match(/\d+$/)[0])
            )"
            :key="article.id"
            :article="article"
          />
        </div>
      </div>
      <div class="barcont">
        <div class="button left" @click="left()">
          <ic icon="angles-left" />
        </div>
        <div class="bar">
          <ic
            class="dot"
            icon="circle"
            :class="{ active: i === currentIndex + 1 }"
            v-for="i in articles.length > 3 ? articles.length - 2 : 1"
            :key="i"
          />
        </div>
        <div class="button right" @click="right()">
          <ic icon="angles-right" />
        </div>
      </div>
    </div>
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
      currentIndex: 0,
      slideMoveTime: 0,
    }
  },
  components: {
    Article,
  },
  methods: {
    left() {
      this.currentIndex =
        (this.currentIndex - 1 + this.articles.length) %
        (this.articles.length > 3 ? this.articles.length - 2 : 1)
      this.slideMoveTime = -5
    },
    right() {
      this.currentIndex =
        (this.currentIndex + 1) %
        (this.articles.length > 3 ? this.articles.length - 2 : 1)
      this.slideMoveTime = -5
    },
    autoSlide() {
      setInterval(() => {
        this.slideMoveTime++
        if (this.slideMoveTime >= 7) {
          this.currentIndex =
            (this.currentIndex + 1) %
            (this.articles.length > 3 ? this.articles.length - 2 : 1)
          this.slideMoveTime = 0
        }
      }, 1000)
    },
  },
  mounted() {
    this.autoSlide()
  },
})
</script>

<style lang="scss" scoped>
.blog {
  display: flex;
  justify-content: center;

  padding: 40px 0;
  margin: 40px 0;
}

.container {
  width: 1220px;
  overflow: hidden;
}

.articles {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
  // left: -420px;
  transition: left 0.5s ease;
}

.section {
  width: 100vw;
  height: 100%;
  position: absolute;
  top: 0;
  background: $dark;
}

.abc {
  display: flex;
  flex-direction: column;
  align-items: center;

  .dot {
    font-size: 10px;
    animation: float 3s ease-in-out infinite;
    &.active {
      color: $dark;
    }
  }
}

.barcont {
  display: flex;
  align-items: center;
  font-size: 20px;
  gap: 20px;
  color: $light;
  margin-top: 20px;
}

.bar {
  background: $dark_gray;
  display: inline-flex;
  gap: 5px;
  padding: 10px 30px;
  border-radius: 1000px;
}

.button {
  cursor: pointer;
}

header {
  font-size: 24px;
  font-weight: 600;
  color: $light;
  margin-bottom: 20px;
  text-transform: uppercase;
}
</style>
