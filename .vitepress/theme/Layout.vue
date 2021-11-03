<template lang="pug">
.container.mx-auto.mt-5.p-2
  //- button.bg-blue-500.text-white.font-bold.py-2.px-4.rounded(class='hover:bg-blue-700') Button
  .text-center(class='md:flex')
    p.text-center.text-xl.mr-2(class='md:text-left') {{$frontmatter.owner }}
    .align-bottom
      FontAwesomeIcon.mt-1.mr-2(:icon="['fab', 'linkedin']" size='xl')
      FontAwesomeIcon.mt-1(:icon="['fab', 'github']"  size='xl')
  hr
  main
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
