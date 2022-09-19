import  {useSelector} from 'react-redux'
import React from 'react'

const Coin = () => {
    const coin=useSelector((state)=>state.counter.count)
    const themeTextColor=useSelector((state)=>state.theme.color)
    
    return (
        <div>
            <span className='value' style={{color:themeTextColor}}>coin : {coin}</span>
        </div>
    )
}

export default Coin