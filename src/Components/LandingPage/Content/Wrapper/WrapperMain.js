import React from 'react'
import ButtonMain from '../../../Assets/Button/ButtonMain'
import {Link} from 'react-router-dom'
import './Wrp.css'
import wrp1 from '../../../Assets/Images/wrp1.jpg'
function WrapperMain() {
    return (
        <div className="wrapper-container">
            <h1>   بازی کنی؟  PES 21  الان دوست داری با همین مرورگرت
            </h1>
            <p className="seprator">  </p>
            <img src={wrp1} alt="" className="wrapper-image"/>
            <Link to="/" >
                <ButtonMain name="شروع بازی" />
            </Link>           
        </div>
    )
    
}

export default WrapperMain
