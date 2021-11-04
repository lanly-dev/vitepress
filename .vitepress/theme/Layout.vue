<template lang="pug">
.container.mx-auto.mt-5.p-2
  .text-center(class='sm:flex')
    a.text-black.text-center.cursor-pointer.text-xl(class='sm:text-left sm:mr-2')(href='/') {{ owner }}
    .text-xl.p-0
      a.text-black(href="https://www.linkedin.com/in/lannly"): FontAwesomeIcon.mr-2(:icon="['fab', 'linkedin']")
      a.text-black(href="https://github.com/lanly-dev"): FontAwesomeIcon.text-xl(:icon="['fab', 'github']")

  main.max-w-3xl.mx-auto.px-4(class='sm:px-6 xl:max-w-5xl xl:px-0')
    Home(v-if='isIndex')
    Article(v-else)
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useData } from 'vitepress'
import Home from './Home.vue'
import Article from './Article.vue'
const route = useRoute()
const isIndex = computed(() => route.path.replace(/index.html$/, '') === '/')
const owner = computed(() => useData().site.value.title)
</script>
