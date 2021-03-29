import React,{useState} from 'react'
import {Button} from 'antd'
import './mybutton.css'
function ButtonHero(props) {
    return (
        <>
        <div className="btn-hero" >
            <Button type="primary"  size="large" className="btn1">ورود</Button>
     
              <Button type="primary"  size="large" className="btn1">ثبت نام</Button>
          </div>  
       </>
    )
}

export default ButtonHero
