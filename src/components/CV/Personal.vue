<template>
  <div class="flex" id="cv">
    <img src="@/assets/logo.png" />

    <div>
      <div class="container">
        <div class="items">
          <div class="item">
            <ic icon="earth-americas" />
            <div v-html="personal.home.format()" />
          </div>
        </div>
        <div class="social">
          <div class="item" @click="mailme()">
            <ic icon="paper-plane" />
          </div>
          <div class="item brand" @click="github()">
            <ic icon="fa-brands fa-github" />
          </div>
          <div class="item" @click="linkedin()">
            <ic icon="fa-brands fa-linkedin" />
          </div>
        </div>
      </div>
      <div class="me">
        {{ $t('cv.bio') }}
      </div>
    </div>
  </div>
  <TShaped />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TShaped from './TShaped.vue'
import { personal } from '@/data/pl/personal'

export default defineComponent({
  data() {
    return {
      personal,
    }
  },
  components: {
    TShaped,
  },
  methods: {
    mailme() {
      window.open(`mailto:${this.personal.email}`, '_blank')
    },
    github() {
      window.open(this.personal.github, '_blank')
    },
    linkedin() {
      window.open(this.personal.linkedin, '_blank')
    },
  },
})
</script>

<style lang="scss" scoped>
.me {
  padding: 10px;
  margin: 0 auto;
  text-align: justify;
  font-size: 17px;

  @media (max-width: 768px) {
    font-size: 15px;
    padding: 10px 5px;
  }
}

.container {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
}

.item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-radius: 5px;
  background: $dark;
  color: $light;
}

.social {
  display: flex;
  align-items: center;
  gap: 10px;

  .item {
    font-size: 20px;
    width: 40px;
    cursor: pointer;
  }

  .brand {
    font-size: 25px;
  }
}

.items {
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }

  .item {
    font-size: 18px;
    padding: 10px;
    div {
      margin-left: 10px;
      font-size: 16px;

      @media (max-width: 768px) {
        font-size: 14px;
      }
    }
  }
}

.flex {
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
}

img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
}
</style>
