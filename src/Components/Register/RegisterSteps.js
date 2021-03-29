import React, { useState } from 'react'
import { Steps,Button,message } from 'antd';


function RegisterSteps() {
    const { Step } = Steps;
    const [current, setCurrent] = useState(0)
    const steps = [
        {
            title: 'کد تایید ',
        },
        {
            title: ' تلفن همراه'
        }

    ];
    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };
    return (
        <div>
            <Steps direction="vertical" size="small" current={current}>

                {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
                <div className="steps-content">{steps[current].content}</div>

                <div className="steps-action">
                    
                    {current < steps.length - 1 && (

                        <Button type="primary" onClick={() => next()}>
                            Next
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary" onClick={() => message.success('Processing complete!')}>
                            Done
                        </Button>
                    )}
                    {current > 0 && (
                        <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                                prev
                        </Button>
                    )}

                </div>
            </Steps>
        </div>
    )
}

export default RegisterSteps
