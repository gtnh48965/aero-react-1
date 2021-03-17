import {makeAutoObservable} from "mobx";

export  default class BannerStore {
    constructor() {
        this._banner  = [
            {id:1, title: 'Наши технологии',
                content:'Технологии AEROSPACE-AGRO увеличат выручку Вашей компании более чем на 15%! \n' + 'Мы предоставляем эффективные решения в области диагностики сельскохозяйственных территорий.',
                img: '/images/aboutstore/1.png'},
            {id:2, name: 'Увеличение вашего дохода - это наша работа!', img: '/images/aboutstore/2.png'},
            {id:3, name: 'Новейшее программное обеспечение', img: '/images/aboutstore/3.png'},
            {id:4, name: 'Пуф золотой'},
            {id:5, name: 'Пуф золотой'},
            {id:6, name: 'Пуф золотой'},
            {id:7, name: 'Пуф золотой'},
            {id:8, name: 'Пуф золотой'},
            {id:9, name: 'Пуф золотой'},
        ]

        makeAutoObservable(this)
    }
    setBanner (banner ) {
        this._banner  = banner
    }
    get banner () {
        return this._banner
    }

}