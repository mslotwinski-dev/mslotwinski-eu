<template>
  <div class="wrapper">
    <div class="display">
      <div class="lang">
        <span v-html="selectedLanguage.toUpperCase()" />
        <img :src="getLanguageIcon(selectedLanguage)" />
      </div>
      <span class="dropdown-icon">▼</span>
    </div>
    <div class="options">
      <div
        v-for="lang in languages"
        :key="lang.value"
        class="option"
        @click="selectLanguage(lang)"
      >
        {{ lang.toUpperCase() }}
        <img :src="getLanguageIcon(lang)" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { LOCALE_STORAGE_KEY, SUPPORTED_LOCALES, type AppLocale } from '@/i18n'
import i18n from '@/i18n'

export default defineComponent({
  data() {
    return {
      languages: ['pl', 'en', 'jp', 'de', 'es', 'ru'],
    }
  },

  computed: {
    // Zamiast trzymać język w data, pobieramy go na żywo z i18n
    selectedLanguage(): string {
      return i18n.global.locale || 'en' // Domyślnie angielski, jeśli coś pójdzie nie tak
    },
  },

  methods: {
    getLanguageIcon(lang: string): string {
      if (lang === 'en') lang = 'us'
      if (lang === 'ru')
        return `https://upload.wikimedia.org/wikipedia/commons/6/6f/White-blue-white_flag.svg`
      return `https://flagcdn.com/w40/${lang}.png`
    },

    selectLanguage(lang: AppLocale) {
      // Zmieniamy język globalnie
      i18n.global.locale = lang
      // Zapisujemy do pamięci
      localStorage.setItem(LOCALE_STORAGE_KEY, lang)
    },
  },

  mounted() {
    // Synchronizacja po załadowaniu strony
    const savedLocale = localStorage.getItem(
      LOCALE_STORAGE_KEY
    ) as AppLocale | null
    if (savedLocale && SUPPORTED_LOCALES.includes(savedLocale)) {
      this.selectLanguage(savedLocale)
    }
  },
})
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  width: 100px;
}

.display {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 10px;
  border: 1px solid $dark_gray;
  cursor: pointer;
  border-radius: 5px;
  user-select: none;

  .dropdown-icon {
    font-size: 10px;
    transition: transform 0.3s;
  }
}

.wrapper:hover .options {
  height: 103px;
  border: 1px solid $dark;
}

.lang {
  display: flex;
  align-items: center;

  span {
    width: 25px;
  }
}

.options {
  display: flex;
  height: 0px;
  overflow: hidden;
  position: absolute;
  flex-wrap: wrap;
  top: 100%;
  right: 0;
  width: 305px;
  background-color: $dark;
  border-top: none;
  border-radius: 0 0 5px 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 10;
  transition: all 0.2s ease-in-out;
}

.option {
  width: 100px;
  padding: 6px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: 0.35s all;
  flex-grow: 1;

  &:hover {
    background-color: $dark_gray;
  }
}

img {
  width: 28px;
  height: 18px;
  margin-left: 10px;
  border-radius: 3px;
}
</style>
