<template>
  <div>
    <v-btn @click="create">create</v-btn>
    <v-btn @click="read">read</v-btn>
    <v-btn @click="update">update</v-btn>
  </div>
</template>

<script setup>
  import {faker} from '@faker-js/faker'

  const { createUser, readUser, updateUser } = useUser()

  const create = async () => {
    await createUser({
      uid: faker.datatype.uuid().substring(0, 16),
      display_name: 'yuki'
    })
  }

  const read  = async () => {
    const data = await readUser()
    console.log(data)
  }

  const update = async () => {
    await updateUser({
      targetId: 1,
      data: {
        uid: faker.datatype.uuid().substring(0, 16),
        display_name: 'ユウキ'
      }
    })
  }
</script>
