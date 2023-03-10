<template>
  <div>
    this is index page.
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'require-auth'
})
</script>
