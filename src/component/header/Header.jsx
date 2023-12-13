import React from 'react'
import logo from '../../assets/headerlogo/logo.svg'
import middlelogo from '../../assets/headerlogo/middlelogo.svg'
import downloadlogo from '../../assets/headerlogo/downloadlogo.svg'
import accountlogo from '../../assets/headerlogo/accountlogo.svg'
import './header.css'


export default function Header() {
    return (
        
        <div className="head-container" >
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="middle-logo">
                <img src={middlelogo} alt="" />
                
            </div>
            <div className="account-section">
                
                    <img src={downloadlogo} alt="" />

            
               
                    <img src={accountlogo} alt="" />
            
            </div>
        </div>
    )
}
