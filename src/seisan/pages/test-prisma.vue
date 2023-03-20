<template>
  <div>
    <v-btn @click="onClickCreate">create</v-btn>
    <v-btn @click="onClickRead">read</v-btn>
    <v-btn @click="onClickUpdate">update</v-btn>
    <v-btn @click="onClickDelete">delete</v-btn>
  </div>
</template>

<script setup>
  import {faker} from '@faker-js/faker'

  const { createUser, readUser, updateUser, deleteUser } = useUser()

  const onClickCreate = async () => {
    await createUser({
      uid: faker.datatype.uuid().substring(0, 16),
      display_name: 'Test User'
    })
  }

  const onClickRead  = async () => {
    const data = await readUser()
    console.log(data)
  }

  const onClickUpdate = async () => {
    await updateUser({
      targetId: 3,
      data: {
        uid: faker.datatype.uuid().substring(0, 16),
        display_name: 'テスト ユーザー'
      }
    })
  }

  const onClickDelete = async () => {
    await deleteUser({
      targetId: 3
    })
  }
</script>
