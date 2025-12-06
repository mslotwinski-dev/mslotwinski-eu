<template>
  <h2 class="header">Języki</h2>
  <section class="language-section">
    <div class="languages">
      <div class="lang-card" v-for="lang in languages" :key="lang.name">
        <div class="lang-header">
          <div class="lang-info">
            <img
              v-if="lang.flag"
              :src="lang.flag"
              :alt="lang.name + ' flaga'"
              class="flag"
            />
            <span class="lang-name">{{ lang.name }}</span>
          </div>
          <span class="level">{{ lang.level }}</span>
        </div>
        <div class="progress-bar">
          <div class="progress" :style="{ width: lang.percent + '%' }"></div>
        </div>
        <div
          class="cert"
          v-html="`Certyfikat ${cert.level}`"
          v-for="cert in lang.certs"
          :key="cert"
          @click="open(cert.link)"
        />
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import languages from '@/data/langs'

export default defineComponent({
  data() {
    return { languages }
  },
  methods: {
    open(link: string) {
      window.open(link, '_blank')
    },
  },
})
</script>
<style lang="scss" scoped>
.language-section {
  max-width: 900px;
  margin: 0 auto;

  .languages {
    display: flex;
    flex-direction: column;
  }

  .lang-card {
    padding: 0.5rem 1.25rem;
    border-radius: 1rem;
    transition: box-shadow 0.3s ease;

    .lang-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.75rem;

      .lang-info {
        display: flex;
        align-items: center;
        gap: 0.75rem;

        .flag {
          width: 28px;
          height: 20px;
          border-radius: 4px;
          object-fit: cover;
          border: 1px solid #ccc;
        }

        .lang-name {
          font-weight: 600;
          font-size: 1rem;
          color: #222;
        }
      }

      .level {
        color: #666;
        font-size: 0.9rem;
      }
    }

    .progress-bar {
      height: 8px;
      background: #e0e0e0;
      border-radius: 999px;
      overflow: hidden;

      .progress {
        height: 100%;
        background: linear-gradient(to right, $main, $main2);
        border-radius: 999px;
        transition: width 0.4s ease;
      }
    }
  }
}

.cert {
  display: inline-block;
  color: #666;
  font-size: 0.9rem;
  margin-top: 10px;
  margin-right: 20px;
  cursor: pointer;
}
</style>
