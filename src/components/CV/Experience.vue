<template>
  <h2 class="header">{{ $t('cv.experience') }}</h2>
  <div class="container">
    <article v-for="work in works" :key="work.Name">
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

// Importujemy dane
import { works as worksPl } from '@/data/pl/works'
import { works as worksEn } from '@/data/en/works'
import { works as worksDe } from '@/data/de/works'
import { works as worksEs } from '@/data/es/works'
import { works as worksRu } from '@/data/ru/works'
import { works as worksJp } from '@/data/jp/works'

// Jeśli masz ten interfejs w osobnym pliku, możesz go zaimportować:
// import { Work } from '@/data/types/interfaces'
// W przeciwnym razie definiujemy go tutaj:
interface Work {
  Name: string
  Position: string
  HowLong: string
  Tasks: string[]
}

// Tworzymy naszą mapę (słownik) języków
const worksMap: Record<string, Work[]> = {
  pl: worksPl,
  en: worksEn,
  de: worksDe,
  es: worksEs,
  ru: worksRu,
  jp: worksJp,
  // fr: worksFr, <- tutaj w przyszłości łatwo dodasz kolejne
}

export default defineComponent({
  computed: {
    // Zwracamy tablicę Work[] z naszej mapy
    works(): Work[] {
      const locale = this.$i18n.locale as string

      // Bezpieczny fallback do angielskiego w razie nieznanego języka
      return worksMap[locale] || worksMap['en']
    },
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
