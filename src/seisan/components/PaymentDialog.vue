<template>
  <v-dialog
    v-model="show"
    scrollable
    persistent
    fullscreen
    eager
  >
    <v-card>
      <v-card-title>{{ titleText }}</v-card-title>
      <v-divider/>
      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-text-field
            v-model="formItems.title"
            label="タイトル"
            density="compact"
          />

          <v-text-field
            v-model="formItems.amount"
            label="金額"
            density="compact"
            suffix="円"
          />

          <v-select
            v-model="formItems.sharing_method"
            label="負担方法"
            :items="selectableItems"
          />

          <VDatePicker v-model="formItems.date">
            <template #default="{ inputValue, inputEvents }">
              <v-text-field
                :model-value="formItems.date"
                label="日付"
                :value="inputValue"
                v-on="inputEvents"
              />
            </template>
          </VDatePicker>
        </v-form>
      </v-card-text>
      <v-divider/>
      <v-card-actions>
        <v-spacer/>
        <v-btn
          color="grey darken-1"
          text
          @click="onClickClose"
        >
          キャンセル
        </v-btn>
        <v-btn
          color="primary"
          text
          :disabled="!valid"
          :loading="loading"
          @click="onClickAction(formItems)"
        >
          {{ actionText }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
const show = ref(false)
const valid = ref(false)
const loading = ref(false)
const actionType = ref('add')
const formItems = reactive({
  title: '',
  amount: '',
  sharing_method: '',
  date: '',
})
  const selectableItems = reactive(['比率', '均等'])

  const titleText = computed(() => {
    return actionType.value === 'add' ? 'データ追加': 'データ編集'
  })
  const actionText = computed(() => {
    return actionType.value === 'add' ? '追加' : '更新'
  })

  const open = (type, formItems = {}) => {
    show.value = true
    actionType.value = type
    resetForm(formItems)
  }
  /** 親からの呼び出しに必要 */
  defineExpose({ open })

  const resetForm = (formItems) => {
  }

  /** 親メソッドの呼び出しに必要 */
  const emit = defineEmits(['fetchData'])

  const onClickAction = async (formItems) => {
    loading.value = true
    const storeProfile = useStoreProfile()
    const { createPayment } = usePayment()
    await createPayment({
      creator: {
        connect: {
          uid: storeProfile.profile.uid
        }
      },
      title: formItems.title,
      amount: parseInt(formItems.amount),
      sharing_method: formItems.sharing_method,
      status: '未',
      date: formItems.date,
    })

    await emit('fetchData')
    loading.value = false
    show.value = false
  }

  const onClickClose = () => {
    show.value = false
  }

</script>
