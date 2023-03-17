<template>
  <v-row justify="center">
    <v-col cols="12" md="6" xs="12">
      <v-card>
        <v-card-title>
          プロフィール
        </v-card-title>
        <v-card-text>
          <v-form>
            <div class="mt-auto mb-3 text-center">
              <v-avatar
                size="180"
                style="position: relative;"
                >
                <v-img
                  src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=300:*"
                  cover
                  style="position: absolute;"
                  >
                </v-img>
                <div class="avatar-footer" @click="changeAvatar">
                  <p>変更</p>
                </div>
              </v-avatar>
            </div>

            <v-text-field
              label="表示名"
            />
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
  definePageMeta({
    middleware: 'require-auth'
  })


  /** DB接続テスト中 */
  const changeAvatar = async () => {
    const user = useSupabaseUser()
    const dbClient = useSupabaseClient()

    const { data } = await dbClient
      .from('profiles')
      .select('avatar_url')
      .eq('id', user.value.id)
      .single()

    console.log(data)
  }

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

.avatar-footer p {
  display: table-cell;
  vertical-align: middle;
  color: white;
  padding-bottom: 0.25rem;
}
</style>
