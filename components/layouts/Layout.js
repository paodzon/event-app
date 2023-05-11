import React from 'react'
import MainHeader from './MainHeader'

function Layout(props) {
  return (
    <>
      <MainHeader />
      {props.children}
    </>
  )
}

export default Layout