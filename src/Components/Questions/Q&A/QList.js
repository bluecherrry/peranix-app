import React from 'react'
import { Collapse } from 'antd';
import './QA.css'
function QList(props) {
    const {id,question,answer} = props;
    const { Panel } = Collapse;
    return (
        <div className="qa-div"> 
             <Collapse  
                    bordered={false}
                    defaultActiveKey={['1']}
                    className="collapse"
                >
              <Panel header={question}
               key={id} 
               
               className="panel-collapse">
                 <p>{answer}</p>
             </Panel> 
              </Collapse>
        </div>
    )
}

export default QList
