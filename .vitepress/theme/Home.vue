<template lang="pug">
.text-center(class='md:text-left' v-for='post in posts ')
  p {{post.title}}
  p {{post.excerpt}}
  a.link(:href='post.href') {{post.href}}
  p {{post}}
  hr
</template>

<script setup>
import posts from '../metadata.json'
</script>
