import {Mano} from "./mano.mjs";

export function recibeManos (mano1, mano2) {
    let mano1L = Mano.crearMano (mano1);
    let mano2L = Mano.crearMano (mano2);
    console.log('MANO1: ', mano1L);
    console.log('MANO1: ', mano2L);
    if (mano1L.color === true && mano1L.escalera === true && mano2L.color === false){
        return 'Gana mano1 con escalera de color';
    } else if (mano1L.color === true && mano1L.escalera === true && mano2L.color === true && mano2L.escalera === true){
        return valorMasAlto(mano1L.valorMasAlto, mano2L.valorMasAlto) + ' en escalera de color';
    } else if (parejas(mano1L.numParejas) && trios(mano1L.numParejas) &&
        !parejas(mano2L.numParejas) && !trios(mano2L.numParejas)) {
        return 'Gana mano1 con full';
    } else if (parejas(mano2L.numParejas) && trios(mano2L.numParejas) &&
        !parejas(mano1L.numParejas) && !trios(mano1L.numParejas)) {
        return 'Gana mano2 con full';
    } else if (mano1L.color === true && mano2L.color === false) {
        return 'Gana mano1 con color';
    }else if (mano2L.color === true && mano1L.color === false) {
        return 'Gana mano2 con color';
    } else if (mano1L.escalera === true && mano2L.escalera === false) {
        return 'Gana mano1 con escalera';
    }else if (mano2L.escalera === true && mano1L.escalera === false) {
        return 'Gana mano2 con escalera';
    } else if (trios(mano1L.numParejas) && !trios(mano2L.numParejas)) {
        return 'Gana mano1 con trio';
    } else if (!trios(mano1L.numParejas) && trios(mano2L.numParejas)) {
        return 'Gana mano2 con trio';
    } else if (trios(mano1L.numParejas) && trios(mano2L.numParejas)) {
        return valorMasAlto(mano1L.valorMasAlto, mano2L.valorMasAlto) + ' en trio';
    }else if (parejas(mano1L.numParejas) && !parejas(mano2L.numParejas)) {
        return 'Gana mano1 con pareja';
    } else if (!parejas(mano1L.numParejas) && parejas(mano2L.numParejas)) {
        return 'Gana mano2 con pareja';
    } else if (parejas(mano1L.numParejas) && parejas(mano2L.numParejas)) {
        return valorMasAlto(mano1L.valorMasAlto, mano2L.valorMasAlto) + ' en pareja';
    } else {
        return valorMasAlto(mano1L.valorMasAlto, mano2L.valorMasAlto);
    }


}
function valorMasAlto(val1, val2) {
    if (val1 > val2) {
        return 'Gana mano1 por número más alto';
    } else if (val1 < val2) {
        return 'Gana mano2 por número más alto';
    } else {
        console.log(val1, val2);
        return 'Empate';
    }
}

function parejas(mano) {
    let par = false;
    return par;
}
function trios(mano) {
    let tr = false;

    return tr;
}