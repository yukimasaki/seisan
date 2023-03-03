<template>
<v-app>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>{{ settings.appName }}</v-toolbar-title>
  </v-app-bar>

  <v-main>
    <v-container fluid>
      <NuxtPage />
    </v-container>
  </v-main>
</v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStoreSettings } from './stores/settings';

export default defineComponent ({
  setup () {
    // const appName = ref<string>('精算アプリ')
    const settings = useStoreSettings();
    return {
      settings,
    }
  }
})
</script>
