<template>
  <v-avatar>
    <v-img :src="storeProfile.profile.photoURL" cover width="32"/>
  </v-avatar>
</template>

<script setup>
  const storeProfile = useStoreProfile()
</script>
