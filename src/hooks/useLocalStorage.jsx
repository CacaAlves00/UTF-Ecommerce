import React, { useEffect, useState } from 'react'

function useLocalStorage(key, initialValue) {
  const [storage, setStorage] = useState(() => {
    const jsonStorage = localStorage.getItem(key)
    if (jsonStorage != null) return JSON.parse(jsonStorage)

    if (typeof initialValue === 'function') {
      return initialValue()
    } else {
      return initialValue
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storage))
  }, [key, storage])

  return [storage, setStorage]
}

export default useLocalStorage
