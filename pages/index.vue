<template>
  <div class="container mx-auto py-8 px-5 flex">
    <div
      class="
        flex flex-grow
        justify-center
        dark:text-white
        text-gray-700
        font-bold
        text-6xl
        items-center
      "
    >
      <vue-typed-js
        :strings="this.greetings"
        :loop="true"
        :typeSpeed="75"
        :backSpeed="75"
        :backDelay="3500"
      >
        <p class="typing"></p>
      </vue-typed-js>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  layout: "index",
  data() {
    return {
      greetings: [
        "Hola",
        "Hello",
        "Bonjour",
        "Hallo",
        "Ciao",
        "Salut",
        "Hej",
        "Namaste",
      ],
    };
  },
});
</script>