<template>
  <div class="text-center">
    <div class="mb-3">
      <Time :time="time" />
    </div>
    <div>
      <table>
        <tbody>
          <tr v-for="(i, row) in board" :key="i">
            <td v-for="(j, col) in i" :key="j" @click="swapBoard(row, col)">
              {{ j }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Time from "./Time.vue";
import {
  createBoard,
  mixBoard,
  isSwappable,
  getSwappableIndexes,
  swap,
  isCorretBoard,
} from "../helper";

export default {
  name: "Game",
  props: ["size"],
  components: { Time },
  data() {
    return {
      board: [],
      time: 0,
      intervalId: 0,
    };
  },
  created() {
    this.board = createBoard(this.size);
    this.board = mixBoard(this.board, 1000);
    this.intervalId = setInterval(() => this.time++, 10);
  },
  unmounted() {
    clearInterval(this.intervalId);
  },
  methods: {
    swapBoard(i, j) {
      if (isSwappable(this.board, [i, j])) {
        const indexes = getSwappableIndexes(this.board, [i, j]);
        this.board = swap(this.board, indexes[0], indexes[1]);
      }

      if (isCorretBoard(this.board)) {
        this.$emit("stop-game", this.time);
      }
    },
  },
};
</script>

<style>
td {
  width: 80px;
  height: 80px;
  font-size: 40px;
  border: 2px solid #000 !important;
  text-align: center;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td:hover {
  cursor: pointer;
}
</style>
