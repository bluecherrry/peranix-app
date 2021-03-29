import React , {useState}from 'react'
import { Header } from 'antd/lib/layout/layout'
import { Row ,Col, Button, Affix} from 'antd'
import './HM.css'

import MenuNavigation from './MenuNavigation'
function HeaderMain() {
    const [top, setTop] = useState(0);
    return (
        <Affix offsetTop={top}>
                <MenuNavigation/>
       </Affix>
    )
}

export default HeaderMain
