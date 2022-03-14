<template>
  <div class="text-center">
    <div>
      <h3>Score <Time :time="score" /></h3>
      <h3>Best Score <Time :time="record" /></h3>
    </div>
    <div>
      <button class="btn btn-secondary mt-4" @click="$emit('play-again')">
        Play
      </button>
    </div>
  </div>
</template>

<script>
import Time from "./Time.vue";

export default {
  name: "PlayAgain",
  props: ["score", "record"],
  components: { Time },
};
</script>

<style>
h3 {
  margin: 3px 0 !important;
}
</style>
