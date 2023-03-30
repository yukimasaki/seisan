<template>
  <v-row justify="center">
    <v-col cols="12" md="6" xs="12">
      <v-card>
        <v-card-title>
          ログイン
        </v-card-title>
        <v-card-actions>
          <v-btn
            variant="elevated"
            elevation="1"
            color="primary"
            class="white-text"
            @click="login"
            :loading="loading"
          >
            Googleでログイン
          </v-btn>
        </v-card-actions>
        <v-card-text>
          <p><NuxtLink to="/register">ユーザー登録</NuxtLink></p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
  definePageMeta({ middleware: ['requires-guest'] })
  const loading = ref(false)
  const { googleSignIn } = useAuth()

  const login = async () => {
    loading.value = true
    await googleSignIn()
    loading.value = false
  }
</script>
