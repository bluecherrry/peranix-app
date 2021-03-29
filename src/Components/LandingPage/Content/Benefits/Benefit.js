import React from 'react'
import BenefitList from './BenefitList'
import './Ben.css'
function Benefit(props) {
    //benefits of playing with peranix list for landing page 
  const BenefitLists  = [
    {
        id:"1",
        name:"بازی کردن بدون سخت افزار بر روی تمامی پلتفرم ها",
        para:"شما در سرویس های ابری می‌تونید بازی های روز دنیا رو که نیاز به سخت افزار های سنگین و گرون دارند رو با ضعیف ترین سیستم ها بازی کنید",
    },
    {
        id:"2",
        name:"گروهی بازی کردن",
        para:"شما برای گروهی بازی کردن در سرویس کلاد گیمینگ هزینه‌ی کمتری نسبت به گیم نت ها پرداخت میکنید و همچنین قابلیت چت صوتی و متنی در حین بازی رو دارید",
        image:"https://peranix.com/wp-content/uploads/2019/11/GROUP-PLAY-2.2-RESIZE-min.png"
    },
    {
        id:"3",
        name:"استریم بازی با کیفیت خوب",
        para:"با ما میتونید بازی مورد نظرتون رو از 50 تا 90 فریم بر ثانیه و با کیفیت 720 تا 1080 اجرا کنید و میتونید حتی از بازی کردن خودتون ویدیو ضبط کنید و اون رو در دیگر شبکه های اجتماعی با دوستاتون به اشتراک بذارید!!",
        video:"https://peranix.com/wp-content/uploads/2019/12/fps.mp4"
    },
    {
        id:"4",
        name:"بازی کردن بدون نصب و کرک",
        para:"با استفاده از سیستم های کلاد گیمینگ شمار دیگر نیازی به نصب و کرک کردن بازی ها ندارید و فقط کافیه از تو لیست بازی ها بازی مورد علاقه تون رو انتخاب کنید و شروع به بازی کردن کنید",
        image:"https://peranix.com/wp-content/uploads/2019/09/non-install-1.1.png"
    }
] 
    return (
        <div className="benefit-container">
            <h1>مزیت های بازی کردن با پرانیکس</h1>
            {BenefitLists.map((item,index) => 
           
            {
            const { name, image, video, para} = item
              return (
                <BenefitList 
                key={index} 
                index={index} 
                name={name}
                para={para}
                image={image}
                video={video}
                 />
                 )
            })}
        </div>




    )
}

export default Benefit



