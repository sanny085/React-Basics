import React from 'react';

{/*Getting Text throught Compont Props*/}
function CardImageFilter(props) {
    const img1 = `https://source.unsplash.com/500x300/?${props.nameV}`;
    return (
        <div>
            <img src={img1} alt="Filter Image"/>
        </div>
    );
}

export default CardImageFilter;
