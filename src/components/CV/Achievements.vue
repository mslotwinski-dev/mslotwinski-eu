<template>
  <h2 class="header">{{ $t('cv.achievements') }}</h2>
  <div class="container global-achievements-class">
    <article v-for="a in achievements" :key="a.text">
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

// Importujemy dane ze wszystkich folderów
import achievementsPl from '@/data/pl/achievements'
import achievementsEn from '@/data/en/achievements'
import achievementsDe from '@/data/de/achievements'
import achievementsEs from '@/data/es/achievements'
import achievementsRu from '@/data/ru/achievements'
import achievementsJp from '@/data/jp/achievements'

// Definiujemy interfejs dla TypeScriptu
interface Achievement {
  text: string
  year: string | number
}

// Tworzymy mapę języków
const achievementsMap: Record<string, Achievement[]> = {
  pl: achievementsPl,
  en: achievementsEn,
  de: achievementsDe,
  es: achievementsEs,
  ru: achievementsRu,
  jp: achievementsJp,
  // Jeśli kiedyś dodasz nowy język, np. francuski ('fr'), dopisz go po prostu tutaj
}

export default defineComponent({
  computed: {
    achievements(): Achievement[] {
      // Zabezpieczamy się rzutowaniem (this as any), żeby TS nie krzyczał o braku $i18n
      const locale = (this as any).$i18n.locale as string

      // Zwracamy odpowiednią tablicę, a w razie braku języka dajemy angielski jako awaryjny
      return achievementsMap[locale] || achievementsMap['en']
    },
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
