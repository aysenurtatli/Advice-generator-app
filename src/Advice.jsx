import React, { useEffect, useState } from 'react'
import axios from 'axios'
import divider from './images/pattern-divider-desktop.svg'
import dice from './images/icon-dice.svg'
const Advice = () => {
    const [advice, setAdvice] = useState({id: "", advice: "Generate random quotes of advice"});
    const adviceGenerator = () => {
        axios.get("https://api.adviceslip.com/advice")
          .then(response => {
            const { id, advice } = response.data.slip;
            setAdvice({ id, advice });
          })
          .catch(error => {
            console.error("error:", error);
          });

    }
    console.log(advice.advice.length)

  return (
    <div className='bg-[#313A48] text-center w-[530px] h-auto flex flex-col items-center rounded-2xl px-10 relative'>
    <div className='my-10 flex flex-col items-center'>
      <span className='text-[#53FFAA] text-[13px] font-extrabold tracking-[4.09px]'>ADVICE #{advice.id}</span>
      
      {advice.advice && advice.advice.length > 65 ? (
        <p className='text-[20px] text-[#CEE3E9] font-extrabold my-6'>{advice.advice}</p>
      ) : (
        <p className='text-[28px] text-[#CEE3E9] font-extrabold my-6'>{advice.advice}</p>
      )
    }
    <div className='block py-8'>
      <img src={divider} />
    </div>
     
    </div>
    <button 
   onClick={adviceGenerator} 
   className='bg-[#53FFAA] w-[64px] h-[64px] rounded-full flex items-center justify-center absolute -bottom-[1.875rem] cursor-pointer '
 >
   <img src={dice} className='hover:rotate-180 duration-300'/>
  </button>
  </div>
   
  )
}

export default Advice