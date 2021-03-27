import {makeAutoObservable} from "mobx";

export  default class ServisStore {
    constructor() {
        this._servis = [
            {id:1, name: 'Полная спутниковая диагностика территории', img: '/images/aboutstore/1.png'},
            {id:2, name: 'Увеличение вашего дохода - это наша работа!', img: '/images/aboutstore/2.png'},
            {id:3, name: 'Новейшее программное обеспечение', img: '/images/aboutstore/3.png'},

        ]

        makeAutoObservable(this)
    }
    setServis(servis) {
        this._servis = servis
    }
    get servis() {
        return this._servis
    }

}