<template>
  <header>
    <Hero />
    <Navbar />
    <div class="body">
      <!-- <h2>Mateusz Słotwiński</h2> -->
      <h3>Wybrane projekty</h3>
      <div class="split">
        <div class="container">
          <div class="content">
            <div class="head">
              <div class="flex">
                <img :src="currentproject.icon" alt="Project Image" />
                <div
                  class="name"
                  v-html="currentproject.title"
                  @click="open(currentproject.github)"
                />
              </div>

              <div class="flex">
                <a
                  :href="currentproject.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="icon"
                  ><ic :icon="['fab', 'github']"
                /></a>
              </div>
            </div>

            <div class="langs">
              <div
                v-for="lang in currentproject.langs"
                :key="lang"
                class="lang"
              >
                <div class="dot" :style="{ backgroundColor: colors[lang] }" />
                <div v-html="lang" />
              </div>
            </div>

            <div class="desc">{{ currentproject.description }}</div>
          </div>
        </div>
        <div class="list">
          <div v-for="(category, cindex) in projects" :key="cindex">
            <h4>{{ category.title }} <ic :icon="category.icon" /></h4>
            <div
              v-for="(project, pindex) in category.projects.filter(
                (p) => p.main
              )"
              :key="pindex"
              class="project-item"
              :class="{ main: project.main }"
              @click="set(cindex, pindex)"
            >
              {{ project.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Hero from '@/components/Shared/styled/Hero.vue'
import Navbar from '@/components/Shared/Navbar.vue'
import projects from '@/data/projects'
import { colors } from '@/data/colors'

export default defineComponent({
  data() {
    return {
      projects,
      colors,
      activeproject: 0,
      activecategory: 0,
      currentproject: projects[0].projects[0],
    }
  },
  components: {
    Hero,
    Navbar,
  },
  methods: {
    set(category: number, project: number) {
      this.activecategory = category
      this.activeproject = project

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.currentproject = this.projects[category].projects.filter(
        (p: any) => p.main
      )[project]
    },
    open(a: string) {
      window.open(a, '_blank')
    },
  },
})
</script>

<style scoped lang="scss">
.split {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: flex-start;
}

.body {
  margin-top: 50px;
}
.container {
  width: 1000px;
  // border: 3px solid $dark;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
}
header {
  width: calc(100vw + 4em);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: $dark;
}

h2 {
  font-size: calc(15px + 1.5vw);
  font-weight: 600;
  margin: 0;
}

h3 {
  font-size: calc(10px + 1vw);
  font-weight: 500;
  margin: 0;
  margin-bottom: 20px;
}
img {
  width: 100px;
  height: 100px;
  border-radius: 30%;
  margin-bottom: 20px;
}

h4 {
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  color: $dark;
  margin-bottom: 10px;
  padding: 0;
  justify-content: center;
  display: flex;
  align-items: center;
  gap: 10px;
}

h4:before,
h4:after {
  content: '';
  flex-grow: 1;
  margin: 0 10px;
  border: 1px solid #262626;
}

.list {
  width: 500px;
  height: calc(95vh - 250px);
  overflow-y: scroll;
  padding-left: 30px;
  .project-item {
    padding: 5px;
    cursor: pointer;
    font-weight: 500;
    border-radius: 10px;
    text-align: center;
    transition: background-color 0.3s;
    color: $dark_gray;
    &.main {
      color: $dark;
      font-weight: 600;
    }
    &:hover {
      background-color: #f0f0f0;
    }
  }
}

.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.flex {
  display: flex;
  align-items: center;
  gap: 20px;
  .name {
    font-weight: 500;
    margin-bottom: 20px;
    font-size: 35px;
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

.desc {
  margin: 20px 0;
  font-size: 17px;
}
</style>
