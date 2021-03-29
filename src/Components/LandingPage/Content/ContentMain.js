import React from 'react'
import Hero from './Hero/Hero'
import Benefit from './Benefits/Benefit'
import { Content } from 'antd/lib/layout/layout'
import WrapperMain from './Wrapper/WrapperMain'
function ContentMain() {
    return (
    
            <Content>
                
                     <Hero/>
                     <WrapperMain/>
                     <Benefit/>
        
            </Content>
    )
}

export default ContentMain
