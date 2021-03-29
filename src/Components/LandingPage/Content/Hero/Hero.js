import React from 'react'
import './Hero.css'
import { Row ,Col} from 'antd'
import {DownOutlined } from '@ant-design/icons'
import background from '../../../Assets/Images/wallpaper.png'
import ButtonHero from '../../../Assets/Button/ButtonHero'
function Hero() {
    return (
        <div className="container-hero">
             <img src={background} alt="" />
          <Row>
              <div className="hero-text"> 
                <h1 >رو ابرا بازی کن</h1 >
                <p>
                هر جایی و با هر دستگاهی
                 که بتونی باهاش به اینترنت وصل شی
                 بازی های روز دنیا رو با دوستات بازی کن      
                 </p>
               </div> 
             </Row>
                <Row>
            <div className="hero-button">
                <ButtonHero/>
            </div>  
            
          </Row>
         
          
        
             <div className="down">
              <DownOutlined /> 
           </div>  
         
          
          
          
        
        </div>
    )
}

export default Hero
