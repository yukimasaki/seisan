<template>
  <div>
    <v-btn @click="onSubmit">作成</v-btn>
  </div>
</template>

<script setup>
  import {faker} from '@faker-js/faker'

  const { createUser } = useUser()

  const onSubmit = async () => {
    await createUser({
      uid: faker.datatype.uuid().substring(0, 16),
      display_name: 'ゆうき',
      created_at: faker.datatype.datetime(),
      updated_at: faker.datatype.datetime()
    })
  }
</script>
