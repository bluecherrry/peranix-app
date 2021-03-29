import React from 'react'
import './spin.css'
function Spin() {
    //the first picture in benefit list is spin component
    return (
   <div>

        <div className="play-circle mobhide">
            <img alt="Vortex Cloud Gaming Servers" style={{opacity: 1}} src="https://peranix.com/wp-content/uploads/2019/09/how-it-works-2.png" />
            <div className="circle-wrap">
                <img alt="circle" className="circle" style={{opacity: 1}} src="https://peranix.com/wp-content/uploads/2019/10/sabet-min.png" /> 
                <img alt="rays" className="rays" style={{opacity: 1}} src="https://peranix.com/wp-content/uploads/2019/10/charkh-min.png" />
                <img alt="triangles" className="triangles" style={{opacity: 1}} src="https://vortex.gg/variants/vortex/images/circle-triangles.png" />
            </div>
         </div>
         <div className="play-circle mobshow"> 
              <img alt="Vortex Cloud Gaming Moving Circle" style={{opacity: 1}} src="https://peranix.com/wp-content/uploads/2019/09/image_2019-09-26_01-24-21.png" />
         </div>
    </div>
        

        
    )
}

export default Spin
