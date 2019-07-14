import {Carta} from "./carta";

export class Mano {
    constructor(cartas) {
        this.cartas = [];
        this.valores = [];
        this.valorMasAlto = 0;
        this.numParejas = 0;
        this.escalera = false;
        this.color = false;
    }
    static crearMano (manostr) {
        let mano = new Mano();
        mano.cartas = this.crearCartas(manostr);
        mano.valores = this.getValores(mano.cartas);
        mano.valorMasAlto = mano.valores[mano.valores.length-1];
        mano.numParejas = this.parejas(mano.cartas);
        mano.escalera = this.tieneEscalera(mano.valores);
        mano.color = this.colorM(mano.cartas);

        return mano;
    }
    static crearCartas(manostr) {
        return manostr.split(' ').map( carta => {
            return Carta.setCarta(carta);
        });
    }
    static getValores(cartas){
        let values = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];
        let valCartas = [];
        cartas.forEach( carta => {
           valCartas.push(values.indexOf(carta.valor));
        });
        return valCartas.sort((val1, val2) => val1 - val2);
    }
    static parejas (cartas) {
        let num = {};
        cartas.forEach( carta => {
            if(cata.getValor)
            num[carta.getValor()] = num[carta.getValor()] ? num[carta.getValor()] + 1 : 1;
        });
        return num;
    }

    static tieneEscalera (valores) {
        for (let i = 0; i < 4; i++) {
            if (valores[i] + 1 === valores[i + 1]) {
                if (i === 3) {
                    return true;
                }
            } else {
                return false;
            }
        }
    }

    static colorM (cartas) {
        let palo = cartas[0].getPalo();
        let mismoPalo = true;
        cartas.forEach(carta => {
            if (palo !== carta.getPalo()) {
                mismoPalo = false;
            }
        });
        return mismoPalo;
    }
}
