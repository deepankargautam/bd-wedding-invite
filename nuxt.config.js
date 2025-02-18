export default {
  ssr: false,
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Deepankar & Boby  | Are getting married!",
    meta: [
      { charset: "utf-8" },
      { name: "google", content: "notranslate" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "You are cordially invited to celebrate our marriage.",
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://abinash-pravanjana.netlify.app/",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Deepankar & Boby  | Are getting married!",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "You are cordially invited to celebrate our marriage.",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "/og-image.jpg",
      },

      {
        hid: "twitter:card",
        property: "twitter:card",
        content: "summary",
      },
      {
        hid: "twitter:url",
        property: "twitter:url",
        content: "https://abinash-pravanjana.netlify.app/",
      },
      {
        hid: "twitter:title",
        property: "twitter:title",
        content: "Deepankar & Boby  | Are getting married!",
      },
      {
        hid: "twitter:description",
        property: "twitter:description",
        content: "You are cordially invited to celebrate our marriage.",
      },
      {
        hid: "twitter:image",
        property: "twitter:image",
        content: "/og-image.jpg",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        hid: "gf-prefetch",
        rel: "dns-prefetch",
        href: "https://res.cloudinary.com/",
      },
      {
        hid: "gf-preconnect",
        rel: "preconnect",
        href: "https://res.cloudinary.com/",
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["@/assets/styles/app"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: "@/plugins/aos", mode: "client" },
    { src: "~/plugins/vue-lazy-youtube-video.js" },
  ],

  purgeCSS: {
    whitelist: [
      "aos-init",
      "aos-animate",
      "data-aos-delay",
      "data-aos-duration",
      "fade-up",
      "zoom-in",
    ],
  },
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    // https://go.nuxtjs.dev/stylelint
    "@nuxtjs/stylelint-module",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/imagemin",
  ],

  imagemin: {
    /* module options */
  },

  googleFonts: {
    families: {
      "IBM Plex Sans": {
        wght: [400, 500],
      },
      "IBM Plex Serif": {
        wght: [400, 500],
      },
      "Playfair Display": {
        wght: [400, 500, 600],
      },
    },
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    ["vue-scrollto/nuxt", { duration: 300 }],
    "vue-social-sharing/nuxt",
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
};
