<template>
  <div>
    <Start />
    <main>
      <Personal />
      <Projects />
      <Blog />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Start from '@/components/Shared/Start.vue'
import Personal from '@/components/CV/Personal.vue'
import Projects from '@/components/Home/KeyProjects.vue'
import Blog from '@/components/Home/Blog.vue'

export default defineComponent({
  components: {
    Start,
    Personal,
    Projects,
    Blog,
  },
})
</script>
