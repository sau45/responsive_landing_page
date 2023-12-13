import React, { useState } from 'react'
import './explorecabcontainer.css'
import OutstationContainer from './outstation/OutstationContainer';
import AirportContainer from './airport/AirportContainer';
import LocationContainer from './location/LocationContainer';
import RoundTrip from './Roundtrip/RoundTrip'

export default function ExplorecabContainer() {
  const [defaultinput, setDefaultInput] = useState("outstation");
  const setoutstation = () => {
    setDefaultInput("outstation");
  }

  const setlocation = () => {
    setDefaultInput("location");
  }
  const setairport = () => {
    setDefaultInput("airport");
  }
  const setroundtrip=()=>{
    setDefaultInput("roundtrip")
  }

  return (
    <div className="main-container">

      <div className="main_wrapper">
        <div className="button-container">
          <div className="three_button">
            <button className='outstation' onClick={setoutstation}>Outstation</button>
            <button className='location' onClick={setlocation}>Location</button>
            <button className='airport' onClick={setairport}>Airport</button>
          </div>
          <div className="two_button">
            <button onClick={setoutstation}>One Way</button>
            <button onClick={setroundtrip}>Round Trip</button>
          </div>


        </div>
        {(() => {
          switch (defaultinput) {
            case "outstation" || "oneway": return <OutstationContainer />;
            case "location": return <LocationContainer />;
            case "airport": return <AirportContainer />;
            case "roundtrip" :return <RoundTrip/>
            default: return null;
          }
        })()}

        <button className='explore-cab-button'>Explore Cabs</button>

      </div>


    </div>
  )
}

