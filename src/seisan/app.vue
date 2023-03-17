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
            <Avatar :avatarImage="avatarImage" class="mr-2" />
            <p>{{ user.user_metadata.username }}</p>
          </v-btn>
        </template>
        <v-card>
          <v-card-text>
            <div class="mx-auto text-center">
              <Avatar :avatarImage="avatarImage" />
              <h3>{{ user.user_metadata.username }}</h3>
              <p class="text-caption mt-1">{{ user.email }}</p>
              <v-divider class="my-3" />
              <v-btn rounded text @click="profile">個人設定</v-btn>
              <v-divider class="my-3" />
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
  const authClient = useSupabaseAuthClient()
  const dbClient = useSupabaseClient()

  const loading = ref(false)

  const logout = async () => {
    loading.value = true
    await authClient.auth.signOut()
    loading.value = false
    await navigateTo('/login')
  }

  const profile = async () => {
    await navigateTo('/profile')
  }

  const fetchAvatarUrl = async () => {
    const { data } = await dbClient
    .from('profiles')
    .select('avatar_url')
    .eq('id', user.value.id)
    .single()
    return data.avatar_url
  }

  /** アバター画像ファイルの入れ物 */
  const avatarImage = reactive({
    url: null,
    file: null
  })

  onMounted(async () => {
    avatarImage.url = await fetchAvatarUrl()
  })
</script>
