const useProfile = () => {
  /** CREATE */
  const createProfile = async (values) => {
    const data = await $fetch('/api/profiles', {
      method: 'post',
      body: values,
    })
    await refreshNuxtData() // データのリフレッシュ
    return data // awaitしてるので何か返してあげる
  }

  /** READ ALL */
  const readProfileAll = async () => {
    const data = await $fetch('/api/profiles')
    await refreshNuxtData()
    return data
  }

  /** READ ANY */
  const readProfileAny = async (values) => {
    const data = await $fetch(`/api/profiles/${values.targetId}`)
    await refreshNuxtData()
    return data
  }

  /** UPDATE */
  const updateProfile = async (values) => {
    const data = await $fetch('/api/profiles', {
      method: 'put',
      body: values,
    })
    await refreshNuxtData()
    return data
  }

  /** DELETE */
  const deleteProfile = async (values) => {
    const data = await $fetch('/api/profiles', {
      method: 'delete',
      body: values,
    })
    await refreshNuxtData()
    return data
  }

  return {
    createProfile, readProfileAll, readProfileAny, updateProfile, deleteProfile
  }
}
export default useProfile
