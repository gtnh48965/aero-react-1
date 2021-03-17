import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";
import Carousel, { consts } from "react-elastic-carousel";
import AboutCarouselItem from "./AboutCarouselItem";

const AboutCarusel  = observer(() => {
    const {about} = useContext(Context);
    const breakPoints = [
        {itemsToShow: 3, className: "slider-1_block", showArrows: true, pagination: false, enableMouseSwipe: false, disableArrowsOnEnd: true},
    ];

    return (
        <div className='container mb-80'>
            <Carousel breakPoints={breakPoints}
                      renderArrow={
                          ({ type, onClick, isEdge }) => {
                          const pointer = type === consts.PREV ? '/images/aboutstore/back.svg' : "/images/aboutstore/next.svg"
                          return (
                              <button className='about-arrow' onClick={onClick} disabled={isEdge}>
                                  <img src={pointer} alt=""/>
                              </button>
                          )
                      }
                      }>
                {about.about.map(item =>
                    <AboutCarouselItem key={item.id} about={item}/>
                )}
            </Carousel>
        </div>
    );
});

export default AboutCarusel;