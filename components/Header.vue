<template>
  <header>
    <nav
      class="
        text-gray-600
        bg-gray-100
        dark:text-gray-100
        dark:bg-gray-700
        py-3
        px-5
      "
    >
      <div
        class="
          container
          flex
          justify-between
          items-center
          text-gray-700
          dark:text-gray-100
        "
      >
        <div class="flex">
          <a
            href="/"
            class="
              flex
              title-font
              font-medium
              items-center
              md:justify-start
              justify-center
              text-gray-900
              dark:text-gray-200
            "
          >
            <span class="ml-3 text-xl">Chicle.dev</span>
          </a>
          <div
            class="
              text-sm text-gray-500
              dark:text-gray-300
              sm:ml-4
              sm:pl-4
              sm:border-l-2 sm:border-gray-200
              sm:dark:border-gray-500
              sm:py-2
              sm:mt-0
              mt-4
            "
          ></div>
          <ul
            class="
              flex
              title-font
              font-medium
              items-center
              md:justify-start
              justify-center
              space-x-3
            "
          >
            <li class="">
              <nuxt-link class="dark:hover:text-gray-500 hover:text-gray-300" to="/">{{ $t('navbar.home') }}</nuxt-link>
            </li>
            <li>
              <nuxt-link class="dark:hover:text-gray-500 hover:text-gray-300" to="/about-me"> {{ $t('navbar.about') }}</nuxt-link>
            </li>
          </ul>
        </div>

        <ul
          class="
            flex
            title-font
            font-medium
            items-center
            md:justify-start
            justify-center
            space-x-3
          "
        >
          <li class="">
            <a
              class="dark:hover:text-gray-500 hover:text-gray-300"
              target="_blank"
              href="https://github.com/Eschiclers/eschiclers.github.io"
              >{{ $t("navbar.fork") }}</a
            >
          </li>
          <li>
            <LanguageSelector />
          </li>
          <li>
            <SwitchTheme />
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  layout: "Header",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
});
</script>
