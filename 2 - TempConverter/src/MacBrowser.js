import React from 'react'

function MacBrowser( { children, title } ) {
  return(
    <div className="browserWindow">
      <div className="browserBar">
        <div className="browserActions">
          <div className="close actionButton boxShadow"> </div>
          <div className="minimize actionButton boxShadow"> </div>
          <div className="maximize actionButton boxShadow"> </div> 
        </div>
        <h1 className="browserTitle textShadow">{title}</h1>
      </div>
      <div className="browserContent">
        { children }
      </div>
    </div>
  )
}

export default MacBrowser