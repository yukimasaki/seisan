const useProfile = () => {
  /** CREATE */
  const createProfile = async (values) => {
    const data = await $fetch('/api/profile', {
      method: 'post',
      body: values,
    })
    await refreshNuxtData() // データのリフレッシュ
    return data // awaitしてるので何か返してあげる
  }

  /** READ */
  const readProfile = async () => {
    const data = await $fetch('/api/profile')
    await refreshNuxtData()
    return data
  }

  /** UPDATE */
  const updateProfile = async (values) => {
    const data = await $fetch('/api/profile', {
      method: 'put',
      body: values,
    })
    await refreshNuxtData()
    return data
  }

  /** DELETE */
  const deleteProfile = async (values) => {
    const data = await $fetch('/api/profile', {
      method: 'delete',
      body: values,
    })
    await refreshNuxtData()
    return data
  }

  return {
    createProfile, readProfile, updateProfile, deleteProfile
  }
}
export default useProfile
