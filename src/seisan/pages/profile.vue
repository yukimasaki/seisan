<template>
  <v-row justify="center">
    <v-col cols="12" md="6" xs="12">
      <v-card>
        <div class="mt-auto text-center">
          <v-card-title>
            <h3>個人設定</h3>
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-avatar
                size="180"
                style="position: relative;"
                class="mb-3"
              >
                <v-icon v-if="!avatarImage.displayUrl" icon="mdi-account-circle" size="180" style="position: absolute;"/>
                <v-img v-else :src="avatarImage.displayUrl" cover style="position: absolute;" />
                <div class="avatar-footer" @click="changeAvatar">
                  <label>
                    <input type="file" @change="onChangeAvatarImage">変更
                  </label>
                </div>
              </v-avatar>
              <v-text-field
              v-model="username"
              label="表示名"
              />
            </v-form>
          </v-card-text>
        </div>
        <v-card-actions>
          <v-row justify="center">
            <v-btn
              variant="elevated"
              elevation="1"
              color="primary"
              class="white-text"
              @click="clearAvatarImage"
              :loading="loading"
            >
              キャンセル
            </v-btn>
            <v-btn
              variant="elevated"
              elevation="1"
              color="primary"
              class="white-text"
              @click="saveProfile"
              :loading="loading"
              :disabled="SaveButtonDisabled"
            >
              保存
            </v-btn>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
</script>

<style>
  .avatar-footer {
    position: absolute;
    display: table;
    bottom: 0;
    background-color: rgba(0,0,0,.4);
    min-width: 100%;
    min-height: 20%;
    cursor: pointer;
  }

  .avatar-footer label {
    display: table-cell;
    vertical-align: middle;
    color: white;
    padding-bottom: 0.25rem;
  }

  input[type="file"] {
    display: none;
  }
</style>
