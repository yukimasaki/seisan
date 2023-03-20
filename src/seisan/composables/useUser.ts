const useUser = () => {
  const createUser = async (values) => {
    const data = await $fetch('/api/user', {
      method: 'post',
      body: values,
    })
    await refreshNuxtData() // データのリフレッシュ
    return data // awaitしてるので何か返してあげる
  }
  return {
    createUser
  }
}
export default useUser
