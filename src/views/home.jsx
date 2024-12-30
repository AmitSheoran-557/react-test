import React from 'react'
import Product from '../components/Product'
import Competition from '../components/Competition'
import Counter from '../components/Counter'
import AutoCounting from '../components/AutoCounting'

const home = () => {
  return (
    <div>
        <Product/>
        <Competition/>
        {/* <Counter/> */}
        {/* <AutoCounting/> */}
    </div>
  )
}

export default home