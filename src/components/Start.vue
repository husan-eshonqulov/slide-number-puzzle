<template>
  <div class="text-center">
    <div>
      <input
        type="radio"
        name="level"
        id="easy"
        :value="3"
        v-model="level"
        checked
      />
      <label for="easy" class="me-4">Easy</label>

      <input type="radio" name="level" id="medium" :value="4" v-model="level" />
      <label for="medium" class="me-4">Medium</label>

      <input type="radio" name="level" id="hard" :value="5" v-model="level" />
      <label for="hard">Hard</label>
    </div>
    <div>
      <button
        class="btn btn-secondary mt-4"
        @click="$emit('start-game', this.level)"
      >
        START
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Start",
  data() {
    return {
      level: 3,
    };
  },
};
</script>

<style>
label {
  font-size: 18px;
}

button {
  padding: 10px 35px !important;
  font-size: 20px !important;
}

input {
  margin-right: 10px !important;
}
</style>
