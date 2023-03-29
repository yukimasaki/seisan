<template>
  <div>
    <VCalendar
      expanded
    />
  </div>
</template>

<script setup>
  definePageMeta({
    middleware: ['requires-auth']
  })
</script>
