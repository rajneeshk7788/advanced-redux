import React, { useState } from 'react'
import {useDispatch} from 'react-redux'

import { changeTextColor} from './ThemeSlice';


const Theme = () => {
    const [color,setColor]=useState('white')
    const dispatch = useDispatch();
  return (
    <div>
        <input className='textbox' type="text" onChange={(e)=>setColor(e.target.value)}></input>
        <button className='button' onClick={()=>{dispatch(changeTextColor(color))}}>Change text Color</button>
       
    </div>
  )
}

export default Theme