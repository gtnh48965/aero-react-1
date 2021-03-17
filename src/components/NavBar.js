import React from 'react';

const NavBar = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex align-items-center justify-content-between">
                        <a className="btn-link" href="#"><img src="/images/brand.svg" alt="AeroSpace-Agro"/></a>
                        <a className="btn-link" href="tel:84955678734"><img src="images/header/call.svg" /> 8(495)
                            567-87-34</a>
                        <a className="btn-link" href="#">Заказать обратный звонок</a>
                        <div className="social d-flex justify-content-center align-items-center">
                            <span>Мы в соцсетях</span>
                            <a href="#"><img src="/images/header/inst.svg" alt=""/></a>
                            <a href="#"><img src="/images/header/vk.svg" alt=""/></a>
                            <a href="#"><img src="/images/header/fb.svg" alt=""/></a>
                        </div>
                        <div className="lang d-flex justify-content-between align-items-center">
                            <img src="/images/header/rus.svg"/>
                            <span>rus</span>
                            <a href="#"> <img src="/images/header/drop.svg" alt=""/> </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <nav className="navbar navbar-expand-lg bg-grad">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">О компании</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Команда</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Дорожная карта проекта</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Новости</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Услуги</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Блог</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Наши мероприятия</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Кейсы</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Контакты</a>
                                </li>
                            </ul>
                            <button className="btn" type="submit"><img src="/images/header/search.svg" alt=""/></button>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;