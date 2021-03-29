import React from 'react'
import {Button} from 'antd'
import {UserOutlined } from '@ant-design/icons'
export default function ButtonMain(props) {
    return (
        <div>
          <Button className="btn" type="primary"  value="large"  >
                   {props.name}
               </Button>  
        </div>
    )
}
