<template>
  <div
    v-if="status === 'beginning'"
    class="height-100 d-flex justify-content-center align-items-center"
  >
    <Start @start-game="startGame" />
  </div>
  <div
    v-if="status === 'gaming'"
    class="height-100 d-flex justify-content-center align-items-center"
  >
    <Game :size="size" @stop-game="stopGame" />
  </div>
  <div
    v-if="status === 'stopping'"
    class="height-100 d-flex justify-content-center align-items-center"
  >
    <PlayAgain :score="score" :record="record" @play-again="playAgain" />
  </div>
</template>

<script>
import Start from "./components/Start.vue";
import Game from "./components/Game.vue";
import PlayAgain from "./components/PlayAgain.vue";

export default {
  name: "App",
  components: { Start, Game, PlayAgain },
  data() {
    return {
      status: "beginning",
      size: 3,
      score: 0,
      record: Infinity,
    };
  },
  methods: {
    startGame(size) {
      this.size = size;
      this.status = "gaming";
    },
    stopGame(score) {
      this.status = "stopping";
      this.score = score;
      if (this.score < this.record) this.record = this.score;
    },
    playAgain() {
      this.status = "gaming";
    },
  },
};
</script>

<style>
.height-100 {
  height: 100vh;
}
</style>
