import React from 'react'
import './details.css'
import carimg from '../../assets/detail/detailcar.svg'
import carlogo from '../../assets/detail/carlogo1.svg'
import carlogo2 from '../../assets/detail/carlogo2.svg'
import house from '../../assets/detail/house.svg'


function Details() {
    const pageStyle = {
        backgroundImage: `url(${house})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
       

    };
  return (
    <div className='details_wrapper'>
        <div className='details_container'>
            <div className='details_child'>
            <img src={carimg}></img>
            </div>
            
            <div className='details_child'>
                <img src={carlogo} style={{padding:"2rem"}} alt="" />
                <p style={{color:"#38B000",textAlign:"center"}}>Return Fare, Not Fair!</p>
                <p>Why Pay for Return Journey when you are travelling one-way? Now get discounted AC Taxi at just half of the round trip cost for your one-way travel.</p>
            </div>
            <div className='details_child'>
                <img src={carlogo2} alt="" />
                <p style={{color:"#38B000", textAlign:"center"}}>Now available routes are!</p>
                <p>Now available routes are!
Lucknow | Gorakhpur | Varanasi | Allahabad | Bareilly</p>
            </div>
        </div>
        <div className='details_container2' style={pageStyle}>
            <div className='cont2_child'>
            <h1>Why choose AC Bus or AC Train for your One-way Journey?</h1>
            <p>Our oneway cab service is cheaper than AC bus and 2 tier AC train ticket fares, it reduces your travel time and you travel at your own private space also to enjoy your journey. Our one way taxi will come at your doorstep and take you to your desired destination. So book you oneway cab from Lucknow to Gorakhpur or Varanasi to Bareilly.</p>
            <p>read More....</p>
            </div>
        </div>
      
    </div>
  )
}

export default Details
