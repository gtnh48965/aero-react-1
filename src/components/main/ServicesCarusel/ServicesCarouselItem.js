import React from 'react';

const ServisCarouselItem = ({servis}) => {
    console.log(servis.img)
    return (
        <div className='col-12 about-item_servis'
             style={{
                 backgroundImage:  `url(${servis.img})`
             }}
        >
            <div className='about-item-title'>{servis.name}</div>
        </div>
    );
};

export default ServisCarouselItem;