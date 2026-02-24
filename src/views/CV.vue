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

import Start from '../components/Shared/Start.vue'
import Personal from '@/components/CV/Personal.vue'
import Experience from '@/components/CV/Experience.vue'
import Education from '@/components/CV/Education.vue'
import Science from '@/components/CV/Science.vue'
import Skills from '@/components/CV/Skills.vue'
import Projects from '@/components/CV/Projects.vue'
import Languages from '@/components/CV/Languages.vue'
import Achievements from '@/components/CV/Achievements.vue'
import Interests from '@/components/CV/Interests.vue'

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
