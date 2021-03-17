import React from 'react';

const Services = () => {
    return (
        <div className="container services mb-160">
            <div className="row">
                <div className="col-6">
                    <div className="container-title">
                        <h1>УСЛУГИ AEROSPACE-AGRO</h1>
                    </div>
                </div>
            </div>
            <div className="row">
                <ul className="col-6">
                    <li className="active"><img src="images/services/1.svg" alt="Услуга" /><p
                        className="w-auto">Тест-драйв</p></li>
                    <li className=""><img src="images/services/2.svg" alt="Услуга" /><p className="w-auto">Исследование и
                        описание участка</p></li>
                    <li className=""><img src="images/services/3.svg" alt="Услуга" /><p className="w-auto">Исследование,
                        анализ и оценка участка на наличие всевозможных сельскохозяйственных проблем</p></li>
                    <li className=""><img src="images/services/4.svg" alt="Услуга" /><p className="w-auto">Полное изучение
                        и оценка участка на количество и виды вредителей и качества роста культур, для повышения объема
                        получаемого урожая</p></li>
                    <li className=""><img src="images/services/5.svg" alt="Услуга" /><p className="w-auto">Анализ
                        сельскохозяйственного участка на заболевание растений</p></li>
                    <li className=""><img src="images/services/6.svg" alt="Услуга" /><p className="w-auto">Диагностика
                        территорий перед посевами — создание комплекса моделей работ в течении сезона</p></li>
                    <li className=""><img src="images/services/7.svg" alt="Услуга" /><p className="w-auto">Расчёт
                        экономической эффективности сельскохозяйственного участка</p></li>
                    <li className=""><img src="images/services/8.svg" alt="Услуга" /><p className="w-auto">Минеральный
                        анализ почвы агро-территорий</p></li>
                    <li><a href="#" className="btn btn-color">перейти в полный перечень услуг <img
                        src="images/icons/btn-lg-next.svg"/></a></li>
                </ul>
                <div className="col-5 offset-1 d-flex flex-column about-services">
                    <h3>Тест-драйв</h3>
                    <img src="images/services/Тест-драйв.png" alt="" />
                        <p>Закажите пробное исследование территории и убедитесь
                            в качестве оказываемых услуг. Благодаря режиму тест-драйва, вы сможете оценить качество и
                            уровень предоставляемых нами услуг. Данный пакет позволяет получить краткий анализ участка и
                            определить имеющиеся проблемы.</p>
                        <p><img src="images/services/10.svg" alt="Услуга" /> проверить эффективность</p>
                        <p><img src="images/services/10.svg" alt="Услуга" /> убедиться в качестве</p>
                        <a href="#" className="btn btn-color">Полное описание услуги <img
                            src="images/icons/btn-lg-next.svg"/></a>
                </div>
            </div>
        </div>
    );
};

export default Services;