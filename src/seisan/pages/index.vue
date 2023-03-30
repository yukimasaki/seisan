<template>
  <div>
    <VCalendar
      expanded
      borderless
      :color="'primary-lighten-9'"
    />
    <v-divider />
    <v-table class="text-no-wrap">
      <tbody class="text-body-2">
        <tr v-for="itemRow in formattedData" :key="itemRow.id">
          <div class="pt-3">
            <td class="pb-1">{{ itemRow.title }}</td>
          </div>
          <div class="d-flex pb-3">
            <td class="pr-1"><v-chip density="compact">{{ itemRow.sharing_method }}</v-chip></td>
            <td class="pr-1">{{ itemRow.date, format }}</td>
            <td>{{ `${itemRow.amount.toLocaleString()}円` }}</td>
          </div>
          <v-divider />
        </tr>
      </tbody>
    </v-table>
    <v-btn
      icon="mdi-pencil"
      color="primary"
      style="position: fixed; bottom: 10px; right: 10px;"
      @click="onClickAdd"
    />

    <PaymentDialog ref="paymentDialog" />
  </div>
</template>

<script setup>
  definePageMeta({
    middleware: ['requires-auth']
  })

  const { readPaymentAll } = usePayment()
  const rawData = ref([])

  const fetchData = async () => {
    rawData.value = await readPaymentAll()
  }
  await fetchData()

  const { formatDate } = useFormatDate()
  const format = 'm/d(a)'

  const formattedData = computed(() => {
    return rawData.value.map(element => ({
      ...element,
      date: formatDate(new Date(element.date), format)
    }))
  })

  /** 子コンポーネントのメソッドを呼び出すために必要 */
  const paymentDialog = ref()

  const onClickAdd = () => {
    paymentDialog.value.open('add')
  }
</script>

<style>
  td:last-child {
    margin-left: auto;
  }
</style>
