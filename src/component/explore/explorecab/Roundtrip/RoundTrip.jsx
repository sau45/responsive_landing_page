import React from 'react'
import './roundtrip.css'
import locationimg from '../../../../assets/location/location.svg'
function RoundTrip() {
  return (
    <div className="round_trip">
    <div className="roundtrip_input">
        <div className="from_input">
            <p>From</p>
            <input type="text" placeholder='Start typing city' />
            <img src={locationimg} alt="" />
        </div>
        <div className="to_input">
            <p>To</p>
            <input type="text" placeholder='Start typing city'/>
            <img src={locationimg} alt="" />
        </div>
        <div className="pick_date_input">
             <p>Pick  Up Datep</p>
            <input type="text" placeholder='Start typing date' />
        </div>
        <div className="return_date">
             <p>Return Date</p>
            <input type="text" placeholder='Start typing date' />
        </div>

        <div className="pick_up_input">
            <p>Pick Up At</p>
            <input type="text" placeholder='Start typing time' />
        </div>

    </div>

</div>
  )
}

export default RoundTrip
