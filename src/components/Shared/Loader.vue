<template>
  <div>
    <div class="loader"></div>
    <div class="text">Ładowanie</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
.loader {
  width: 90px;
  height: 14px;
  box-shadow: 0 3px 0 $dark;
  position: relative;
  clip-path: inset(-40px 0 -5px);
  margin: auto;
}
.loader:before {
  content: '';
  position: absolute;
  inset: auto calc(50% - 17px) 0;
  height: 50px;
  --g: no-repeat linear-gradient(#a50034 0 0);
  background: var(--g), var(--g), var(--g), var(--g);
  background-size: 16px 14px;
  animation: l7-1 2s infinite linear, l7-2 2s infinite linear;
}
@keyframes l7-1 {
  0%,
  100% {
    background-position: 0 -50px, 100% -50px;
  }
  17.5% {
    background-position: 0 100%, 100% -50px, 0 -50px, 100% -50px;
  }
  35% {
    background-position: 0 100%, 100% 100%, 0 -50px, 100% -50px;
  }
  52.5% {
    background-position: 0 100%, 100% 100%, 0 calc(100% - 16px), 100% -50px;
  }
  70%,
  98% {
    background-position: 0 100%, 100% 100%, 0 calc(100% - 16px),
      100% calc(100% - 16px);
  }
}
@keyframes l7-2 {
  0%,
  70% {
    transform: translate(0);
  }
  100% {
    transform: translate(200%);
  }
}
.text {
  text-align: center;
  width: fit-content;
  font-weight: bold;
  font-size: 25px;
  margin-top: 10px;
  color: #0000;
  background: linear-gradient(
      90deg,
      #000 25%,
      $violet 0 50%,
      #c02942 0 75%,
      $main 0
    )
    0 0/400% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  animation: l10 5s infinite cubic-bezier(0.3, 1, 0, 1);
}

@keyframes l10 {
  25% {
    background-position: calc(1 * 100% / 3) 0;
  }
  50% {
    background-position: calc(2 * 100% / 3) 0;
  }
  75% {
    background-position: calc(3 * 100% / 3) 0;
  }
  100% {
    background-position: calc(4 * 100% / 3) 0;
  }
}
</style>
