<template>
  <h2>{{ sec }} : {{ msec }}</h2>
</template>

<script>
import { formatTime } from "../helper";

export default {
  name: "Time",
  props: ["time"],
  data() {
    return {
      sec: 0,
      msec: 0,
    };
  },
  created() {
    const time = formatTime(this.time);
    this.sec = time.sec;
    this.msec = time.msec;
  },
  watch: {
    time: function (newTime) {
      const time = formatTime(newTime);
      this.sec = time.sec;
      this.msec = time.msec;
    },
  },
};
</script>

<style>
h2 {
  display: inline-block;
  margin: 0 !important;
}
</style>
