import React, { useState, useRef } from 'react'

function FlightBooker() {
  let dateToday = new Date()
  let [ flightType, setFlightType ] = useState( "one-way" );
  let [ tripDate, setTripDate ] = useState( "" );
  let [ returnDate, setReturnDate ] = useState( "" );
  let containerRef = useRef(null)

  let bookStatus = () => {
    //If the departure date and return dates are both empty
    if ( flightType === "round-trip" && !tripDate && !returnDate ) return "no-dates"
    //If the departure date is empty...
    if ( !tripDate ) return "no-depart"
    //If the departure date is earlier than today...
    if ( Date.parse( tripDate ) < Date.parse( dateToday ) ) return "no-depart" //No tickets same-day...
    //If it's a return trip but the return flight is empty...
    if (flightType === "round-trip" && !returnDate ) return "no-return"
    //If the return date is earlier than the departure date
    if (( flightType === "round-trip" ) && ( Date.parse( returnDate ) < Date.parse( tripDate ) )) return "no-return"
    
    return "ready";
  }

  return(
    <div className="container" ref={containerRef}>
      <form onSubmit={ e => e.preventDefault() }>
        <select name="flight-type"
                className="flight-type-selector"
                value={flightType}
                onChange={ e => setFlightType( e.target.value )}
        >
          <option value="one-way">One-Way Flight</option>
          <option value="round-trip">Round-Trip Flight</option>
        </select>
      </form>
      <input  id="outbound"
              type="date"
              className={`date-selector ${(bookStatus() === "no-depart" || bookStatus() === "no-dates") ? "date-selector-error" : "" }`}
              value={ tripDate }
              onChange={ e => setTripDate( e.target.value ) }
              placeholder="0"
      ></input>
      <input  id="inbound"
              type="date"
              style={ {display: (flightType === "one-way") ? "none" : "block"} }
              className={`date-selector ${(bookStatus() === "no-return" || bookStatus() === "no-dates") ? "date-selector-error" : "" }`}
              value= { returnDate }
              onChange={ e => setReturnDate( e.target.value ) }
              placeholder="0"
              disabled={(flightType === "one-way")}
      ></input>
      <button   onClick={() => { containerRef.current.innerText= `${flightType.charAt(0).toUpperCase() + flightType.slice(1)} flight booked for ${tripDate}${(returnDate) ? ` to ${returnDate}.` : "."}`} }
                disabled={ !(bookStatus() === "ready") }
      >Book</button> 
        
    </div>
  )
}

export default FlightBooker