<template>
  <div>
    <div class="dropdown inline-block justify-center">
      <button class="font-semibold px-3 rounded inline-flex">
        <span class="mr-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" class="fill-current dark:text-gray-200 text-gray-700"><path d="M24 23h-2.784l-1.07-3h-4.875l-1.077 3h-2.697l4.941-13h2.604l4.958 13zm-4.573-5.069l-1.705-4.903-1.712 4.903h3.417zm-9.252-10.804c.126-.486.201-.852.271-1.212l-2.199-.428c-.036.185-.102.533-.22 1-.742-.109-1.532-.122-2.332-.041.019-.537.052-1.063.098-1.569h2.456v-2.083h-2.161c.106-.531.198-.849.288-1.149l-2.147-.645c-.158.526-.29 1.042-.422 1.794h-2.451v2.083h2.184c-.058.673-.093 1.371-.103 2.077-2.413.886-3.437 2.575-3.437 4.107 0 1.809 1.427 3.399 3.684 3.194 2.802-.255 4.673-2.371 5.77-4.974 1.134.654 1.608 1.753 1.181 2.771-.396.941-1.561 1.838-3.785 1.792v2.242c2.469.038 4.898-.899 5.85-3.166.93-2.214-.132-4.635-2.525-5.793zm-2.892 1.531c-.349.774-.809 1.543-1.395 2.149-.09-.645-.151-1.352-.184-2.107.533-.07 1.072-.083 1.579-.042zm-3.788.724c.062.947.169 1.818.317 2.596-1.996.365-2.076-1.603-.317-2.596z"/></svg>
        </span>
        <span>{{ currentLanguage.name }}</span>
        <svg
          class="fill-current -mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
          />
        </svg>
      </button>
      <ul class="dropdown-menu absolute hidden dark:text-gray-700 text-gray-200 pt-4 w-28 text-center">
        <div v-for="(language, index) of languages" :key="index">
          <li>
            <a
              class="
                dark:bg-gray-200
                bg-gray-700
                hover:bg-gray-600
                dark:hover:bg-gray-400
                py-2
                px-4
                block
                whitespace-no-wrap
              "
              :class="[
                index == 0 ? 'rounded-t' : '',
                index == languages.length - 1 ? 'rounded-b' : '',
                JSON.stringify(currentLanguage) === JSON.stringify(language) ? 'dark:text-green-700 text-green-300' : '',
              ]"
              @click="changeLanguage(language)"
              href="javascript:void(0)"
            >
              <span>{{ language.name }}</span>              
            </a>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "LanguageSelector",
  data() {
    return {
      currentLanguage: {},
      languages: [
        {
          name: "English",
          iso: "en",
        },
        {
          name: "Español",
          iso: "es",
        },
        {
          name: "Français",
          iso: "fr",
        },
        {
          name: "Deutsch",
          iso: "de",
        },
        {
          name: "Català",
          iso: "ca",
        },
      ],
    };
  },
  methods: {
    changeLanguage(language) {
      this.currentLanguage = language;
      localStorage.setItem("language", JSON.stringify(language));
      this.$i18n.locale = language.iso;
    },
  },
  mounted() {
    if(window.localStorage.getItem("language") === null){ window.localStorage.setItem("language", JSON.stringify({name: "English", iso: "en"})); } // First load (have not lang saved)
    
    this.currentLanguage = JSON.parse(window.localStorage.getItem("language"));
    this.$i18n.locale = JSON.parse(window.localStorage.getItem("language")).iso;
  },
  created() {},
});
</script>

<style scoped>
.dropdown:hover .dropdown-menu {
  display: block;
  animation: growDown 300ms ease-in-out forwards;
  transform-origin: top center;
}

@keyframes growDown {
  0% {
    transform: scaleY(0);
  }
  80% {
    transform: scaleY(1.1);
  }
  100% {
    transform: scaleY(1);
  }
}
</style>