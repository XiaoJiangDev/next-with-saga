import React, { useEffect } from 'react';
import styles from './index.module.css'
import { useSelector, useDispatch } from 'react-redux'

function Home() {
  const count = useSelector((state: any) => {
    console.log('state.count', state);
    return state.counter.count;
  })

  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch({ type: 'counter/increment' })
  }

  return (
    <main className={styles.main}>
      <div>{ count }</div>
      <div onClick={handleAdd}>add</div>
    </main>
  )
}

export default Home