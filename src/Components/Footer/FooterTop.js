import React from 'react'
import { Menu } from 'antd'

function FooterTop() {
    return (
        <div className="top-footer" >
            <Menu >
                <Menu.Item>
                    <a>
                    درباره ما
                    </a> 
                </Menu.Item>
                <Menu.Item>
                    <a>
                    سوالات متداول
                    </a>
                </Menu.Item>
                <Menu.Item>
                   <a>
                     فرصت های شغل
                    </a>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default FooterTop
