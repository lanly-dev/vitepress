<template lang="pug">
.text-center(class='sm:text-left' v-for='post in posts')
  article.justify-between.py-7(class='sm:flex-row-reverse')
    p.m-0(class='sm:float-right') {{post.date.string}}
    div
      a.text-xl(:href='post.href') {{post.title}}
      p {{post.excerpt}}
  hr
</template>

<script setup>
import posts from '../metadata.json'
</script>
