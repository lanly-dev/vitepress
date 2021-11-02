<template lang="pug">
.container.mx-auto.mt-5.p-2
  //- button.bg-blue-500.text-white.font-bold.py-2.px-4.rounded(class='hover:bg-blue-700') Button
  p.text-center(class='md:text-left') {{$frontmatter.owner }} with icon
  hr
  main.w-3xl.mx-auto.px-4(class='sm:px-6 xl:max-w-5xl xl:px-0')
    home(v-if='isIndex')
    article(v-else)

</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import Home from './Home.vue'
import Article from './Article.vue'
const route = useRoute()
const isIndex = computed(() => route.path.replace(/index.html$/, '') === '/')
</script>
