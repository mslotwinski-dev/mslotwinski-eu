<template>
  <div class="projects">
    <!-- <header>{{ $t('home.keyProjectsHeader') }}</header> -->
    <header>Obszar mojej specjalizacji</header>
    Czyli to, czym zajmuję się w swojej codziennej pracy i czym chciałbym się
    zajmować w przyszłości.
    <div class="icons">
      <div
        class="icon"
        v-for="(icon, index) in icons"
        :key="icon"
        @click="current = index"
        :class="{ active: current === index }"
      >
        <img :src="require(`@/assets/science/${icon}.png`)" :alt="icon" />
      </div>
    </div>

    <section class="container">
      <div v-if="current == 0">
        <div class="title">Fizyka i technologia materiałów szklistych</div>
        Materiały szkliste oparte o tlenki krzemu i fosforu stanowią fundament
        współczesnej optoelektroniki. Ich unikalna, bezpostaciowa struktura
        pozwala na szeroką modyfikację właściwości fizykochemicznych. W ramach
        działalności naukowej zajmuję się syntezą nowatorskich szkieł
        fosforanowych oraz kompleksowym badaniem ich właściwości elektrycznych i
        optycznych, co ma kluczowe znaczenie dla projektowania nowej generacji
        lamp, czujników czy baterii.
      </div>
      <div v-if="current == 1">
        <div class="title">
          Przewodnictwo jonowe w kompozytach szklisto-ceramicznych
        </div>
        Kompozyty szklisto-ceramiczne wykazujące wysokie przewodnictwo jonowe
        (Li+, Na+, K+, O2-) są kluczowym elementem rewolucji w obszarze
        magazynowania i konwersji energii. Stanowią one bezpieczną alternatywę
        dla płynnych komponentów w bateriach nowej generacji (solid-state) oraz
        ogniwach paliwowych. Moje badania koncentrują się na optymalizacji
        transportu jonów w tych strukturach poprzez analizę ich mikrostruktury
        oraz pomiary impedancyjne.
      </div>
      <div v-if="current == 2">
        <div class="title">Magazynowanie i przetwarzanie energii</div>
        Rozwój nowoczesnych technologii energetycznych wymaga projektowania
        materiałów o wysokiej stabilności chemicznej, dużej przewodności jonowej
        oraz odpowiednich właściwościach elektrochemicznych. Moje
        zainteresowania obejmują materiały stosowane w bateriach oraz ogniwach
        paliwowych nowej generacji, w szczególności nanokrystaliczne elektrolity
        oraz materiały katodowe, gdzie kluczowe znaczenie ma efektywny transport
        jonów oraz trwałość materiału.
      </div>
      <div v-if="current == 3">
        <div class="title">Optyka i elektronika ciał stałych</div>
        Interesują mnie badania z pogranicza optyki i elektroniki ciała stałego:
        materiały luminescencyjne, półprzewodniki oraz dielektryki
        wykorzystywane w źródłach światła, detektorach promieniowania,
        elementach optoelektronicznych i układach elektronicznych nowej
        generacji. Badania w tym obszarze obejmują analizę zjawisk absorpcji,
        emisji czy transportu ładunku, łącząc zagadnienia fizyki ciała stałego z
        nowoczesną inżynierią materiałową.
      </div>
      <div v-if="current == 4">
        <div class="title">Modelowanie procesów jonowych</div>
        Zastosowanie sztucznej inteligencji rewolucjonizuje współczesną
        inżynierię materiałową. Wykorzystanie sieci neuronowych i uczenia
        maszynowego (potencjałów ML) pozwala na symulowanie dynamiki
        molekularnej oraz transportu jonów w materiałach szklistych z
        dokładnością kwantową przy minimalnym koszcie obliczeniowym. Projekt
        obejmuje implementację algorytmów uczenia maszynowego do predykcji
        właściwości strukturalnych i dyfuzyjnych szkieł.
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      icons: ['glass', 'ion', 'energy', 'optics', 'simulations'],
      current: 0,
    }
  },
})
</script>

<style lang="scss" scoped>
.projects {
  display: flex;
  align-items: center;
  flex-direction: column;

  padding-top: 40px;
  margin-top: 40px;

}

.container {
  width: 100%;
  max-width: 900px;
  height: 120px;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  text-align: justify;
}

.title {
  font-size: 20px;
  font-weight: 600;
  color: $dark;
  margin-bottom: 10px;
  text-transform: uppercase;
}

header {
  font-size: 24px;
  font-weight: 600;
  color: $dark;
  margin-bottom: 20px;
  text-transform: uppercase;
}

.icons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px 0;
}

.icon {
  width: 100px;
  height: 100px;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $main2;
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  transition: box-shadow 0.3s ease-in-out;
  &:hover,
  &.active {
    box-shadow: 0 0 10px $main;
  }

  img {
    width: 90%;
    height: 90%;
    object-fit: contain;
  }
}
</style>
