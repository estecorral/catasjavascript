
export class Carta{
    constructor(valor, palo) {
        this.valor = valor;
        this.palo = palo;
    }
    getValor() {
        return this.valor;
    }
    getPalo() {
        return this.palo;
    }
    static setCarta (carta) {
        return new Carta(carta[0], carta[1]);
    }
}