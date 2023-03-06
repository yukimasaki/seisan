<template>
  <v-row justify="center">
    <v-col cols="12" sm="12" md="4">
      <v-card>
        <v-card-title class="justify-center" mb-3>
          <h1 class="display-1">ログイン</h1>
        </v-card-title>

        <v-card-text>
          <v-form>
            <v-text-field
              label="メールアドレス"
              v-model="credentials.email"
            />
            <v-text-field
              label="パスワード"
              v-model="credentials.password"
            />
            <v-text-field
              label="パスワード"
              v-model="credentials.passwordRepeat"
            />
          </v-form>
        </v-card-text>

        <v-card-actions class="justify-center">
          <v-btn @click="register">登録</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
  setup () {
    const client = useSupabaseClient();
    return {}
  }
})

</script>
