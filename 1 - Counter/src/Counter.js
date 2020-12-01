import React, { useState } from 'react'


function Counter() {
  let [ counter, setCounter ] = useState( 0 );

  let increment = () => { setCounter( ( prevCount ) => prevCount+1 ) }

  return(
    <div className="counter-Container">
      <textarea className="counter-Display" value={ counter } readOnly></textarea>
      <button className="counter-Button" onClick={ increment }>Count</button>
    </div>
  )
}

export default Counter