import React from 'react'
import {Button} from 'antd'
import {UserOutlined } from '@ant-design/icons'
function ButtonHeader() {
    return (
        <div>
          <Button className="btn" type="primary"  value="large" icon={<UserOutlined />} >
                   ورود یا ثبت نام 
               </Button>  
        </div>
    )
}

export default ButtonHeader
