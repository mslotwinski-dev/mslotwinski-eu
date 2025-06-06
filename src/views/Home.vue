<template>
  <div>
    <Start />
    <main>
      <Personal />
      <Experience />
      <Education />
      <Science />
      <Skills />
      <Languages />
      <Projects />
      <Achievements />
      <Interests />
      <!-- <Contact /> -->
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Start from '../components/Home/Start.vue'
import Personal from '@/components/Home/Personal.vue'
import Experience from '@/components/Home/Experience.vue'
import Education from '@/components/Home/Education.vue'
import Science from '@/components/Home/Science.vue'
import Skills from '@/components/Home/Skills.vue'
import Projects from '@/components/Home/Projects.vue'
import Languages from '@/components/Home/Languages.vue'
import Achievements from '@/components/Home/Achievements.vue'
import Interests from '@/components/Home/Interests.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Start,
    Personal,
    Experience,
    Education,
    Science,
    Skills,
    Projects,
    Languages,
    Achievements,
    Interests,
  },
  mounted() {
    document.title = 'Mateusz Słotwiński'
  },
})
</script>

<style lang="scss">
main {
  margin: 10vh auto;
}
</style>
