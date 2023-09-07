import React, { useEffect } from 'react';
import Image from 'next/image'
import styles from './index.module.css'
import { wrapper } from '@/models/store'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '@/models/app/actions'
// import { watchFetchPost } from '@/models/app/saga'

function Home() {
  const count = useSelector((state: any) => state.count)

  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch({ type: 'watchIncrement' })
  }

  return (
    <main className={styles.main}>
      <div>{ count }</div>
      <div onClick={handleAdd}>add</div>
    </main>
  )
}

export default Home