import React from 'react';
import allan from '../images/allan.jpeg'
const Portrait = () => {
    return (
        <div className='portraitWrapper'>
            <img className='portrait' src={allan} alt='portrait'/>
        </div>
    );
};

export default Portrait;