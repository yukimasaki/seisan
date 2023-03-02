<template>
  <v-app>
    <v-main id="app">
      <v-container>
        <v-card>
          <v-card-title>{{ pageTitle }}</v-card-title>
          <v-card-subtitle>Provide by Nuxt3</v-card-subtitle>
          <v-card-text>This is test page.</v-card-text>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
const pageTitle: string = 'Hello Vuetify3!'
</script>