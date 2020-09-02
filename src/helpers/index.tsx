export const getLocalStorageItem = (key: string) => {
  return window.localStorage.getItem(key)
}

export const setLocalStorageItem = (key: string, value: string) => {
  return window.localStorage.setItem(key, value)
}
