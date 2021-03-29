import React from 'react'
import { Layout } from 'antd'
import {Link} from 'react-router-dom'
function LoginHeader() {
    const headerstyle = {
        backgroundColor:'white'
    }
    const {Header} = Layout
    return (
        <Header style={headerstyle}>
            <Link to='/' >
                <img src="http://panel.peranix.com/static/media/logo-and-type-black.166d7307.png" style={{ width: "170px" }} />
                
            </Link>
        </Header>
    )
}

export default LoginHeader
