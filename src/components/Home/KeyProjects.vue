<template>
  <div class="projects">
    <header>Kluczowe projekty</header>
    <div class="container">
      <div class="list">
        <div
          class="item"
          v-for="(project, index) in mainprojects"
          :key="project.title"
          v-html="project.title"
          :class="{ active: active === index }"
          @click="active = index"
        />
      </div>
      <div class="content">
        <div class="head">
          <div class="flex">
            <img :src="mainprojects[active].icon" alt="Project Image" />
            <div
              class="name"
              v-html="mainprojects[active].title"
              @click="open(mainprojects[active].github)"
            />
          </div>

          <div class="flex">
            <a
              :href="mainprojects[active].github"
              target="_blank"
              rel="noopener noreferrer"
              class="icon"
              ><ic :icon="['fab', 'github']"
            /></a>
          </div>
        </div>

        <div class="bar" />

        <div class="desc">{{ mainprojects[active].description }}</div>

        <div class="bottom">
          <div class="langs">
            <div
              v-for="lang in mainprojects[active].langs"
              :key="lang"
              class="lang"
            >
              <div class="dot" :style="{ backgroundColor: colors[lang] }" />
              <div v-html="lang" />
            </div>
          </div>
          <div class="tags">
            <div
              class="tag"
              v-for="(tag, index) in mainprojects[active].tags"
              :key="index"
              v-html="tag"
            />
          </div>
        </div>

        <div class="screenshots">SCREENSHOTS</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import projects from '@/data/projects'
import { colors } from '@/data/colors'

export default defineComponent({
  data() {
    return {
      active: 0,
      projects,
      colors,
      mainprojects: projects
        .map((c) => c.projects)
        .reverse()
        .flat()
        .filter((p) => p.main),
    }
  },
})
</script>

<style lang="scss" scoped>
.projects {
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 40px 0;
  margin: 40px 0;
}

.container {
  width: 100%;
  height: 600px;
  display: flex;
}

.list {
  min-width: 250px;
  height: 100%;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  .item {
    background: $dark;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $light;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.3s ease;
    border-radius: 8px;

    &:hover {
      background: lighten($dark, 5%);
    }
  }
}

.content {
  height: 100%;
  margin: 40px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .flex {
    display: flex;
    align-items: center;
    gap: 20px;
    .name {
      font-weight: 500;
      font-size: 35px;
      font-family: 'One';
    }
    img {
      width: 70px;
      height: 70px;
      border-radius: 10px;
    }
    .icon {
      font-size: 40px;
      color: $dark;
      cursor: pointer;
      transition: color 0.3s;
      &:hover {
        color: $main;
      }
    }
  }
}

header {
  font-size: 24px;
  font-weight: 600;
  color: $dark;
  margin-bottom: 20px;
  text-transform: uppercase;
}

.bottom {
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.desc {
  flex-grow: 1;
}

.tags {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  div {
    background: $dark;
    color: $light;
    padding: 10px 20px;
    border-radius: 5px;
  }
}

.langs {
  font-size: 18px;
  font-weight: 500;
  display: flex;
  gap: 10px;
  margin: 10px 0;

  .lang {
    display: flex;
    align-items: center;

    .dot {
      width: 15px;
      height: 15px;
      border-radius: 25%;
      display: inline-block;
      background-color: $dark_gray;
      margin-right: 5px;
    }
  }
}

.screenshots {
  height: 150px;
  margin: 10px 0;
  background: $dark_gray;
  border-radius: 10px;
  color: $light;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
