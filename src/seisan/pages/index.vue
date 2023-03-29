<template>
  <div>
    <VCalendar
      expanded
      borderless
      :color="'primary-lighten-9'"
    />
  </div>
</template>

<script setup>
  definePageMeta({
    middleware: ['requires-auth']
  })
</script>
