import React, { memo,  forwardRef} from 'react'
import useComponent from './hooks'
import toFarsiNumber from './ToFarsiNumber.js'


const Timer = forwardRef(((props, ref) => {
  const { resendStatusCallback, initialMinute=0, initialSecond=0  , setTimerStatus } = props
  const { second, minute, resetTimer} = useComponent({
     setTimerStatus ,
     initialSecond,
     initialMinute,
     resendStatusCallback
  })

  React.useImperativeHandle(ref, () => ({
    resetTimer
  }));

  return (
    <div>
      <p>
        ({minute > 10 ? toFarsiNumber(minute) : `۰${toFarsiNumber(minute)}`}
        :
        {second > 10 ? toFarsiNumber(second) : `۰${toFarsiNumber(second)}`})
      </p>
    </div>
  )
}))

export default memo(Timer)
