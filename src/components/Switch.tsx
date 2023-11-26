import React, { useEffect, useState } from 'react'
import styles from '../styles/Swich.module.css'

const useDebounce = <T,>(value: T, delay?: number): T => {
  const [debounceValue, setDebounceValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebounceValue(value), delay || 500)
    return () => {
      clearTimeout(timer)
    }
  }, [delay, value])

  return debounceValue
}

const Switch = ({ toggled }: { toggled?: boolean }) => {
  const [internal, setInternal] = useState(toggled ?? false)
  const [checked, setChecked] = useState(internal)
  const debounceValue = useDebounce(internal, 30)

  const callback = () => {
    setChecked((prev) => !prev)
  }

  useEffect(() => {
    setChecked(debounceValue)
  }, [debounceValue])

  return (
    <label className={styles.switchLabel} aria-checked={checked}>
      <input type="checkbox" checked={checked} onChange={callback} />
      <span className={styles.switchSlider}></span>
    </label>
  )
}

export default Switch
