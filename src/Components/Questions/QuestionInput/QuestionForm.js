//textarea//warning//div
import React, { useState } from 'react'
import './Qinput.css'
import { Row, Col } from 'antd'
import { Form, Input, Button } from 'antd';
import useApi from '../../../hooks/useApi'

function QuestionForm() {
  //useApi hook 
  const { questionAPI } = useApi()
  //state of datas
  const [postData, setPostData] = useState({
    name: '',
    email: '',
    introduction: ''
  })
  //handeling input data  
  function handlePostData(e) {
    const newData = { ...postData }
    newData[e.target.id] = e.target.value
    setPostData(newData)
    // console.log(newData)
  }
  //validation message for inputs 
  const validateMessages = {
    required: "پر کردن این قسمت اجباری است",
    types: {
      email: '${label} is not a valid email!',

    },

  };
  const onFinish = async () => {
    const questionResult = await questionAPI({
      name: postData.name,
      email: postData.email,
      introduction: postData.introduction
    })
  };

  return (
    <>
      <div className="header-question">
        <h1 >
          سوالتون رو پیدا نکردین؟
        </h1>
        <p>
          در صورتی که سوال شما در بین سوال های بالا نبود لطفا سوالتون رو از طریق فرم پایین بپرسید، ما  در سریع ترین زمان ممکن جواب شما رو میدیم و اگه سوالتون پر تکرار باشه به اسم خودتون در همین قسمت میذاریم :‌)
       </p>
        <br />
      </div>
      <Form
        name="nest-messages" onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Row>

          <Col xs={24} xl={12}>
            <Row justify="end">
              <label className="required-label" >
                <p> سوال خود را مطرح کنید </p>
              </label>
            </Row>

            <Form.Item name="introductin" >
              <Input.TextArea
                onChange={(e) => handlePostData(e)}
                id="introduction" value={postData.introduction}
                className="text-area"
                cols="40" rows="10" />
            </Form.Item>

          </Col>

          <Col xs={24} xl={12}>
            <Row justify="end">
              <label className="required-label" >
                <p>
                  نام(الزامی)
                            </p>
              </label>
            </Row>

            <Form.Item

              className="validation"
              name="name"
              rules={[
                { required: true }]}
            >
              <Input onChange={(e) => handlePostData(e)} id="name" value={postData.name} />
            </Form.Item>
            <Row justify="end">
              <label className="required-label" >
                <p>    ایمیل(الزامی) </p>
              </label>
            </Row>
            <Form.Item
              className="validation"
              name="email"

              rules={[
                {
                  required: true,
                },
              ]}>
              <Input onChange={(e) => handlePostData(e)} id="email" value={postData.email} />
            </Form.Item>
            <Form.Item>
              <Button
                type="default"
                htmlType="submit"
                className="btn-submit">
                ارسال
                    </Button>
            </Form.Item>
          </Col>
        </Row>

      </Form>
    </>



  )
}


export default QuestionForm




// // <div >
// <div >
// <h1 >
// سوالتون رو پیدا نکردین؟ 
// </h1> 
// <p>
// در صورتی که سوال شما در بین سوال های بالا نبود لطفا سوالتون رو از طریق فرم پایین بپرسید، ما  در سریع ترین زمان ممکن جواب شما رو میدیم و اگه سوالتون پر تکرار باشه به اسم خودتون در همین قسمت میذاریم :‌)
// </p>
// <br/> 
// </div>
// <div className="form-validation">
// <br/> 
// <Row>

// <Col  xs={24} xl={12}>
// <Form  
// onFinishFailed={onFinishFailed}
// onFinish={onFinish}
// validateMessages={validateMessages}>
// <Form.Item
//  style={{color:"white"}}
// name="Name"
// label="سوال خود را مطرح کنید"
// rules={[
//     {
//       required: true,
//       message: 'Please input your username!',
//     },
//   ]}
// >
// {/* <h3>سوال خود را مطرح کنید</h3> */}
// <Input.TextArea className="text-area" cols="40" rows="10"/>
// </Form.Item>
// </Form>
// </Col>

// <Col  xs={24} xl={12} className="right-col-form-validation">
// <Row justify="end">
// <Form

// >
//     <label style={{color:"white"}}>

//          نام (الزامی)


//     </label>
//     <Form.Item lable="نام" required tooltip="‍‍‍پر کردن این قسمت اجباری است" name="requiredMark" >
//     <Input placeholder="" className="form-question"/>
//     </Form.Item>
// </Form>

// </Row>
// <Row justify="end">
//     <Form>
//     <label style={{color:"white"}}>
//         <br/> <br/>
//          ایمیل (الزامی)


//     </label>
//     <Form.Item lable="ایمیل" name="requiredMark" required tooltip="‍‍‍پر کردن این قسمت اجباری است" >
//     <Input placeholder="" className="form-question"/>
//     </Form.Item>
//     </Form>

// </Row>
// </Col>

// <Form.Item >
//     <Button type="primary" htmlType="submit">
//     Submit
//     </Button>
// </Form.Item>
// </Row>
// </div>


// </div>
// )
// function handleSubmit(e) {
//   e.preventDefault();
//   console.log("submit")
//   Axios.post(URL,{
//     name : postData.name,
//     email: postData.email,
//     introduction:postData.introduction
//   }
//   .then(res => {console.log(res.postData,"response")})
//   )
// }