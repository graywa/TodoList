import React from 'react'

const Loader = () => {
  return <div style={{display: 'flex', justifyContent: 'center' }}>
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div></div>
}

export default Loader