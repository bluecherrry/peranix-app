import React from 'react'
import { Footer } from 'antd/lib/layout/layout'
import FooterTop from './FooterTop'
import FooterBottom from './FooterBottom'
import './footer.css'
function FooterMain() {
    return (
        <Footer className="footer-container">
            <FooterTop/>
            <FooterBottom/>
        </Footer>
    )
}

export default FooterMain

