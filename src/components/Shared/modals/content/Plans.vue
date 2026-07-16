<template>
  <div class="container">
    <div class="content" :style="{ height: lockHeight + 'px' }">
      <div class="student">
        {{ $t('shared.plans.p1') }}
      </div>
      <div class="student">
        {{ $t('shared.plans.p2') }}
      </div>
      <div class="student">
        {{ $t('shared.plans.p3') }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Plans',
  data() {
    return {
      lockHeight: 1,
    }
  },
  created() {
    window.addEventListener('resize', this.lockAspect)
    this.lockAspect()
  },
  methods: {
    getImgUrl(pic: string) {
      return require('../../../assets/projects/screenshots/' + pic)
    },
    resetAspect() {
      this.lockHeight = 1
    },
    lockAspect() {
      setTimeout(() => {
        // eslint-disable-next-line
        const map: any = document.querySelector('.content')
        this.lockHeight = map.offsetWidth / 1.777
      }, 1)
    },
  },
})
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

.student {
  padding: 10px;
  font-weight: 400;
}

a {
  font-weight: 500;
  cursor: pointer;
}

article {
  width: 100%;
  flex-grow: 1;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
