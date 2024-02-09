import React from 'react'
import Navbar from '../features/navbar/Navbar'
import AdminProductList from '../features/admin/component/AdminProductList'

const AdminHome = () => {
  return (
    <div className=''>
        <Navbar>
            <AdminProductList/>
        </Navbar>
    </div>
  )
}

export default AdminHome;