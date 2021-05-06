// import React from 'react';
import React, { useState } from "react";


class AerospaceServices extends React.Component {
    constructor() {
        super();
        this.state = {
            show: true
        }
    }

    render() {

            return (

                <div className="container where_use mb-160">
                    <div className="row">
                        <div className="col-md-5 col-12">
                            <div className="container-title">
                                <h1>услуги <br/>aerospace-agro</h1>
                            </div>
                        </div>


                        <div className="col link-serv container-title">
                            <button className="butDrop" onClick={() => {
                                this.setState({show: !this.state.show})
                            }}>
                                <p className="top-info">Свернуть описание функции «запрос менеджеру»
                                    {this.state.show ? <img src={"/images/services/VectorSmart.png"}/> : 'Show'}
                                </p>
                            </button>
                        </div>

                    </div>
                    <div>

                    </div>
                    {
                        this.state.show ? <div className="row-12 container-title" id="myDIV">
                            <p className="top-info">Для вашего удобства мы добавили функцию «ЗАПРОС МЕНЕДЖЕРУ».
                                Добавляйте услуги в «ЗАПРОС» с помощью кнопки «ДОБАВИТЬ ЗАПРОС
                                    МЕНЕДЖЕРУ» и
                                формируйте ЗАПРОС для индивидуальной консультации по интересующим вас услугам.
                                Данный ЗАПРОС не обязывает вас к покупке.</p>
                        </div> : null
                    }
                    <div className="col-7">
                    <ul className="hr row pagination-top">
                        <li className="col page-items"><a className="page-link"><span>Выбрать&#160;услуги&#160;для:</span></a></li>
                        <li className="col page-items"><a className="page-link" href="#"><span>Всех</span></a></li>
                        <li className="col page-items"><a className="page-link" href="#"><span>программистов</span></a></li>
                        <li className="col page-items"><a className="page-link" href="#"><span>руководителей</span></a></li>
                        <li className="col page-items"><a className="page-link" href="#"><span>агрономов</span></a></li>

                    </ul>
                    </div>

                    <div>

                    </div>


                    <div className="serv-block row">
                        <div className="container">
                            <div className="row">

                                <div className="element el-1 col-sm">
                                    <div className="img align-self-center">
                                        <div className='min-img-block'>
                                            <img className="min-img" src={"/images/services/1.png"}/>
                                        </div>

                                    </div>
                                    <p className="text">
                                        Исследование, анализ и оценка участка на наличие всевозможных
                                        сельскохозяйственных
                                        проблем
                                    </p>
                                    <div className='bottom'>
                                        <button type="button" className="btn btn-primary btn-lg">
                                            <p>узнать больше</p>
                                            <div className='vector'>
                                            </div>
                                        </button>
                                    </div>
                                    <div className='row request'>
                                        <div className='basket'>

                                        </div>
                                        <p>добавитьв запрос менеджеру</p>
                                    </div>
                                </div>
                                <div className="center element col-sm">
                                    <div className="img-c align-self">
                                        <div className='min-img-block'>
                                            <img className="min-img" src={"/images/services/2.png"}/>
                                        </div>
                                    </div>
                                    <p className="text-c">
                                        Тест-драйв
                                    </p>
                                    <div className='bottom-c'>
                                        <button type="button" className="btn h5 btn-primary btn-lg">
                                            <p>узнать больше</p>
                                            <div className='vector'>
                                            </div>
                                        </button>
                                    </div>
                                    <div className='row request-c'>
                                        <div className='basket'>

                                        </div>
                                        <p>добавитьв запрос менеджеру</p>
                                    </div>
                                </div>
                                <div className="element col-sm">
                                    <div className="img align-self-left">
                                        <div className='min-img-block'>
                                            <img className="min-img" src={"/images/services/3.png"}/>
                                        </div>
                                    </div>
                                    <p className="text-l">
                                        Исследование и описание участка
                                    </p>
                                    <div className='bottom-l'>
                                        <button type="button" className="btn btn-primary btn-lg">
                                            <p>узнать больше</p>
                                            <div className='vector'>
                                            </div>
                                        </button>
                                    </div>
                                    <div className='row request-l'>
                                        <div className='basket'>

                                        </div>
                                        <p>добавитьв запрос менеджеру</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="element col-sm">
                            <div className="img r2 align-self-center">
                                <div className='min-img-block'>
                                    <img className="min-img" src={"/images/services/4.png"}/>

                                </div>
                            </div>
                            <p className="text">
                                Полное изучение и оценка участка на количество и виды вредителей и качества роста
                                культур,
                                для повышения объема получаемого урожая
                            </p>
                            <div className='bottom'>
                                <button type="button" className="btn btn-primary btn-lg">
                                    <p>узнать больше</p>
                                    <div className='vector'>
                                    </div>
                                </button>
                            </div>
                            <div className='row request'>
                                <div className='basket'>

                                </div>
                                <p>добавитьв запрос менеджеру</p>
                            </div>
                        </div>
                        <div className="center element col-sm">
                            <div className="img-c r2 align-self">
                                <div className='min-img-block'>
                                    <img className="min-img" src={"/images/services/5.png"}/>

                                </div>
                            </div>
                            <p className="text-c">
                                Анализ сельскохозяйственного участка на заболевание растений
                            </p>
                            <div className='bottom-c'>
                                <button type="button" className="btn btn-primary btn-lg">
                                    <p>узнать больше</p>
                                    <div className='vector'>
                                    </div>
                                </button>
                            </div>
                            <div className='row request-c'>
                                <div className='basket'>

                                </div>
                                <p>добавитьв запрос менеджеру</p>
                            </div>
                        </div>
                        <div className="element col-sm">
                            <div className="img r2 align-self-left">
                                <div className='min-img-block'>
                                    <img className="min-img" src={"/images/services/6.png"}/>

                                </div>
                            </div>
                            <p className="text-l">
                                Диагностика территорий перед посевами — создание комплекса моделей работ в течении
                                сезона
                            </p>
                            <div className='bottom-l'>
                                <button type="button" className="btn btn-primary btn-lg">
                                    <p>узнать больше</p>
                                    <div className='vector'>
                                    </div>
                                </button>
                            </div>
                            <div className='row request-l'>
                                <div className='basket'>

                                </div>
                                <p>добавитьв запрос менеджеру</p>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="element el-1 col-sm br-bt ">
                                    <div className="img align-self-center">
                                        <div className='min-img-block'>
                                            <img className="min-img" src={"/images/services/7.png"}/>

                                        </div>
                                    </div>
                                    <p className="text">Расчёт экономической эффективности сельскохозяйственного
                                        участка</p>
                                    <div className="bottom">
                                        <button type="button" className="btn btn-primary btn-lg">
                                            <p>узнать больше</p>
                                            <div className='vector'>
                                            </div>
                                        </button>
                                    </div>
                                    <div className="row request">
                                        <div className='basket'>

                                        </div>
                                        <p>добавитьв запрос менеджеру</p></div>
                                </div>
                                <div className="center element br-bt col-sm">
                                    <div className="img-c align-self">
                                        <div className='min-img-block'>
                                            <img className="min-img" src={"/images/services/8.png"}/>

                                        </div>
                                    </div>
                                    <p className="text-c">Минеральный анализ почвы агро-территорий </p>
                                    <div className="bottom-c">
                                        <button type="button" className="btn btn-primary btn-lg">
                                            <p>узнать больше</p>
                                            <div className='vector'>
                                            </div>
                                        </button>
                                    </div>
                                    <div className="row request-c">
                                        <div className='basket'>

                                        </div>
                                        <p>добавитьв запрос менеджеру</p></div>
                                </div>

                                <div className="element br-bt col-12 col-sm">

                                    <h4 className="text-next"><b> &nbsp;Перейти<br/>на следующую<br/> &nbsp;страницу
                                        услуг</b><br/>
                                        <img src={"/images/services/VectorBig.png"}/>
                                    </h4>
                                    <div className="br-bt col-12">
                                        <button type="button" id="new-list" className="col-12 btn btn-primary">
                                            <p>следующая страница</p>

                                        </button></div>
                                    <ul className="hr row pagination">
                                        <li className="col page-items"><a className="page-link active" href="#"><span id='color'>01</span></a></li>
                                        <li className="col page-items"><a className="page-link" href="#">02</a></li>
                                        <li className="col page-items"><a className="page-link" href="#">03</a></li>
                                        <li className="col page-items"><a className="page-link" href="#">04</a></li>
                                        <li className="col page-items"><a className="vector-off page-link" href="#">05</a><div className="vector-on"> </div></li>

                                    </ul>

                            </div>
                        </div>
                        </div>
                    </div>
                </div>


            );


    };
}



export default AerospaceServices;



