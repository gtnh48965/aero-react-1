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
        <div className="sliders-refact">
        <div className='bg-serv'>
        <div className='container mb-80 slider-service'>

            <div className="news-dots">
                <div className='row slider-two serv-block'>
                    <div className='col-6 container-title'>
                        <h1 className=''>
                            Тест&#160;драйв
                        </h1>
                        <h6 className="text-serv">
                            Компания&#160;AEROSPACE&#160;-&#160;AGRO&#160;предлагает&#160;каждому&#160;новому<br/>клиенту&#160;воспользоваться&#160;услугой&#160;Test&#160;-&#160;Drive!<br/>
                            За&#160;сумму&#160;в&#160;200&#160;000&#160;рублей&#160;мы&#160;сделаем&#160;подробную<br/> диагностику&#160;небольшого&#160;участка&#160;Вашей&#160;земли.
                        </h6>
                        <div className='sl'>
                            <a>
                                <button type="button" className="bot-serv btn btn-primary"><p>узнать больше</p>
                                    <div className="vector-test">

                                    </div>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="img-test">

                </div>
            </div>


            </div>


        </div>


            <div className='line'>
                <div className='line container pd-none'>
                <div className='row'>
                    <h3 className='col-4 manager'>
                        <p className='m'>ваш запрос менеджеру</p>
                        <p className='s'>Выбрано: <b>15 услуг для консультации</b></p>
                    </h3>
                    <div className='col-8'>
                        <div className='row justify-content-around'>
                        <div className='col-6'>
                        <button type="button" className="bt-blue btn btn-primary btn-lg">
                            <p>смотреть список выбранных услуг</p>
                        </button>
                    </div>
                        <div className='col-4'>
                            <button type="button" className="bt-green btn btn-primary btn-lg">
                                <p>оформить запрос</p>
                                <div className='vector'>
                                </div>

                            </button>
                        </div>
                    </div>
                </div>
                </div>

            </div>
            </div>


        </div>


    );
});

export default ServicesCarusel;