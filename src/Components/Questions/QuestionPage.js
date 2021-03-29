import React from 'react'
import HeroQ from './HeroQ/HeroQ'
import QandA from './Q&A/QandA'
import { Row, Col, BackTop } from 'antd'
import QuestionForm from './QuestionInput/QuestionForm'

function QuestionPage() {
    return (
        <div style={{ backgroundColor: "black" }}>


            <HeroQ />
            <BackTop style={{ color: "white", borderRadius: "50px", background: "red" }} />
            <Row justify="center" style={{ background: "black" }}>
                <Col span={4} style={{ background: "black" }}></Col>
                <Col xs={24} xl={16}>
                    <QandA />
                    <QuestionForm />
                </Col>

                <Col span={4} style={{ background: "black" }}></Col>
            </Row>




        </div>
    )
}

export default QuestionPage
