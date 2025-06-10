<template>
  <div>
    <div class="langs-container">
      <div
        v-for="([lang, value], index) in langs"
        :key="index"
        class="lang-bar"
        :style="{
          width: getWidth(value),
          backgroundColor: colors[lang],
        }"
        @mouseenter=";(hoverIndex = index), (displaycloud = true)"
        @mouseleave="displaycloud = false"
      />
    </div>
    <div
      class="cloud"
      :style="{
        left: getCloudPos(hoverIndex),
        backgroundColor: colors[langs[hoverIndex][0]],
      }"
      :class="{ hidden: !displaycloud }"
      v-html="((100 * langs[hoverIndex][1]) / total).toFixed(1) + '%'"
    />
    <div class="langs">
      <div v-for="([lang], index) in langs" :key="index">
        <div class="lang">
          <span class="dot" :style="{ color: colors[lang] }">
            <ic icon="heart" />
          </span>
          <span class="lang-name">{{ lang }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { colors } from '@/data/colors'

export default defineComponent({
  props: {
    langs: {
      type: Array as () => [string, number][],
      required: true,
    },
  },
  setup(props) {
    const total = props.langs.reduce((acc, [, value]) => acc + value, 0)

    const getWidth = (value: number): string => {
      if (total === 0) return '0%'
      const percentage = (value / total) * 100
      return `${percentage}%`
    }

    const sumto = (n: number): number => {
      let sum = 0
      for (let i = 0; i < n; i++) {
        sum += props.langs[i][1]
      }
      return sum
    }

    const getCloudPos = (index: number): string => {
      if (total === 0 || hoverIndex.value == null) return '0%'
      let sum = 0

      sum += sumto(index)
      sum += props.langs[index][1] / 2

      return `${(100 * sum) / total}%`
    }

    const hoverIndex = ref<number | null>(0)
    const displaycloud = ref<boolean>(false)
    return {
      getWidth,
      sumto,
      getCloudPos,
      colors,
      total,
      hoverIndex,
      displaycloud,
    }
  },
})
</script>

<style lang="scss" scoped>
.langs-container {
  display: flex;
  width: 1000px;
  height: 50px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  background-color: #f4f7f9;
  overflow: hidden;
}

.lang-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    filter: brightness(1.1);
  }
}

.langs {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.lang {
  margin: 10px;
  .dot {
    margin-right: 5px;
  }
}

.cloud {
  position: absolute;
  top: -20px;
  text-align: center;
  width: 70px;
  transform: translateX(-50%);
  font-size: 14px;
  color: $light;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 5px 10px;
  border-radius: 5px;
  text-shadow: 2px 1px 3px $dark_gray;

  transition: all 0.2s ease-out;
  opacity: 1;
}

.hidden {
  opacity: 0;
}
</style>
