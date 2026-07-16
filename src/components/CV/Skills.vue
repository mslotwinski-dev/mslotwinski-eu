<template>
  <h2 class="header">{{ $t('cv.skills') }}</h2>
  <section class="container">
    <article>
      <h3>{{ $t('cv.skillsProgramming') }}</h3>
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
          :style="{
            marginTop: skills.programming.space.includes(index) ? '0.5em' : '0',
          }"
        >
          <div class="dot">
            <ic icon="star" />
          </div>
          <span v-html="skill" />
        </div>
      </div>
    </article>
    <article>
      <h3>{{ $t('cv.skillsTechnical') }}</h3>
      <div class="list">
        <div
          class="listitem"
          v-for="(skill, index) in skills.technical.list"
          :key="index"
          :style="{
            marginTop: skills.technical.space.includes(index) ? '0.5em' : '0',
          }"
        >
          <div class="dot gold">
            <ic icon="star" />
          </div>
          <span v-html="skill" />
        </div>
      </div>
    </article>
    <article>
      <h3>{{ $t('cv.skillsScience') }}</h3>
      <div class="list">
        <div
          class="listitem"
          v-for="(skill, index) in skills.science.list"
          :key="index"
          :style="{
            marginTop: skills.science.space.includes(index) ? '0.5em' : '0',
          }"
        >
          <div class="dot red">
            <ic icon="star" />
          </div>
          <span v-html="skill" />
        </div>
      </div>
    </article>

    <article>
      <h3>{{ $t('cv.skillsSoft') }}</h3>
      <div class="list">
        <div
          class="listitem"
          v-for="(skill, index) in skills.soft.list"
          :key="index"
        >
          <div class="dot green">
            <ic icon="star" />
          </div>
          <span v-html="skill" />
        </div>
      </div>
    </article>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

// 1. Importujemy dane dla obu języków
import skillsPl from '@/data/pl/skills'
import skillsEn from '@/data/en/skills'
import skillsDe from '@/data/de/skills'
import skillsEs from '@/data/es/skills'
import skillsRu from '@/data/ru/skills'
import skillsJp from '@/data/jp/skills'

// 2. Definiujemy typy na podstawie Twojego szablonu
interface SkillCategoryWithSpace {
  list: string[]
  space: number[]
}

interface ProgrammingCategory extends SkillCategoryWithSpace {
  languages: {
    good: string[]
    ok: string[]
  }
}

interface SoftCategory {
  list: string[]
}

interface SkillsData {
  programming: ProgrammingCategory
  technical: SkillCategoryWithSpace
  science: SkillCategoryWithSpace
  soft: SoftCategory
}

// 3. Tworzymy mapę języków
const skillsMap: Record<string, SkillsData> = {
  pl: skillsPl,
  en: skillsEn,
  de: skillsDe,
  es: skillsEs,
  ru: skillsRu,
  jp: skillsJp,
}

export default defineComponent({
  computed: {
    // 4. Computed zajmie się dynamicznym przełączaniem
    skills(): SkillsData {
      const locale = this.$i18n.locale as string

      // Zwracamy polski, angielski lub awaryjnie angielski
      return skillsMap[locale] || skillsMap['en']
    },
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
  width: 950px;
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
