'use client'
import { Layout } from 'antd'

const AdminFooter = () => {
  const { Footer } = Layout

  return (
    <>
      <Footer style={{ textAlign: 'center' }}>Tung Nguyen ©{new Date().getFullYear()} Created by @tndgoat</Footer>
    </>
  )
}

export default AdminFooter
