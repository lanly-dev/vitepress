<template lang="pug">
.text-center(class='md:text-left' v-for='post in posts ')
  article.flex.justify-between.p-10
    div
      p.text-xl {{post.title}}
      p {{post.excerpt}}
      a.link(:href='post.href') Read more
    p.float-right {{post.date.string}}
  hr
</template>

<script setup>
import posts from '../metadata.json'
</script>
