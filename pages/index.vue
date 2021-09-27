<template>
  <div class="container mx-auto p-5">
    <div class="dark:text-white text-gray-700 text-center font-bold text-6xl">
      {{ this.title }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  layout: "index",
  head() {
    return {
      
    };
  },
  data() {
    return {
      title: "Hola",
      titles: ["Hola", "Hello", "Bonjour", "Hallo", "Ciao", "Salut", "Hej", "Namaste"]
    };
  },
  mounted() {
    this.rotateTitle();
    setInterval(() => {
      this.rotateTitle();
    }, 3500);
  },
  methods: {
    rotateTitle() {
      this.title = this.titles[Math.floor(Math.random() * this.titles.length)];
    }
  },
});
</script>