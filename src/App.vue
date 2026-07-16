<template>
  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Footer from '@/components/Shared/Footer/Index.vue'
import i18n from '@/i18n'

export default defineComponent({
  components: {
    Footer,
  },
  methods: {
    updateDocumentTitle() {
      document.title = i18n.global.t('app.documentTitle')
    },
  },
  watch: {
    '$i18n.locale'() {
      this.updateDocumentTitle()
    },
  },
  mounted() {
    this.updateDocumentTitle()
  },
})
</script>

<style lang="scss">
.route-enter-from {
  opacity: 0;
  transform: translateX(4em);
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-4em);
}

.route-enter-active,
.route-leave-active {
  transition: 0.3s all ease;
}
</style>
