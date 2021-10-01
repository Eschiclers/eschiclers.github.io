<template>
  <div class="flex flex-col min-h-screen bg-gray-200 dark:bg-gray-800">
    <Header />

    <Nuxt class="flex-grow" />

    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  head() {
    return {
      title: "Chicle",
    };
  },
  data() {
    return {
      darkMode: true,
    };
  },
  computed: {},
  methods: {},
  mounted() {},
  beforeCreate() {},
  created() {},
});
</script>