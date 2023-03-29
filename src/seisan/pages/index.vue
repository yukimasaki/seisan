<template>
  <div>
    <VCalendar
      expanded
      borderless
      :color="'primary-lighten-9'"
    />
    <v-divider class="mb-3" />
    <v-table class="text-no-wrap">
      <thead>
        <tr>
          <th v-for="itemHeader in tableHeader" :key="itemHeader.key">{{ itemHeader.title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="itemRow in tableData" :key="itemRow.id">
          <td v-for="itemData in itemRow">{{ itemData }}</td>
        </tr>
      </tbody>
    </v-table>
    <v-btn
      icon="mdi-pencil"
      color="primary"
      rounded
      style="position: fixed; bottom: 10px; right: 10px;"
    />
  </div>
</template>

<script setup>
  definePageMeta({
    middleware: ['requires-auth']
  })

  const tableHeader = [
    { title: 'ID', align: 'end', key: 'id' },
    { title: 'タイトル', align: 'end', key: 'title' },
    { title: '総額', align: 'end', key: 'total_expence' },
    { title: '登録者', align: 'end', key: 'creator' },
    { title: '負担方法', align: 'end', key: 'sharing_method' },
    { title: 'ステータス', align: 'end', key: 'status' },
    { title: '支出日', align: 'end', key: 'billing_date' },
  ]
  const tableData = [
    { id: '1', title: '挨拶の品', total_expence: '3000', creator: 'ゆうき', sharing_method: '均等', status: '未', billing_date: '2023/03/14' },
    { id: '2', title: '電気代', total_expence: '21700', creator: 'ゆうき', sharing_method: '均等', status: '未', billing_date: '2023/03/17' },
  ]
</script>
