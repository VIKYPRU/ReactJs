import React, { useMemo, useState } from 'react'

export default function UseMemo() {
    const[count1,setCount1]=useState(0)
    const[count2,setCount2]=useState(0)

    const isEven=useMemo(()=>{//usememo is used to performance optimise
        let i=0
        while(i<2000000000){i++}
        return count1%2 ===0
    },[count1])
    console.log(count1)
  return (
    <div>
        
        {isEven?'Even':'odd'}
        <button onClick={()=>{setCount1(count1+1)}}>count1{count1}</button>
        <button onClick={()=>{setCount2(count2+1)}}>count2{count2}</button>
    
    </div>
  )
}
