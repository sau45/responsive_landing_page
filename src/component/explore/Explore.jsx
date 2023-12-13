import React from 'react'
import backgroundimg from '../../assets/explore/backgroundimg.svg'
import './explore.css'
import ExplorecabContainer from './explorecab/ExplorecabContainer';


export default function Explore() {
    const pageStyle = {
        backgroundImage: `url(${backgroundimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        // height: '550px'

    };
    return (
            <div style={pageStyle} className="explore-container">
           
                    <h1> ​India's Leading One-Way Inter-City Cab Service Provider</h1>
                    <div className='explore_subcontainer'>
                    <ExplorecabContainer />
                    </div>
    
        </div>
    )
}
