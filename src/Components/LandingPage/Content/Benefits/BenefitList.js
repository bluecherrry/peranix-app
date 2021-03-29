import React, { useState } from 'react'
import { Row, Col } from 'antd'
import './Ben.css'
import Spin from './Spin'
function BenefitList(props) {
    const { index, name, image, video, para } = props;
    const [showP, setShowP] = useState(false)
    return (
        <div>
            <Row justify="center">
                <Col xs={24} xl={14} >
                    {
                        index % 2 === 0 ?
                            <Row className="row-gap">
                                <Col xs={24} xl={12} >
                                    <h2>{name} </h2>
                                    <button onClick={() => setShowP(value => !value)}>
                                        اطلاعات بیشتر
                                    </button>
                                    {showP && <p>{para}</p>}
                                </Col>

                                <Col xs={24} xl={12}  >
                                    {index === 0 ? <Spin /> : null}
                                    {image ? <img src={image} alt="" /> : null}
                                    {video ?
                                        <video loop autoPlay className="video-wrp">
                                            <source src={video} type="video/mp4" />
                                        </video>
                                        : null}
                                </Col>
                            </Row>
                            :
                            <Row className="row-gap" >
                                <Col xs={24} xl={12}>
                                    {image ? <img src={image} alt="" /> : null}
                                    {video ?
                                        <video loop autoPlay className="video-wrp">
                                            <source src={video} type="video/mp4" />
                                        </video>
                                        : null}
                                </Col>
                                <Col xs={24} xl={12}>
                                    <h2 >{name} </h2>
                                    <button
                                        onClick={() => setShowP(value => !value)}
                                  
                                    >
                                        اطلاعات بیشتر
                                   </button>
                                    {showP && <p>{para}</p>}
                                </Col>
                            </Row>

                    }

                </Col> </Row>



        </div>
    )
}

export default BenefitList

// return (
                        //     <Row key={benefit.id}>
                        //         {index % 2 === 0
                        //             ? <Col  span={12} flex="1 1 200px" className="col-wrp">
                        //                 <h2>{benefit.name} </h2>
                        //                 <button onClick={() => setShowP((value) => !value)}> اطلاعات ر</button>
                        //                 {showP && <p>{benefit.para}</p>}
                        //             </Col>
                        //             : ''
                        //         }
                        //         <Col span={12}   flex="0 1 300px">
                        //             {benefit.image ? <img src={benefit.image} alt="" /> : null}
                        //             {benefit.video ? <video src={benefit.video} className="video-wrp" alt="" loop /> : null}
                        //         </Col>
                        //         {index % 2 !== 0
                        //             ? <Col span={12}  flex="1 1 200px"  className="col-wrp">
                        //                 <h2>{benefit.name} </h2>
                        //                 <button onClick={() => setShowP((value) => !value)}> اطلاعات ر</button>
                        //                 {showP && <p>{benefit.para}</p>}
                        //             </Col>
                        //             : ''
                        //         }
                        //     </Row>
                        // );