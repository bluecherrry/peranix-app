import React ,{useState , useEffect} from 'react'

const useComponent =(props )=>{
  const {initialSecond , initialMinute , resendStatusCallback , setTimerStatus } = props
  const [minute,setMinute]=useState(initialMinute)
  const [second , setSecond ] = useState(initialSecond)
 
  useEffect(() => {
    timerInterval()    
  }, [])

  const timerInterval = () => {
   const timeInterval = setInterval(() => {    
      setSecond((prevSecond) => {
        if (prevSecond > 0) {
          return (prevSecond - 1)
        } else if ( prevSecond===0 && minute>0 ){
          setMinute(minute-1) 
          return (59)
        }else {
          console.log('sefr shod');
          setTimerStatus('canResetTimer')
          clearInterval(timeInterval)
          resendStatusCallback && resendStatusCallback()
          return (0)
        }
      })

    }, 1000)
  }

  const resetTimer = () => {
    setTimerStatus('cantResetTimer')
    timerInterval()
    resendStatusCallback && resendStatusCallback()
    setSecond(initialSecond)
    setMinute(initialMinute)
  };


  return{
    second ,
    minute ,
    setSecond ,
    setMinute ,
    resetTimer ,
  }
}
export default useComponent