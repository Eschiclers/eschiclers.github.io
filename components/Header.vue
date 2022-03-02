<template>
  <header>
    <nav class="">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img
                class="h-8 w-8 rounded-full"
                src="https://avatars.githubusercontent.com/Eschiclers"
                alt="Chicle"
              />
            </div>
            <div class="hidden lg:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <nuxt-link
                  class="
                    dark:text-gray-200
                    dark:hover:text-white
                    dark:hover:bg-gray-700
                    text-gray-800
                    hover:text-gray-900 hover:bg-gray-300
                    px-3
                    py-2
                    rounded-md
                    text-sm
                    font-medium
                    duration-300
                    ease-linear
                  "
                  aria-current="page"
                  to="/"
                  >{{ $t("navbar.home") }}</nuxt-link
                >

                <a
                  href="https://blog.chicle.dev/"
                  class="
                dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white
                text-gray-800
                hover:text-gray-900 hover:bg-gray-300
                block
                px-3
                py-2
                rounded-md
                text-base
                font-medium
                duration-300
                ease-linear
              "
                  >Blog</a
                >

                <nuxt-link
                  class="
                    dark:text-gray-200
                    dark:hover:text-white
                    dark:hover:bg-gray-700
                    text-gray-800
                    hover:text-gray-900 hover:bg-gray-300
                    px-3
                    py-2
                    rounded-md
                    text-sm
                    font-medium
                    duration-300
                    ease-linear
                  "
                  to="/about-me"
                >
                  {{ $t("navbar.about") }}</nuxt-link
                >

                <nuxt-link
                  class="
                    dark:text-gray-200
                    dark:hover:text-white
                    dark:hover:bg-gray-700
                    text-gray-800
                    hover:text-gray-900 hover:bg-gray-300
                    px-3
                    py-2
                    rounded-md
                    text-sm
                    font-medium
                    duration-300
                    ease-linear
                  "
                  to="/projects"
                  >{{ $t("navbar.projects") }}</nuxt-link
                >
              </div>
            </div>
          </div>
          <div class="hidden lg:block">
            <div class="ml-4 flex items-center lg:ml-6">
              <div class="ml-10 flex space-x-4 items-baseline">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->

                <a
                  href="https://github.com/Eschiclers/eschiclers.github.io"
                  target="_blank"
                  class="
                    dark:text-gray-200
                    dark:hover:bg-gray-700
                    dark:hover:text-white
                    text-gray-800
                    hover:text-gray-900 hover:bg-gray-300
                    px-3
                    py-2
                    rounded-md
                    text-sm
                    font-medium
                    duration-300
                    ease-linear
                  "
                  >{{ $t("navbar.fork") }}</a
                >

                <LanguageSelector
                  class="
                    dark:text-gray-200
                    dark:hover:text-white
                    dark:hover:bg-gray-700
                    text-gray-800
                    hover:text-gray-900 hover:bg-gray-300
                    rounded-md
                    py-2
                    text-sm
                    font-medium
                    duration-300
                    ease-linear
                  "
                />

                <SwitchTheme class="py-2 text-sm font-medium" />
              </div>
            </div>
          </div>
          <div class="-mr-2 flex lg:hidden">
            <!-- Mobile menu button -->
            <button
              type="button"
              @click="setIsOpen(!isOpen)"
              class="
                inline-flex
                items-center
                justify-center
                p-2
                rounded-md
                dark:text-gray-200 dark:hover:text-white dark:hover:bg-gray-700
                text-gray-800
                hover:text-gray-900 hover:bg-gray-300
              "
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>

              <svg
                v-if="!isOpen"
                class="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <svg
                v-else
                class="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <transition
        enter-active-class="transition ease-out duration-300"
        enter-class="opacity-0 translate-y-1"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-300"
        leave-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-1"
      >
        <div v-if="isOpen" class="lg:hidden origin-top" id="mobile-menu">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <nuxt-link
              to="/"
              class="
                dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white
                text-gray-800
                hover:text-gray-900 hover:bg-gray-300
                block
                px-3
                py-2
                rounded-md
                text-base
                font-medium
                duration-300
                ease-linear
              "
              aria-current="page"
              >{{ $t("navbar.home") }}</nuxt-link
            >
            <a
              href="https://blog.chicle.dev/"
              class="
                dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white
                text-gray-800
                hover:text-gray-900 hover:bg-gray-300
                block
                px-3
                py-2
                rounded-md
                text-base
                font-medium
                duration-300
                ease-linear
              "
              >Blog</a
            >
            <nuxt-link
              to="/about-me"
              class="
                dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white
                text-gray-800
                hover:text-gray-900 hover:bg-gray-300
                block
                px-3
                py-2
                rounded-md
                text-base
                font-medium
                duration-300
                ease-linear
              "
              >{{ $t("navbar.about") }}</nuxt-link
            >

            <nuxt-link
              to="/projects"
              class="
                dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white
                text-gray-800
                hover:text-gray-900 hover:bg-gray-300
                block
                px-3
                py-2
                rounded-md
                text-base
                font-medium
                duration-300
                ease-linear
              "
              >{{ $t("navbar.projects") }}</nuxt-link
            >
          </div>
          <div class="items-center pt-3 pb-3 border-b border-t border-gray-700">
            <div class="flex flex-row items-center space-x-4 px-2 space-y-1">
              <a
                href="https://github.com/Eschiclers/eschiclers.github.io"
                target="_blank"
                class="
                  px-3
                  py-2
                  rounded-md
                  text-base
                  font-medium
                  dark:text-gray-200
                  dark:hover:text-white
                  dark:hover:bg-gray-700
                  text-gray-800
                  hover:text-gray-900 hover:bg-gray-300
                  duration-300
                  ease-linear
                "
                >{{ $t("navbar.fork") }}</a
              >

              <LanguageSelector
                class="
                  py-2
                  text-base
                  font-medium
                  rounded-md
                  dark:text-gray-200
                  dark:hover:text-white
                  dark:hover:bg-gray-700
                  text-gray-800
                  hover:text-gray-900 hover:bg-gray-300
                  duration-300
                  ease-linear
                "
              />

              <SwitchTheme class="py-2 px-3 text-base font-medium" />
            </div>
          </div>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  layout: "Header",
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    setIsOpen(isOpen) {
      this.isOpen = isOpen;
    }
  },
  mounted() {}
});
</script>

<style scoped>
.nuxt-link-exact-active {
  @apply dark:bg-gray-900 dark:text-white;
  @apply bg-gray-300 text-gray-900;
}
</style>
