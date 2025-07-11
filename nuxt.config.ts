// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  nitro: {
    preset: "vercel"
  },

  modules: [
    "nitro-cloudflare-dev",
    "@nuxtjs/tailwindcss"
  ],

  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      title: 'CAO Orange County Election Results 2024',
      titleTemplate: '%s | OC Election Results',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Live election results for Orange County cities including Costa Mesa, Fullerton, Irvine, Orange, Santa Ana, and Tustin. View real-time vote counts and percentages for local races.'
        },
        {
          property: 'og:title',
          content: 'Orange County Election Results 2024'
        },
        {
          property: 'og:description',
          content: 'Live election results for Orange County cities including Costa Mesa, Fullerton, Irvine, Orange, Santa Ana, and Tustin. View real-time vote counts and percentages for local races.'
        },
        {
          property: 'og:image',
          content: 'https://ocvote24.pages.dev/preview.png'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:site_name',
          content: 'OC Election Results'
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:title',
          content: 'Orange County Election Results 2024'
        },
        {
          name: 'twitter:description',
          content: 'Live election results for Orange County cities including Costa Mesa, Fullerton, Irvine, Orange, Santa Ana, and Tustin. View real-time vote counts and percentages for local races.'
        },
        {
          name: 'twitter:image',
          content: 'https://ocvote24.pages.dev/preview.png'
        }
      ],
      link: [
        { rel: 'icon', href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🇺🇸</text></svg>' }
      ]
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      // Add any other PostCSS plugins you're using
    }
  }
})