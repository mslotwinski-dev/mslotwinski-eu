<template>
  <h2 class="header">Umiejętności</h2>
  <section class="container">
    <article>
      <h3>PROGRAMISTYCZNE</h3>
      <div class="languages">
        <div
          v-for="(skill, index) in skills.programming.languages.good"
          :key="index"
          class="good"
        >
          {{ skill }}
        </div>
        <div
          v-for="(skill, index) in skills.programming.languages.ok"
          :key="index"
        >
          {{ skill }}
        </div>
      </div>
      <div class="list">
        <div
          class="listitem"
          v-for="(skill, index) in skills.programming.list"
          :key="index"
        >
          <div class="dot">
            <ic icon="star" />
          </div>
          {{ skill }}
        </div>
      </div>
      <div class="uxui">
        <div class="dot">
          <ic icon="chart-simple" />
          <!-- <div class="red">/</div> -->
        </div>
        {{ skills.programming.uxui }}
      </div>
    </article>
    <article>
      <h3>NAUKOWO-TECHNICZNE</h3>
      <div class="list">
        <div
          class="listitem"
          v-for="(skill, index) in skills.science"
          :key="index"
        >
          <div class="dot gold">
            <ic icon="star" />
          </div>
          {{ skill }}
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import skills from '@/data/skills'

export default defineComponent({
  data() {
    return {
      skills,
    }
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
  margin: 15px auto;
  width: 900px;
}

.languages {
  display: flex;
  gap: 10px;

  div {
    background: $gray;
    color: $dark;
    padding: 7px 15px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    font-weight: 500;
    flex-grow: 1;
    text-align: center;
    &.good {
      background: $violet;
      color: $light;
    }
  }
}

.listitem {
  display: flex;
  align-items: center;
  .dot {
    font-size: 10px;
    margin-right: 10px;
    color: $violet;
  }
}

.dot {
  color: $violet;
}

.uxui {
  display: flex;
  align-items: center;
  .dot {
    display: flex;
    font-size: 30px;
    margin-right: 10px;
  }
}

.red {
  color: $rose !important;
}
.gold {
  color: $gold !important;
}
.green {
  color: $green !important;
}

.list {
  padding: 10px 0;
  div {
    padding: 5px 0;
  }
}
</style>
