<template>
  <v-dialog
    v-model="show"
    scrollable
    persistent
    max-width="500px"
    eager
  >
    <v-card>
      <v-card-title>{{ titleText }}</v-card-title>
      <v-divider/>
      <v-card-text>
        <v-form ref="form" v-model="valid">
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
          @click="onClickAction"
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
  const actionType = ref('add')

  const titleText = computed(() => {
    return actionType.value === 'add' ? 'データ追加': 'データ編集'
  })
  const actionText = computed(() => {
    return actionType.value === 'add' ? '追加' : '更新'
  })

  const open = (type, item = {}) => {
    show.value = true
    actionType.value = type
    resetForm(item)
  }

  const resetForm = (item) => {
  }

  const onClickAction = () => {
  }

  const onClickClose = () => {
    show.value = false
  }

  /** 親からの呼び出しに必要 */
  defineExpose({ open })
</script>
