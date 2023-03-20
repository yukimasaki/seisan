const useUser = () => {
  /** CREATE */
  const createUser = async (values) => {
    const data = await $fetch('/api/user', {
      method: 'post',
      body: values,
    })
    await refreshNuxtData() // データのリフレッシュ
    return data // awaitしてるので何か返してあげる
  }

  /** READ */
  const readUser = async () => {
    const data = await $fetch('/api/user')
    await refreshNuxtData()
    return data
  }

  /** UPDATE */
  const updateUser = async (values) => {
    const data = await $fetch('/api/user', {
      method: 'put',
      body: values,
    })
    await refreshNuxtData()
    return data
  }

  /** DELETE */
  const deleteUser = async (values) => {
    const data = await $fetch('/api/user', {
      method: 'delete',
      body: values,
    })
    await refreshNuxtData()
    return data
  }

  return {
    createUser, readUser, updateUser, deleteUser
  }
}
export default useUser
