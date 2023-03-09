<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>
        {{ settings.appName }}
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <NuxtPage />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  import { useStoreSettings } from './stores/settings'
  import { useStoreAuth } from './stores/auth'

  const settings = useStoreSettings()
  const auth = useStoreAuth()
</script>
