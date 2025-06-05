<template>
  <h2 class="header">Wykształcenie</h2>
  <section class="edu-wrap">
    <article v-for="edu in education" :key="edu.Name" class="edu-item">
      <div class="edu-main">
        <h3 class="edu-name" v-html="edu.Name" />
        <span class="edu-place" v-html="edu.Place" />
      </div>
      <div class="edu-field" v-if="edu.Field" v-html="edu.Field" />

      <div class="edu-details">
        <div v-for="d in edu.Details" :key="d.Spec + d.Year" class="edu-detail">
          <div class="spec-and-degree">
            <span class="spec" v-html="d.Spec" />
            <Degree v-if="d.Degree" :degree="d.Degree" :desc="d.Desc" />
          </div>
          <span class="year" v-html="d.Year" />
        </div>
      </div>
    </article>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Degree from '@/components/Details/Degree.vue'
import education from '@/data/education'

export default defineComponent({
  components: {
    Degree,
  },
  data() {
    return {
      education,
    }
  },
})
</script>

<style lang="scss" scoped>
.edu-wrap {
  max-width: 900px;
  margin: 0 auto;
}

.edu-item {
  margin: 15px 0;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.edu-main {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 5px;

  .edu-name {
    font-size: 19px;
    font-weight: 500;
    color: #222;
    margin: 0;
  }

  .edu-place {
    font-size: 14px;
    color: #666;
  }
}

.edu-field {
  font-size: 17px;
  color: #004466;
  margin-bottom: 5px;
}

.edu-details {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-family: 'Inter', sans-serif;

  .edu-detail {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 14px;

    .spec-and-degree {
      display: flex;
      flex-direction: column;

      .spec {
        font-weight: 500;
        color: #222;
      }
    }

    .year {
      color: #888;
      font-size: 13.5px;
    }
  }
}
</style>
