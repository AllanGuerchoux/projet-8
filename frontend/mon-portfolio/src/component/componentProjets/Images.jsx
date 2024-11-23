import React from 'react';

const Images = ({picture, title}) => {
    return (
        <div className='bigImageWrapper'>
            <img src={picture} alt={title} className='bigImageProjet'/>
        </div>
    );
};

export default Images;