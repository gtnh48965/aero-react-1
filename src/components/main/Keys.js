import React from 'react';

const marg = {
    marginTop: '60px'
};


const Keys = () => {
    return (
        <div className="container about mb-80">
            <div className='row'>
            <div className="col-6" style={marg}>
                    <div className="container-title">
                        <h1>кейсы aerospace-agro</h1>
                    </div>
                <div className="keys-grass">
                <div className="tab-content row" >
                    <div className="tab-pane fade show active" id="home" role="tabpanel"
                         aria-labelledby="home-tab" >
                        <p className="about-text parent">Наша задача - максимально подробно представить полное
                            и подробное описание территории. На основе данных,
                            а также дополнительных рекомендаций от нас, Вы получаете мощный инструмент для повышения территории.</p>

                        <p className="about-text">Выберите интересующий вас кейс на карте</p>
                    </div>

                </div>
            </div>
        </div>
            <div className='col-6'>

                <div className="img col">
                    <img src="/images/keys/Grass.png" className="grass"  alt="Responsive image"/>
                </div>
            </div>
            </div>
        <div className='col'>
            <div className='keys-grass'>
            <div className='map row-12'>
                <div className='region' data-title="Софийский собор">

                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Keys;