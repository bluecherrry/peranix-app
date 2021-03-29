import React from 'react'
import './footer.css'
import {InstagramOutlined,LinkedinOutlined,FacebookOutlined} from '@ant-design/icons'
function FooterBottom() {
    return (
        <div className="bottom-footer">
            <a>
                 <InstagramOutlined />
            </a>
              <a>
             <LinkedinOutlined />
             </a>   
             <a>
                 <FacebookOutlined />  
             </a>
             <p>
             © تمام حقوق برای peranix محفوظ است. 2019
             </p>
          
        </div>
    )
}

export default FooterBottom
