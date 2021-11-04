<template lang="pug">
.container.mx-auto.mt-5.p-2
  //- button.bg-blue-500.text-white.font-bold.py-2.px-4.rounded(class='hover:bg-blue-700') Button
  .text-center(class='sm:flex')
    p.text-center.text-xl.mr-2(class='sm:text-left sm:mb-0') {{ owner }}
    .align-bottom.pb-2(class='sm:pt-4')
      FontAwesomeIcon.text-xl.mt-1.mr-2(:icon="['fab', 'linkedin']")
      FontAwesomeIcon.text-xl.mt-1(:icon="['fab', 'github']")

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
