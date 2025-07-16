<template>
  <div class="flex">
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
        </div>
      </div>
      <div class="me">
        Jestem studentem drugiego roku fizyki technicznej na Politechnice
        Warszawskiej. Na co dzień programuję, zarządzam projektami oraz uczę
        się, jak wykorzystać fizykę we współczesnej technologii. Interesuję się
        w szczególności fizyką jądrową i jej zastosowaniami w badaniach
        materiałów. Po godzinach gotuję i zgłębiam wiedzę o świecie – od języków
        obcych, przez ekonomię i politykę różnych państw, aż po ich faunę i
        ekosystemy.
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { personal } from '@/data/personal'

export default defineComponent({
  data() {
    return {
      personal,
    }
  },
  methods: {
    mailme() {
      window.open(`mailto:${this.personal.email}`, '_blank')
    },
    github() {
      window.open(this.personal.github, '_blank')
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
}

// .notHovered {
//   filter: brightness(0);
// }

// ul {
//   font-size: calc(8px + 0.8vw);
//   max-width: 80vw;
//   width: 900px;
//   margin: auto;
//   font-weight: 500;
//   list-style-type: none;
//   padding: 0;
// }

// li {
//   padding: 5px;
//   border-radius: 5px;
//   height: calc(13px + 1.3vw);
//   transition: 0.2s all;
//   cursor: pointer;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// }

// li:hover {
//   background-color: #ccd1d3;
// }

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.container {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px;
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
  .item {
    font-size: 18px;
    padding: 10px;
    div {
      margin-left: 10px;
      font-size: 16px;
    }
  }
}

.flex {
  display: flex;
  align-items: center;
  gap: 20px;
}

img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
