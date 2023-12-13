import React from 'react'
import locationimg from '../../../../assets/location/location.svg'
import './airport.css'
export default function AirportContainer() {
  return (
    <div className="explore_sub_container3">
      <div className="container1_input">
                <div className="from_input">
                    <h6>From</h6>
                    <input type="text" placeholder='Start typing city' />
                    <img src={locationimg} alt="" />
                </div>
              
                <div className="pick_date_input">
                    <h6>Pick  Up Date</h6>
                    <input type="text" placeholder='Start typing date' />
                </div>

                <div className="pick_up_input">
                    <h6>Pick Up At</h6>
                    <input type="text" placeholder='Start typing time' />
                </div>
                <div className="pick_up_input">
                    <h6>Trip type</h6>
                    <input type="text" placeholder='Start typing trip type' />
                </div>

            </div>
   </div>
  )
}
