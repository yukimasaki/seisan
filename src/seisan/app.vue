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
</script>
