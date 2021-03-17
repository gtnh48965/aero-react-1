import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-3"><img src="/images/brand.svg" alt=""/></div>
                    <div className="col-3">
                        <ul className="list-unstyled">
                            <li><a href="#">О компании</a></li>
                            <li><a href="#">Команда</a></li>
                            <li><a href="#">Дорожная карта проекта</a></li>
                            <li><a href="#">Новости</a></li>
                            <li><a href="#">Услуги</a></li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <ul className="list-unstyled">
                            <li><a href="#">Блог</a></li>
                            <li><a href="#">Наши мероприятия</a></li>
                            <li><a href="#">Кейсы</a></li>
                            <li><a href="#">Контакты</a></li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <ul className="list-unstyled">
                            <li className="mb-4"><a href="#">8 (499) 899-44-74</a></li>
                            <li className="mb-4">
                                <span>Мы в соцсетях:</span>
                                <div>
                                    <a className="mr-2" href="#"><i className="fa fa-instagram"></i></a>
                                    <a className="mr-2" href="#"><i className="fa fa-vk"></i></a>
                                    <a className="mr-2" href="#"><i className="fa fa-facebook-square"></i></a>
                                </div>
                            </li>
                            <li>©AEROSPACE_AGRO 2019—2021</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;