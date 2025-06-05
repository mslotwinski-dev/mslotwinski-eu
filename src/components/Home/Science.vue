<template>
  <div class="container">
    <h2 class="header">Działalność naukowa</h2>
    <article v-for="proj in sp" :key="proj">
      <div class="header">
        <div class="name">
          <span v-html="proj.name" />
          <span v-if="proj.label" v-html="proj.label.text" class="label" />
        </div>
        <div class="year" v-html="proj.time" />
      </div>
      <div class="desc" v-html="proj.description" />
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import sp from '@/data/science'

export default defineComponent({
  data() {
    return {
      sp,
    }
  },
})
</script>

<style lang="scss" scoped>
article {
  margin: 15px auto;
  width: 900px;
}

.header {
  display: flex;
  justify-content: space-between;

  .name {
    font-weight: 500;
    font-size: 19px;
    color: $dark;
    display: flex;
    align-items: center;
  }
  .year {
    font-size: 15px;
    color: $dark_gray;
  }
}

.container {
  padding: 10px;
  margin: 0 auto;
  text-align: justify;
  font-size: 15px;
}

.desc {
  margin: 5px 0;
}

.label {
  font-size: 12px;
  color: white;
  text-transform: uppercase;
  background: $rose;
  padding: 5px 10px;
  margin-left: 10px;
  border-radius: 5px;
}
</style>
