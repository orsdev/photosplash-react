import React from 'react'

const Layout = (props) => {

  return (
    <div className='layoutContainer'>
      {props.children}
    </div>
  )
};

export default Layout;