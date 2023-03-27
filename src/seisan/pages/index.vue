<template>
  <div>
    this is index page.
  </div>
</template>

<script setup>
  definePageMeta({
    middleware: ['requires-auth']
  })
</script>
