const usePayment = () => {
  /** CREATE */
  const createPayment = async (values) => {
    const data = await $fetch('/api/payments', {
      method: 'post',
      body: values,
    })
    await refreshNuxtData()
    return data
  }

  /** READ ALL */
  const readPaymentAll = async () => {
    const data = await $fetch('/api/payments')
    await refreshNuxtData()
    return data
  }

  /** READ ANY */
  const readPaymentAny = async (values) => {
    const data = await $fetch(`/api/payments/${values.targetId}`)
    await refreshNuxtData()
    return data
  }

  /** UPDATE */
  const updatePayment = async (values) => {
    const data = await $fetch('/api/payments', {
      method: 'put',
      body: values,
    })
    await refreshNuxtData()
    return data
  }

  /** DELETE */
  const deletePayment = async (values) => {
    const data = await $fetch('/api/payments', {
      method: 'delete',
      body: values,
    })
    await refreshNuxtData()
    return data
  }

  return {
    createPayment, readPaymentAll, readPaymentAny, updatePayment, deletePayment
  }
}
export default usePayment
