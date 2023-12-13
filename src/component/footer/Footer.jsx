import React from 'react'
import footerlogo from '../../assets/footer/footerlogo.svg'
import inputlogo from '../../assets/footer/inputarrow.svg'
import arrowimg from '../../assets/footer/arrowimg.svg'
import './footer.css'
function Footer() {
    return (
        <div className='footer_wrapper'>
            <div className='footer_img_list'>
                <img src={footerlogo} alt="" />
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>News</li>
                    <li>Contact</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='newsletter_input'>
                <p>Newletter</p>
                <div className='input_field'>
                    <input type="text" />
                    <div className="input_img">
                    <img src={inputlogo} style={{minHeight:"52px",paddingTop:"0.5rem"}}alt="" />
                    <img src={arrowimg} style={{position:"absolute"}} alt="" />
                    </div>
                </div>

            </div>
            <p>All Copyrights are reserved by RIDE EVEE</p>
        </div>
    )
}

export default Footer
