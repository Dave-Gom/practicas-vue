<template>
  <div>
    <img :src="img" alt="Dummie" />
    <div class="bg-dark"></div>

    <div class="indicision-container">
      <input type="text" v-model="question" />
      <p>Preguntas de Si o NO</p>
      <p>Recuerda integrar el signo de interrogacion(?)</p>

      <div v-if="isValidQuestion">
        <h2>{{ question }}</h2>
        <h1>{{ answer }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { question: null, answer: null, img: null, isValidQuestion: false };
  },
  methods: {
    async getAnswer() {
      this.answer = "Pensando...";
      const { answer, image } = await fetch("https://yesno.wtf/api").then((r) =>
        r.json()
      );
      this.answer = answer;
      this.img = image;
    },
  },
  watch: {
    question(value) {
      this.isValidQuestion = false;
      if (value.includes("?")) {
        this.isValidQuestion = true;
        this.getAnswer();
      }
    },
  },
};
</script>

<style scoped>
img,
.bg-dark {
  height: 100vh;
  left: 0px;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0px;
  width: 100vw;
  z-index: -1;
}
.bg-dark {
  background-color: rgba(0, 0, 0, 0.4);
}
.indecision-container {
  position: relative;
  z-index: 100;
}

input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
}
input:focus {
  outline: none;
}
p {
  color: white;
  font-size: 20px;
  margin-top: 0px;
}
h1,
h2 {
  color: whitesmoke;
}

h2 {
  margin-top: 150px;
}
</style>
