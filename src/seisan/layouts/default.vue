<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>{{ appName }}</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'DefaultLayout',
  data () {
    return {
    }
  },

  computed: {
    ...mapGetters({
      appName: 'settings/getAppName'
    })
  }
}
</script>
