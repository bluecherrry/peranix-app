import React from 'react'
import Layout from 'antd/lib/layout/layout';
import ContentMain from './Content/ContentMain';
import { BackTop } from 'antd';


function LandingPage() {
    return (
        <Layout style={{ background: "black" }}>

            <BackTop style={{ color: "white", borderRadius: "50px", background: "red" }} />
           
            <ContentMain />
            
        </Layout>
    )
}

export default LandingPage
