<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>
        {{ storeSettings.appName }}
      </v-toolbar-title>
      <v-menu v-if="user"
        min-width="200px"
        rounded
      >
        <template v-slot:activator="{ props }">
          <v-btn
            text
            v-bind="props"
          >
            <v-avatar>
              <v-icon icon="mdi-account-circle" size="x-large" />
            </v-avatar>
            {{ user.user_metadata.username }}
          </v-btn>
        </template>
        <v-card>
          <v-card-text>
            <div class="mx-auto text-center">
              <v-avatar>
                <v-icon icon="mdi-account-circle" size="x-large" />
              </v-avatar>
              <h3>{{ user.user_metadata.username }}</h3>
              <p class="text-caption mt-1">{{ user.email }}</p>
              <v-divider class="my-3"></v-divider>
              <v-btn rounded text @click="logout" :loading="loading">ログアウト</v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-menu>
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
  const user = reactive(useSupabaseUser())
  const client = useSupabaseAuthClient()

  const loading = ref(false)

  const logout = async () => {
    loading.value = true
    await client.auth.signOut()
    loading.value = false
    await navigateTo('/login')
  }
</script>
