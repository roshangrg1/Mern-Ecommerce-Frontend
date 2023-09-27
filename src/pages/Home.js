import React from 'react'
import Navbar from '../features/navbar/Navbar'
import ProductList from '../features/product/ProductList'

const Home = () => {
  return (
    <div className=''>
        <Navbar>
            <ProductList/>
        </Navbar>
    </div>
  )
}

export default Home