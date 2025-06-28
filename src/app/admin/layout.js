import React from 'react'
import "./admin.css";
function layout({children}) {
  return (
    <div className='containerBg w-full h-screen'>{children}</div>
  )
}

export default layout