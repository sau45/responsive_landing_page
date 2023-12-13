import React from 'react'
import choose from '../../assets/whytochoose/choose.svg'
import easyorder from '../../assets/whytochoose/easyorder.svg'
import fastres from '../../assets/whytochoose/fastres.svg'
import greattraffis from '../../assets/whytochoose/greattraffis.svg'
import vastfleet from '../../assets/whytochoose/vastfleet.svg'


import './whychooseus.css'
function WhytoChoose() {
    return (
        <div className='whyChoose_wrapper'>
            <div className='whyChoose_container'>
                <div>
                <img className='whychoose_img' src={choose}></img>
                </div>
                <div className='whyChoose_child'>
                    <h1 style={{textAlign:"center"}}>WHY CHOOSE YATRI CARE RENTAL?</h1>
                    <div className='whychoose_child_cont'>
                        <div className='child_class'>
                         
                            <img src={fastres}></img>
                            
                            <p> <span style={{ color: "#38B000" , fontSize:"22px"}}>Fast response time</span>Fast response time
                                Avail Best Car Rental Service in Lucknow with driver for Local or Outstation within the moment of your call for best car hire experience.</p>
                        </div>
                        <div  className='child_class'>
                            <img src={greattraffis}></img>
                            <p> <span style={{ color: "#38B000" , fontSize:"22px"}}>Vast fleet</span>Vast fleet
                                We have all kinds of Car on Rent available like Sedan, Suv, Muv, Premium Sedan, Tampo Traveller etc as per ur requirement</p>
                        </div>
                        <div  className='child_class'>
                            <img src={easyorder}></img>
                            <p> <span style={{ color: "#38B000" , fontSize:"22px"}}>Easy to order</span>Easy to order
                                Easily Book Cab Online with our website or call our customer support team</p>
                        </div>
                        <div  className='child_class'>
                            <img src={vastfleet}></img>
                            <p> <span style={{color: "#38B000" , fontSize:"22px"}}>GREAT TRAIFFS</span>Great tariffs
                                Rent A Car !Our car hire tariff are very low when compare to other operators in Lucknow. Book online cabs with best prices in Lucknow at Yatri Car Rental </p>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default WhytoChoose




