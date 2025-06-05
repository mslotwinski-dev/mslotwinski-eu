<template>
  <span v-html="degree" class="degree" />
  <Modal ref="modal" title="Education plans">
    <p class="global-degree-modal" v-html="desc"></p>
  </Modal>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Modal from '@/components/Shared/modals/Modal.vue'

// @click="showModal()"

export default defineComponent({
  props: {
    degree: String,
    desc: String,
  },
  data() {
    return {}
  },
  components: {
    Modal,
  },
  methods: {
    showModal() {
      const modal = this.$refs.modal as InstanceType<typeof Modal>
      if (modal) modal.toggleModal()
    },
  },
})
</script>

<style lang="scss" scoped>
.degree {
  font-size: 13px;
  color: #777;
  font-style: italic;
  // cursor: pointer;
}
</style>

<style lang="scss">
p.global-degree-modal {
  .matura {
    padding: 5vw 5vh;
    max-width: 700px;
    flex-grow: 1;

    h3 {
      text-transform: uppercase;
    }

    .flex-b {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 3px 10px;
      :last-child {
        font-weight: 500;
      }
    }
  }
}
</style>
