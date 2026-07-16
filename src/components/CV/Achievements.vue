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

// Importujemy dane z obu folderów
import achievementsPl from '@/data/pl/achievements'
import achievementsEn from '@/data/en/achievements'

// Definiujemy szybki interfejs, żeby TypeScript był zadowolony
// (Jeśli masz go w osobnym pliku, możesz go po prostu zaimportować)
interface Achievement {
  text: string
  year: string | number
}

// Tworzymy mapę języków
const achievementsMap: Record<string, Achievement[]> = {
  pl: achievementsPl,
  en: achievementsEn,
  // Jeśli kiedyś dodasz nowy folder, np. de/achievements, dopisujesz go tylko tutaj
}

export default defineComponent({
  computed: {
    // Zmieniamy na właściwość obliczeniową
    achievements(): Achievement[] {
      // Pobieramy aktualny język
      const locale = this.$i18n.locale as string

      // Zwracamy odpowiednią tablicę, a w razie braku języka dajemy np. angielski jako awaryjny
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
