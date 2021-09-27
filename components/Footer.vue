<template>
  <div>
    <footer
      class="
        text-gray-600
        body-font
        bg-gray-100
        dark:text-gray-100
        dark:bg-gray-700
      "
    >
      <div
        class="
          container
          px-5
          py-8
          mx-auto
          flex
          items-center
          sm:flex-row
          flex-col
        "
      >
        <a
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
        <p
          class="
            text-sm text-gray-500
            dark:text-gray-300
            sm:ml-4
            sm:pl-4
            sm:border-l-2 sm:border-gray-200
            sm:py-2
            sm:mt-0
            mt-4
          "
        >
          <a
            :href="this.contact.twitter"
            class="text-gray-400 dark:hover:text-gray-200 hover:text-gray-800"
            rel="noopener noreferrer"
            target="_blank"
            >@Eschiclers</a>
            -
            &lt;<a
            :href="this.contact.email"
            class="text-gray-400 dark:hover:text-gray-200 hover:text-gray-800"
            rel="noopener noreferrer"
            target="_blank"
            >chicle@protonmail.com</a>&gt;
        </p>
        <span
          class="
            inline-flex
            sm:ml-auto
            sm:mt-0
            mt-4
            justify-center
            sm:justify-start
          "
        >
          <!-- email -->
          <a
            :href="this.contact.email"
            target="_blank"
            class="
              ml-3
              text-gray-400
              dark:hover:text-gray-100
              hover:text-gray-800
            "
          >
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
            </svg>
          </a>
          <!-- Telegram -->
          <a
            :href="this.contact.telegram"
            target="_blank"
            class="
              ml-3
              text-gray-400
              dark:hover:text-gray-100
              hover:text-gray-800
            "
          >
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <path
                id="telegram-1"
                d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"
              />
            </svg>
          </a>
          <!-- Github -->
          <a
            :href="this.contact.github"
            target="_blank"
            class="
              ml-3
              text-gray-400
              dark:hover:text-gray-100
              hover:text-gray-800
            "
          >
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
          </a>
          <!-- Twitter -->
          <a
            :href="this.contact.twitter"
            target="_blank"
            class="
              ml-3
              text-gray-400
              dark:hover:text-gray-100
              hover:text-gray-800
            "
          >
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
              ></path>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  layout: "Footer",
  data() {
    return {
      contact: {
        email: 'mailto:chicle@protonmail.com',
        telegram: 'https://telegram.me/eschiclers',
        github: 'https://github.com/eschiclers',
        twitter: 'https://twitter.com/Eschiclers'
      }
    };
  },
});
</script>
