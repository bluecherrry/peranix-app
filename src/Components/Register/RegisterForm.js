import React, { useState } from 'react'
import { Form, Input, Select, Button, Row, Col } from 'antd'
import Timer from '../TimeHook/Timer'
import useApi from '../../hooks/useApi'


export default function RegisterForm() {
    const [showingTimer, setShowingTimer] = useState(false)
    const [timerStatus, setTimerStatus] = useState()
    const [phone, setPhone] = useState('')
    const [form] = Form.useForm();
    const { signUpAPI } = useApi();
    const { Option } = Select;


    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 70 }} >
                <Option value="98">+98</Option>
            </Select>
        </Form.Item>
    );



    function handlePhoneNumber(e) {
        const newData = { ...phone }
        newData[e.target.id] = e.target.value
        setPhone(newData)
    }
    //api request 
    const onFinish = async () => {
        const signUpResult = await signUpAPI(phone)
    };
    let timerRef = React.createRef(null)
    const handleTime = () => { timerStatus === 'canResetTimer' ? timerRef.current.resetTimer() : setShowingTimer(true) }


    return (
        <>
            <Form form={form} name="register"
                initialValues={{
                    prefix: '+98',
                }}
                scrollToFirstError 
                onFinish={onFinish}
                >

                <div style={{ marginBottom: 100 }}>
                    <Row >
                        <Col className=" ant-form-item-control ant-col-rtl">
                            <Form.Item rules={[
                                {
                                    required: true,
                                    message: 'لطفا شماره تلفن خود را وارد کنید ',
                                },
                            ]}>

                                <span>
                                    <span className="ant-input-wrapper ant-input-group ant-input-group-rtl">
                                        <Input placeholder="910-111-1111" maxLength={10}
                                         type="text" value={phone} 
                                         addonBefore={prefixSelector}
                                         onChange={(e) => { setPhone(e.target.value) }} />
                                       
                                    </span>
                                </span>

                            </Form.Item>
                        </Col>
                    </Row>
                </div>
                <Row >
                    <Col className=" ant-col-24">
                        <div className="steps-action">
                            <Row className="ant-row ant-row-rtl ant-form-item">
                                <Form.Item className="ant-col ant-form-item-control ant-col-rtl">
                                    {showingTimer &&
                                        <Timer setTimerStatus={(value) => setTimerStatus(value)} initialSecond="15" ref={timerRef} />}
                                    <Form.Item className="ant-form-item-control-input-content">
                                        <Button disabled={phone.length < 1} type="submit" onClick={handleTime}>
                                            <span>بعدی</span>
                                        </Button>
                                    </Form.Item>

                                </Form.Item>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Form>
        </>
    )
}






//        
//              <Form.Item
//                value={phone}
//                label="label"
//                 name="phone"
                // rules={[
                //     {
                //         required: true,
                //         message: 'لطفا شماره تلفن خود را وارد کنید ',
                //     },
                // ]}
//             >
//                 <Input
//                     // onChange={(e) => handlePhoneNumber(e)}
//                     addonBefore={prefixSelector}
//                     placeholder="910-111-1111"
//                 />




