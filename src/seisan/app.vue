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
  const storeAuth = useStoreAuth()

  const user = useSupabaseUser()
  const { auth } = useSupabaseAuthClient()

  storeAuth.setUser(user)

  auth.onAuthStateChange((event, session) => {
    if (event == 'SIGNED_IN') storeAuth.setUser(session.user)
    if (event == 'SIGNED_OUT') storeAuth.clearUser()
  })
</script>
