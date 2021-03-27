import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";
import Carousel, { consts } from "react-elastic-carousel";
import ServicesCarouselItem from "./ServicesCarouselItem";

const ServicesCarusel  = observer(() => {
    const {servis} = useContext(Context);
    const breakPoints = [
        {itemsToShow: 1, className: "slider-1_block", showArrows: false, pagination: true, enableMouseSwipe: true, disableArrowsOnEnd: true},
    ];

    return (
        <div className='bg-serv'>
        <div className='container mb-80'>
            <Carousel breakPoints={breakPoints}
                      enableAutoPlay
                      autoPlaySpeed={3000}
                      renderArrow={
                          ({ onClick, isEdge }) => {

                          return (
                              <button className='about-arrow' onClick={onClick} disabled={isEdge}>
                              </button>
                          )
                      }
                      }>
                {servis.servis.map(item =>
                    <ServicesCarouselItem key={item.id} servis={item}/>
                )}
            </Carousel>
        </div>
        </div>
    );
});

export default ServicesCarusel;