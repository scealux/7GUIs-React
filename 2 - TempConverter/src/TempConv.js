import React, { useState } from 'react'


function Counter() {
  let [ temp, setTemp ] = useState( { f: 32, c: 0 } );

  const updateTemps = ( newValue, changed ) => {
    if ( !isNaN( newValue ) ){
      let other = {f:"c", c:"f"};
      let update = {
        f: ((newValue-32)*(5/9)).toPrecision(3), 
        c: ((newValue*9/5)+32).toPrecision(3)
      }
      setTemp( {[changed]: newValue,  [other[changed]]: update[changed]} )
    } else { setTemp( { ...temp, [changed]:newValue } ) }
  }

  return(
    <div className="counter-Container">
      <textarea id="celsiusInput"
                className={ `number-Display ${ isNaN(temp.c) ? "number-Display-Error": "" }`}
                value={ temp.c }
                onChange={ e => updateTemps(e.target.value, "c")}
                placeholder="0"
      ></textarea>
        <label htmlFor="celsiusInput"> Celsius </label>
      
      <span>&nbsp;=&nbsp;</span>
      
      <textarea id="fahrenheitInput"
                className={ `number-Display ${ isNaN(temp.f) ? "number-Display-Error" : "" }` }
                value= { temp.f }
                onChange={ e => updateTemps(e.target.value, "f")}
                placeholder="0"
      ></textarea>
        <label htmlFor="fahrenheitInput"> Fahrenheit </label>
    </div>
  )
}

export default Counter