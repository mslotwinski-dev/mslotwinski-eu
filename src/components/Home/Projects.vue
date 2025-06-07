<template>
  <h2 class="header">Projekty</h2>
  <section class="container">
    <div class="filter">
      <div
        class="category"
        v-for="(category, index) in projects"
        :key="category.title"
        @click="activecategory = index"
        :class="{ active: activecategory === index }"
      >
        <span class="iconcategory">
          <ic :icon="category.icon" />
        </span>
        <span class="titlecategory" v-html="category.title" />
      </div>
    </div>
    <div class="categorydesc" v-html="projects[activecategory].description" />
    <article
      v-for="proj in projects[activecategory].projects"
      :key="proj.title"
    >
      <div class="header">
        <div class="iconcont">
          <img :src="proj.icon" alt="Project Image" />
          <div class="name" v-html="proj.title" @click="open(proj.github)" />
        </div>
        <div class="langs">
          <div v-for="lang in proj.langs" :key="lang" class="lang">
            <div class="dot" :style="{ backgroundColor: colors[lang] }" />
            <div v-html="lang" />
          </div>
        </div>
      </div>
      <div class="description">{{ proj.description }}</div>
      <div class="links">
        <a
          v-for="link in proj.links"
          :key="link.href"
          :href="link.href"
          target="_blank"
          v-html="link.text"
        />
      </div>
    </article>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import projects from '@/data/projects'
import { colors } from '@/data/colors'

export default defineComponent({
  data() {
    return {
      projects,
      colors,
      activecategory: 0,
    }
  },
  methods: {
    open(a: string) {
      window.open(a, '_blank')
    },
  },
})
</script>

<style lang="scss" scoped>
.container {
  padding: 10px;
  margin: 0 auto;
  text-align: justify;
  font-size: 15px;
}
article {
  margin: 5px auto;
  padding: 5px 0;
  width: 900px;
  border-bottom: 1px solid $light;
}

.header {
  display: flex;
  justify-content: space-between;

  .name {
    font-weight: 500;
    font-size: 19px;
    color: $dark;
    cursor: pointer;
  }
  .langs {
    font-size: 15px;
    display: flex;
    gap: 10px;

    .lang {
      display: flex;
      align-items: center;

      .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        display: inline-block;
        background-color: $dark_gray;
        margin-right: 5px;
      }
    }
  }
}

.iconcont {
  display: flex;
  align-items: center;
}

img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  vertical-align: middle;
}

.description {
  margin: 10px 0;
  font-size: 14px;
}

.filter {
  display: flex;
  margin: auto;
  margin-bottom: 20px;
  color: $light;
  max-width: 1050px;
  border-radius: 5px;
  overflow: hidden;
  user-select: none;

  .category {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    cursor: pointer;
    padding: 10px;
    transition: 0.2s all;
    background: $dark;
    flex-grow: 1;
    text-align: center;

    &:hover {
      background-color: $dark_gray;
    }

    &.active {
      background-color: $green;
    }
  }

  .iconcategory {
    font-size: 20px;
  }

  .titlecategory {
    margin-left: 5px;
  }
}

.categorydesc {
  margin: 10px auto;
  max-width: 900px;
  font-size: 15px;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid $light;
  text-align: center;
}
</style>
