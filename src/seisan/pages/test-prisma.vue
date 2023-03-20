<template>
  <div>
    <v-btn @click="create">create</v-btn>
    <v-btn @click="read">read</v-btn>
  </div>
</template>

<script setup>
  import {faker} from '@faker-js/faker'

  const { createUser, readUser } = useUser()

  const create = async () => {
    await createUser({
      uid: faker.datatype.uuid().substring(0, 16),
      display_name: 'ゆうき',
      created_at: faker.datatype.datetime(),
      updated_at: faker.datatype.datetime()
    })
  }

  const read  = async () => {
    const data = await readUser()
    console.log(data)
  }
</script>
