<template>
  <h2 class="header">{{ $t('cv.science') }}</h2>
  <div class="container">
    <article v-for="proj in sp" :key="proj.name">
      <div class="header">
        <div class="name">
          <span v-html="proj.name" />
          <span
            v-if="proj.label"
            v-html="proj.label.text"
            class="label"
            :style="{ backgroundColor: proj.label.color }"
          />
        </div>
        <div class="year" v-html="proj.time" />
      </div>
      <div class="desc" v-html="proj.description" />
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// Importujemy wszystkie języki (dodałem brakujący angielski)
import sciencePl from '@/data/pl/science'
import scienceEn from '@/data/en/science'
import scienceDe from '@/data/de/science'
import scienceEs from '@/data/es/science'
import scienceRu from '@/data/ru/science'
import scienceJp from '@/data/jp/science'

// Definiujemy interfejsy dla bezpieczeństwa typów
interface ScienceLabel {
  text: string;
  color: string;
}

interface ScienceProject {
  name: string;
  description: string;
  time: string;
  label?: ScienceLabel;
}

// Tworzymy mapę języków
const scienceMap: Record<string, ScienceProject[]> = {
  pl: sciencePl,
  en: scienceEn,
  de: scienceDe,
  es: scienceEs,
  ru: scienceRu,
  jp: scienceJp,
}

export default defineComponent({
  computed: {
    // Nazwałem to 'sp', żeby pasowało do tego, czego używasz w <template>
    sp(): ScienceProject[] {
      const locale = (this as any).$i18n.locale as string

      return scienceMap[locale] || scienceMap['en']
    }
  }
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
