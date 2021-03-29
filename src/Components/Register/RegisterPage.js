import React from 'react'
import LoginHeader from '../../Components/Header/LoginHeader/LoginHeader'
import './registerPAge.css'
import RegisterForm from './RegisterForm'
import RegisterSteps from './RegisterSteps'
// import RegisterCode from './RegisterCode'
function RegisterPage() {
    return (
        <div className="register-body " >
            <LoginHeader />
            <div className="ant-row ant-row-start ant-row-rtl" style={{ maxWidth: 1200, width: '100%', margin: '30px  auto ' }}>
                <div className="ant-col ant-col-xs-0 ant-col-rtl ant-col-md-7">
                    <div className="ant-row ant-row-right ant-row-middle ant-row-rtl">
                        <div className="ant-col ant-col-10 ant-col-offset-3 ant-col-rtl">
                            <div className="ant-steps ant-steps-vertical ant-steps-rtl steps-step" style={{ position: 'fixed', top: 50 }}>
                                <div className="ant-steps-item ant-steps-item-process ant-steps-item-active" style={{ paddingBottom: 9 }}>
                                    <div className="ant-steps-item-container">
                                        <div className="ant-steps-item-tail" />
                                        <div className="ant-steps-item-icon">
                                            <span className="ant-steps-icon active">1</span>
                                        </div>
                                        <div className="ant-steps-item-content">
                                            <div className="ant-steps-item-title">تلفن همراه</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ant-steps-item ant-steps-item-wait" style={{ paddingBottom: 9 }}>
                                    <div className="ant-steps-item-container">
                                        <div className="ant-steps-item-tail" />
                                        <div className="ant-steps-item-icon">
                                            <span className="ant-steps-icon">2</span>
                                        </div>
                                        <div className="ant-steps-item-content">
                                            <div className="ant-steps-item-title">کد تایید</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ant-col ant-col-xs-24 ant-col-rtl ant-col-md-17">
                    <div className="steps-content">
                        <h1 className="ant-typography ant-typography-rtl" direction="rtl">
                            شماره تلفن همراه خود را وارد کنید
                          </h1>
                        <p style={{ fontSize: 18, color: 'white' }} >توجه کنید ثبت نام در پرانیکس با تلفن همراه هیچ گونه هزینه ای از شارژ سیم کارت شما کسر نمی‌کند.</p>
                        <p style={{ fontSize: 18, color: 'rgb(255, 183, 3)' }}>شماره ای که وارد میکنید امکان تغییر نخواهد داشت.</p>
                        <div className="ant-row ant-row-rtl">
                            <div className="ant-col ant-col-xs-23 ant-col-rtl ant-col-md-24">
                             <RegisterForm/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <RegisterCode /> */}



        </div>
    )
}

export default RegisterPage
