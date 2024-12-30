import React from 'react'
import Product from '../components/Product'
import Competition from '../components/Competition'
import Counter from '../components/Counter'
import AutoCounting from '../components/AutoCounting'
import LoopCounting from '../components/LoopCounting'

const home = () => {
  return (
    <div>
        <Product/>
        <Counter/>
        <AutoCounting/>
        <LoopCounting/>
    </div>
  )
}

export default home