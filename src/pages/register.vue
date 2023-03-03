<template>
  <v-col col="12" sm="12" md="4">
    <v-card>
      <v-card-title>登録</v-card-title>
      <v-form>
        <v-text-field
          label="姓"
          v-model="credentials.surname"
        />
        <v-text-field
          label="名"
          v-model="credentials.firstName"
        />
        <v-text-field
          label="メールアドレス"
          v-model="credentials.email"
        />
        <v-text-field
          label="パスワード"
          v-model="credentials.password"
          type="password"
        />
        <v-text-field
          label="パスワード(確認)"
          v-model="credentials.passwordRepeat"
          type="password"
        />
      </v-form>
      <v-card-actions>
        <v-btn @click="register">ログイン</v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
  setup () {
    const credentials = reactive({
      firstName: '',
      surname: '',
      email: '',
      password: '',
      passwordRepeat: '',
    });

    const register = async () => {
      const client = useSupabaseAuthClient();

      const { firstName, surname, email, password, passwordRepeat } = credentials;
      if (password !== passwordRepeat) return;
      const { error } = await client.auth.signUp({
          email,
          password,
          options: {
          data: {
              first_name: firstName,
              surname,
              email,
          },
          emailRedirectTo: 'http://localhost:3000/login',
          },
      });
      if (error) {
          alert('Something went wrong !');
          return;
      }
      alert('Open the email we sent you to verify your account!');
    }

    return {
      credentials, register
    }
  }
})
</script>
