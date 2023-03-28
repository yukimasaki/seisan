<template>
  <v-row justify="center">
    <v-col cols="12" md="6" xs="12">
      <v-card>
        <v-card-title>
          ユーザー登録
        </v-card-title>
        <v-card-actions>
          <v-btn
            variant="elevated"
            elevation="1"
            color="primary"
            class="white-text"
            @click="register"
            :loading="loading"
          >
            Googleで登録
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
  definePageMeta({ middleware: ['requires-guest'] })
  const loading = ref(false)

  const register = async () => {
    loading.value = true
    const { googleSignUp } = useAuth()
    await googleSignUp()
    loading.value = false
  }
</script>
