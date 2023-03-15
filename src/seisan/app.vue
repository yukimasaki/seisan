<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>
        {{ storeSettings.appName }}
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
  const storeSettings = useStoreSettings()
  const user = useSupabaseUser()
</script>
