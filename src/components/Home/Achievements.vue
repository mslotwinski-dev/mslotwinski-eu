<template>
  <div class="container global-achievements-class">
    <h2 class="header">Osiągnięcia</h2>
    <article v-for="a in achievements" :key="a">
      <div class="header">
        <div class="flex">
          <ic icon="star" />
          <div class="name" v-html="a.text" />
        </div>
        <div class="year" v-html="a.year" />
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import achievements from '@/data/achievements'

export default defineComponent({
  data() {
    return {
      achievements,
    }
  },
})
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .name {
    font-size: 15px;
    color: $dark;
  }
  .year {
    font-size: 13px;
    color: $dark_gray;
    padding-left: 10px;
  }
}

.container {
  padding: 10px;
  margin: 0 auto;
  text-align: justify;
  font-size: 15px;
}

article {
  margin: 10px auto;
  width: 900px;
}

.flex {
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 8px;
}
</style>
<style lang="scss">
.global-achievements-class a {
  color: $main;
  text-decoration: none;
}
</style>
