'use client'

import { useSelector, useDispatch } from 'react-redux'
import styles from './page.module.css'

export default function Home() {
  const { count, load } = useSelector((state: any) => ({
    count: state.counter.count,
    load: state.counter.load,
  }))

  const dispatch = useDispatch();

  const handleAdd = () => {
    console.log('onclick')
    dispatch({ type: 'counter/increment' })
  }
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <div className={styles.count}>{count}</div>
        <button className={styles.btn} onClick={handleAdd}>{ load ? 'waiting...' : 'Add' }</button>
      </div>
    </main>
  )
}
