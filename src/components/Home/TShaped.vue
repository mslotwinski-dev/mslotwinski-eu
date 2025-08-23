<template>
  <div class="flex">
    <div class="text">
      <div
        v-for="index in [...Array(5).keys()]"
        :key="index"
        :class="{ active: i === index }"
      >
        <header v-html="title[i]" />

        {{ desc[index] }}
      </div>
    </div>
    <div class="graph">
      <img
        :key="(index, _)"
        v-for="index in [...Array(5).keys()]"
        :src="require(`@/assets/tshaped/lines/${index}.png`)"
        :class="{ active: i == index }"
        :id="index"
      />
      <div
        class="dot"
        v-for="(item, index) in items"
        :key="index"
        :style="{
          left: item.x + 'px',
          top: item.y + 'px',
        }"
        @mouseenter="i = index"
        :class="{ active: i === index }"
      >
        <img
          :src="require(`@/assets/tshaped/${item.icon}.svg`)"
          :style="{ width: item.size + 'px', height: item.size + 'px' }"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    const title = [
      'Fizyka',
      'Elektronika',
      'Telekomunikacja',
      'Informatyka',
      'Sztuczna inteligencja',
    ]

    const desc = [
      'Fizyka jest dla mnie fundamentem, który pozwala zrozumieć świat oraz technologię, jaką dzięki niej można tworzyć. Daje mi unikalne spojrzenie na problemy i możliwości ich rozwiązania, a jednocześnie naturalnie łączy wszystkie zagadnienia, którymi się zajmuję — od elektroniki przez symulacje po AI i technologie przyszłości.',
      'Dzięki praktycznym umiejętnościom z zakresu elektroniki potrafię projektować systemy wbudowane, programować mikroprocesory, analizować sygnały i tworzyć technologie wymagające połączenia sztucznej inteligencji z warstwą sprzętową zarówno na poziomie oprogramowania, komunikacji jak i fizycznych procesów za tym stojących.',
      'Telekomunikacja i technologie chmurowe są dla mnie naturalnym rozszerzeniem podejścia systemowego — łączenia fizycznych procesów, transmisji danych i ich przetwarzania. Sieci komputerowe, IoT i cloud pozwalają mi budować zintegrowane systemy, które automatyzują pomiary, komunikują się w czasie rzeczywistym i dostarczają dane tam, gdzie mogą być analizowane i wykorzystane w AI.',
      'Programowanie to dla mnie kluczowa umiejętność i jedno z najważniejszych narzędzi w projektowaniu współczesnej technologii. Umożliwia mi tworzenie aplikacji sieciowych i symulacji obliczeniowych, a także algorytmów wykorzystujących AI - zarówno po stronie software, jak i na styku z hardwarem.',
      'Nasza przyszłość i cała nowoczesna technologia jest zdefiniowana przez sztuczną inteligencję. Stanowi ona rdzeń wokół którego mogę mogę splatać wszystkie moje kompetencje. Łącząc wiedzę o świecie rzeczywistym z zastosowaniami AI, tworzę inteligentne systemy, które łączą świat cyfrowy i fizyczny . Interesuje mnie AI osadzone w kontekście — tam, gdzie dane pochodzą z realnych zjawisk i fizycznych procesów.',
    ]
    return {
      i: 0,
      desc,
      title,
      items: [
        {
          icon: 'physics',
          x: 0,
          y: 10,
          size: 40,
        },
        {
          icon: 'electronics',
          x: 30,
          y: 75,
          size: 42,
        },
        {
          icon: 'telecommunications',
          x: 0,
          y: 140,
          size: 30,
        },
        {
          icon: 'informatics',
          x: 120,
          y: 75,
          size: 35,
        },
        {
          icon: 'ai',
          x: 250,
          y: 75,
          size: 30,
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
}

.text {
  width: 700px;
  text-align: justify;

  display: flex;
  flex-direction: column;

  header {
    font-weight: 500;
    font-size: 20px;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  div {
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.6s ease, transform 0.6s ease;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    &.active {
      opacity: 1;
      transform: translateY(0);
      position: relative;
    }
  }
}

.graph {
  width: 320px;
  height: 200px;
  background-image: url('@/assets/tshaped/lines/background.png');
  background-size: cover;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: 0.2s all;
    &.active {
      opacity: 0.7;
    }
  }
}

.dot {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: $dark;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s all ease-in-out;
  cursor: pointer;
  img {
    width: 45px;
    height: 45px;
    filter: invert(0.5) grayscale(1) brightness(2);
  }
  &.active {
    box-shadow: 0 0 10px $violet;
  }
}
</style>
