import React, { useState } from 'react';
import './counter.css'
function Counter() {
    const TitleCounter = () => (
        <div className='title__counter'>
                   <p className='itemCenter'>
                      {count}
                   </p>
                   </div>
    )
    const DecreaseButton = () => ( 
        <button onClick={() => setCount(count-1)} className='removeClick ariaClick'>
            <p className='itemCenter'>-</p>
        </button>
 )
    const ResetButton = () => (
        <button onClick={()=> setCount(0)} className='resetClick ariaClick'>
            <p className='itemCenter'>Reset</p>
        </button>
    )
    const IncreaseButton = () => (
        <button onClick={() => setCount(count+1)} className='addClick ariaClick'>
            <p className='itemCenter'>+</p>
        </button>
    )
    const [count, setCount] = useState(0);
    return (
        <div className='counter'>
           <TitleCounter /> 
                <div className='PanelHandler__counter'>
                    <DecreaseButton />
                    <ResetButton />
                    <IncreaseButton />
                </div>
        </div>
    )
}
export default Counter;
