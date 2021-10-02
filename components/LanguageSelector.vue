<template>
  <div>
    <div class="dropdown inline-block relative">
      <button class="font-semibold px-4 rounded inline-flex items-center">
        <span
          :class="`flag-icon flag-icon-${currentLanguage.code} mr-1`"
        ></span>
        <span class="mr-1">{{ currentLanguage.name }}</span>
        <svg
          class="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
          />
        </svg>
      </button>
      <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
        <div v-for="(language, index) of languages" :key="index">
          <li>
            <a
              class="
                bg-gray-200
                hover:bg-gray-400
                py-2
                px-4
                block
                whitespace-no-wrap
              "
              :class="[
                index == 0 ? 'rounded-t' : '',
                index == languages.length - 1 ? 'rounded-b' : '',
              ]"
              @click="changeLanguage(language)"
              href="javascript:void(0)"
            >
              <span :class="`flag-icon flag-icon-${language.code}`"></span>
              {{ language.name }}
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
      currentLanguage: {
        code: "en",
        name: "English",
        iso: "en",
      },
      languages: [
        {
          name: "English",
          code: "us",
          iso: "en",
        },
        {
          name: "Español",
          code: "es",
          iso: "es",
        },
        {
          name: "Français",
          code: "fr",
          iso: "fr",
        },
        {
          name: "Deutsch",
          code: "de",
          iso: "de",
        },
        {
          name: "Català",
          code: "es",
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
    this.$i18n.locale = JSON.parse(window.localStorage.getItem("language")).iso || "en";
    this.currentLanguage = JSON.parse(window.localStorage.getItem("language")) || this.currentLanguage;
  },
  created() {
    
  }
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