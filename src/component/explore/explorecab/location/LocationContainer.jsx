import React from 'react'
import locationimg from '../../../../assets/location/location.svg'
import './location.css'
export default function LocationContainer() {
  return (
   <div className="explore_sub_container2">
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

            </div>
   </div>
  )
}
