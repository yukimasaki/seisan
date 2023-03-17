<template>
  <v-avatar>
    <v-icon v-if="!avatarImage.url" icon="mdi-account-circle" size="32"/>
    <v-img v-else :src="avatarImage.url" cover width="32"/>
  </v-avatar>
</template>

<script setup>
const props = defineProps({
  avatarImage: Object
})
</script>
