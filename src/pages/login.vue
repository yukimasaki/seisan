<template>
    <v-col col="12" sm="12" md="4">
      <v-card>
        <v-card-title>ログイン</v-card-title>
        <v-form>
          <v-text-field
            label="メールアドレス"
            v-model="credentials.email"
          />
          <v-text-field
            label="パスワード"
            v-model="credentials.password"
            type="password"
          />
        </v-form>
        <v-card-actions>
          <v-btn @click="login">ログイン</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent ({
    setup () {
      const credentials = reactive({
        email: '',
        password: '',
      });
  
      const client = useSupabaseAuthClient();
      const router = useRouter();
      const user = useSupabaseUser();
      
      const login = async () => {
        const { email, password } = credentials;
        const { error } = await client.auth.signInWithPassword({ email, password });
        if (!error) return router.push('/');
        console.log(error);
      }
  
      watchEffect(async () => {
        if (user.value) {
          await router.push('/');
        }
      });
  
      return {
        credentials, login
      }
    }
  })
  </script>