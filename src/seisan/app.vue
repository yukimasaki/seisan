<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>
        {{ storeSettings.appName }}
      </v-toolbar-title>
      <v-menu
        v-if="storeProfile.profile"
        transition="scroll-x-reverse-transition"
        min-width="200px"
        rounded
      >
        <template v-slot:activator="{ props }">
          <v-btn
            text
            v-bind="props"
          >
            <Avatar class="mr-2" />
            <p>{{ storeProfile.profile.displayName }}</p>
          </v-btn>
        </template>
        <v-card>
          <v-card-text>
            <div class="mx-auto text-center">
              <Avatar />
              <h3>{{ storeProfile.profile.displayName }}</h3>
              <p class="text-caption mt-1">{{ storeProfile.profile.email }}</p>
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
  const storeProfile = useStoreProfile()
  const { googleSignOut } = useAuth()

  const loading = ref(false)

  const profile = () => {
    /** TODO: /profileへ遷移する処理を書く */
    console.log(`/profileへ遷移する`)
  }

  const logout = async () => {
    loading.value = true
    await googleSignOut()
    loading.value = false
  }
</script>
