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
                >
                <v-img
                src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=300:*"
                cover
                style="position: relative;"
                >
                  <v-sheet
                    height="100%"
                    style="position: absolute;"
                  />
                </v-img>
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
</script>
