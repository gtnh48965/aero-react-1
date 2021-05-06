import {makeAutoObservable} from "mobx";

export  default class ServisStore {
    constructor() {
        this._servis = [

            {id:1, name: 'Тест драйв', img: '/images/services/Zonss.png', body: 'Компания AEROSPACE-AGRO предлагает каждому новому клиенту\n' +
                    '                        воспользоваться услугой Test-Drive! За сумму в 200 000\n' +
                    '                        рублей мы сделаем подробную диагностику небольшого участка\n' +
                    '                        Вашей земли.',
                link_bottom:'#'},


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