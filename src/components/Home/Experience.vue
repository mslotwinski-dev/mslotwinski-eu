<template>
  <div class="container">
    <h2 class="header">Doświadczenie</h2>
    <article v-for="work in works" :key="work">
      <div class="header">
        <div class="name" v-html="work.Name" />
        <div class="year" v-html="work.HowLong" />
      </div>
      <div class="position" v-html="work.Position" />
      <div class="ul">
        <ul>
          <li v-for="task in work.Tasks" :key="task" v-html="task" />
        </ul>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { works } from '@/data/works'

export default defineComponent({
  data() {
    return {
      works,
    }
  },
})
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;

  .name {
    font-weight: 500;
    font-size: 19px;
    color: $dark;
  }
  .year {
    font-size: 15px;
    color: $dark_gray;
  }
}

.position {
  margin: 5px 0;
}
ul {
  margin-top: 0;
  font-size: 14.5px;
}

.container {
  padding: 10px;
  margin: 0 auto;
  text-align: justify;
  font-size: 15px;
}

article {
  margin: 15px auto;
  width: 900px;
}

li a {
  color: $dark !important;
}
</style>
