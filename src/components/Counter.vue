<template>
  <div>
    <h2>{{ title || "Counter" }}</h2>
    <p>{{ counter }}<sup>2</sup> = {{ squareValue }}</p>

    <div class="buttons">
      <button v-on:click="addOne">+1</button>
      <button v-on:click="minusOne">-1</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    start: {
      type: Number,
      required: true,
      validator(value) {
        return value > 100;
      },
    },
  },
  data() {
    return { counter: this.start };
  },
  methods: {
    getSquareValue() {
      return "hola Mundo";
    },
    addOne() {
      this.counter = this.counter + 1;
    },
    minusOne() {
      this.counter = this.counter - 1;
    },
  },
  computed: {
    squareValue() {
      return this.counter * this.counter;
    },
  },
};
</script>

<style>
button {
  background-color: #64b687;
  border-radius: 5px;
  border: 0.4px solid white;
  color: white;
  cursor: pointer;
  margin: 0 5px;
  padding: 5px 15px;
  transition: 0.3s ease-in-out;
}
</style>
