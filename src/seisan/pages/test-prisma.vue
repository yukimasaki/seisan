<template>
  <div>
    <v-card class="mb-1">
      <v-card-text>
        <h3>CRUD</h3>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="onClickCreate">post</v-btn>
        <v-btn @click="onClickReadAll">get all</v-btn>
        <v-btn @click="onClickReadAny">get any</v-btn>
        <v-btn @click="onClickUpdate">put</v-btn>
        <v-btn @click="onClickDelete">delete</v-btn>
      </v-card-actions>
    </v-card>
    <v-card>
      <v-card-text>
        <h3>Payment</h3>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="paymentCreate">post</v-btn>
        <v-btn @click="paymentReadAll">get all</v-btn>
        <v-btn @click="paymentReadAny">get any</v-btn>
        <v-btn @click="paymentUpdate">put</v-btn>
        <v-btn @click="paymentDelete">delete</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script setup>
  import {faker} from '@faker-js/faker'

  const { createProfile, readProfileAll, readProfileAny, updateProfile, deleteProfile } = useProfile()
  const onClickCreate = async () => {
    await createProfile({
      uid: faker.datatype.uuid().substring(0, 16),
      display_name: 'Test Profile',
      email: 'test@example.com',
      avatar_url: 'https://hogehoge.example.com/test.png'
    })
  }
  const onClickReadAll  = async () => {
    const data = await readProfileAll()
    console.log(data)
  }
  const onClickReadAny  = async () => {
    const data = await readProfileAny({
      targetId: 'gIJwfkdneIVvl5Vn0SENgSebOeX2'
    })
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

  const { createPayment, readPaymentAll, readPaymentAny, updatePayment, deletePayment } = usePayment()
  const paymentCreate = async () => {
    await createPayment({
      creator: {
        connect: {
          uid: 'gIJwfkdneIVvl5Vn0SENgSebOeX2'
        }
      },
      title: '○○代',
      amount: 4500,
      sharing_method: '比率',
      status: '未',
      date: new Date(),
    })
  }
  const paymentReadAll = async () => {
    const data = await readPaymentAll()
    console.log(data)
  }
  const paymentReadAny = async () => {}
  const paymentUpdate = async () => {}
  const paymentDelete = async () => {}
</script>
