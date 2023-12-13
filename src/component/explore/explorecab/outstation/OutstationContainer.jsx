import React from 'react'
import './style.css'
import locationimg from '../../../../assets/location/location.svg'
export default function OutstationContainer() {
    
    return (
        <div className="explore_sub_container1">
            <div className="container1_input">
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
                     <p>Pick  Up Date</p>
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
