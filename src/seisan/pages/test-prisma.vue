<template>
  <div>
    <v-card>
      <v-card-text>
        <h3>CRUD</h3>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="onClickCreate">create</v-btn>
        <v-btn @click="onClickRead">read</v-btn>
        <v-btn @click="onClickUpdate">update</v-btn>
        <v-btn @click="onClickDelete">delete</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script setup>
  import {faker} from '@faker-js/faker'

  const { createProfile, readProfile, updateProfile, deleteProfile } = useProfile()

  const onClickCreate = async () => {
    await createProfile({
      uid: faker.datatype.uuid().substring(0, 16),
      display_name: 'Test Urofile',
      email: 'test@example.com',
      avatar_url: 'https://hogehoge.example.com/test.png'
    })
  }

  const onClickRead  = async () => {
    const data = await readProfile()
    console.log(data)
  }

  const onClickUpdate = async () => {
    await updateProfile({
      targetId: 3,
      data: {
        uid: faker.datatype.uuid().substring(0, 16),
        display_name: 'テスト ユーザー'
      }
    })
  }

  const onClickDelete = async () => {
    await deleteProfile({
      targetId: 3
    })
  }
</script>
