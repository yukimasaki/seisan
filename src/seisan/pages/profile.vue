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
  import { uuid } from '@supabase/gotrue-js/dist/module/lib/helpers';

  definePageMeta({
    middleware: 'require-auth'
  })

  const user = useSupabaseUser()
  const dbClient = useSupabaseClient()

  const username = ref('')
  const loading = ref(false)

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
    displayUrl: null,
    copiedUrl: null,
    file: null
  })

  onMounted(async () => {
    avatarImage.displayUrl = await fetchAvatarUrl()

    /** profilesテーブルに保存する処理は正常に動作しているが、
     *  取得がうまくできてない（どこかから変更前のデータを取得している？）
     */
    console.log(user.value)
    username.value = user.value.user_metadata.username
  })

  const onChangeAvatarImage = (e) => {
    if (!e.target.files || e.target.files.length == 0) {
      /** 画像が選択されていないのでreturn */
      return
    }

    /** 選択された画像を取得 */
    avatarImage.file = e.target.files[0]
    avatarImage.copiedUrl = avatarImage.displayUrl
    avatarImage.displayUrl = URL.createObjectURL(avatarImage.file)
  }

  const clearAvatarImage = () => {
    if (avatarImage.copiedUrl) {
      avatarImage.displayUrl = avatarImage.copiedUrl
      avatarImage.copiedUrl = null
    }
  }

  const uploadAvatarImage = async () => {
    try {
      const fileName = uuid().substring(24,36)

      const { error } = await dbClient
        .storage
        .from('avatars')
        .upload(fileName, avatarImage.file, {
          cacheControl: '3600',
          upsert: false
        })
      if (error) throw error
      /** 公開URLを取得 */
      const { data } = await dbClient
        .storage
        .from('avatars')
        .getPublicUrl(fileName)
      return data.publicUrl
    } catch (error) {
      /** TODO: v-snackbarでメッセージを表示させる */
      console.log(error)
    }
  }

  const updateAvatarImage = async (publicUrl) => {
    try {
      const { error } = await dbClient
      .from('profiles')
      .update({ avatar_url: publicUrl})
      .eq('id', user.value.id)
    } catch (error) {
      /** TODO: v-snackbarでメッセージを表示させる */
      console.log(error)
    }
  }

  const updateUserName = async (username) => {
    try {
      const { error } = await dbClient
      .from('profiles')
      .update({ username: username})
      .eq('id', user.value.id)
    } catch (error) {
      /** TODO: v-snackbarでメッセージを表示させる */
      console.log(error)
    }
  }

  const saveProfile = async () => {
    loading.value = true

    if (avatarImage.copiedUrl) {
      const publicUrl = await uploadAvatarImage()
      await updateAvatarImage(publicUrl)
    }

    if (username.value != user.value.user_metadata.username) {
      await updateUserName(username.value)
    }

    loading.value = false
  }

  const SaveButtonDisabled = computed(() => {
    const rules = [
      avatarImage.copiedUrl == null ? true : false,
      username.value == user.value.user_metadata.username ? true : false
    ]
    return rules.every(v => v == true)
  })

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
