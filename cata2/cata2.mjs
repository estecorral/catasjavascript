export function arabicer(rom) {
    rom = rom.toString();
    let arabe = 0;
    let sumador = 0;
    let sumAnterior = 0;
    for (let i = 0; i < rom.length; i++) {
        switch (rom.charAt(i)) {
            case 'I':
                sumador = 1;
                break;
            case 'V':
                sumador = 5;
                break;
            case 'X':
                sumador = 10;
                break;
            case 'L':
                sumador = 50;
                break;
            case 'C':
                sumador = 100;
                break;
            case 'D':
                sumador = 500;
                break;
            case 'M':
                sumador = 1000;
                break;
        }
        if (arabe === 0) {
            arabe = sumador;
            sumAnterior = sumador;
        } else if (sumAnterior >= sumador ){
            arabe += sumador;
            sumAnterior = sumador;
        } else if (sumAnterior < sumador) {
                if (arabe < sumador) {
                    arabe = sumador - arabe;
                } else {
                    sumador -= sumAnterior;
                    arabe -= sumAnterior;
                    arabe += sumador;
                    sumAnterior = sumador + sumAnterior;
                }
        }
    }
    return arabe;
}
 export function romanicer(num) {
    if (num > 0 && num < 4000) {
        let numArray = [];
        let numChart = num.toString();
        let res = '';
        for (let i = 0; i < numChart.length; i++) {
            if (i === numChart.length - 1) {
                numArray[i] = parseInt(numChart.charAt(i));
            } else {
                numArray[i] = parseInt(numChart.charAt(i)) * (Math.pow(10, (numChart.length - 1) - i));
            }
        }
        for (let i = 0; i < numArray.length; i++) {
            res += romanizaArray(numArray[i]);
        }
        return res;
    }
 }

 export function romanizaArray(num) {
    let roman = '';
    let numChar = num.toString();
    let rep = 0;
     switch (num) {
         case 1:
             roman = 'I';
             break;
         case 4:
             roman = 'IV';
             break;
         case 5:
             roman = 'V';
             break;
         case 9:
             roman = 'IX';
             break;
         case 10:
             roman = 'X';
             break;
         case 40:
             roman = 'XL';
             break;
         case 50:
             roman = 'L';
             break;
         case 90:
             roman = 'XC';
             break;
         case 100:
             roman = 'C';
             break;
         case 400:
             roman = 'CD';
             break;
         case 500:
             roman = 'D';
             break;
         case 900:
             roman = 'CM';
             break;
         case 1000:
             roman = 'M';
             break;
         default:
             if (numChar.length === 4) {
                rep = num / 1000;
                roman = letras(rep, 1000);
             } else if (numChar.length === 3) {
                 rep = num / 100;
                 roman = letras(rep, 100);
             }
             else if (numChar.length === 2) {
                 rep = num / 10;
                 roman = letras(rep, 10);
             }else {
                 roman = letras(num, 1);
             }
     }
     let unos = /IIIII/gi;
     let equis = /XXXXX/gi;
     let ces = /CCCCC/gi;
     roman = roman.replace(unos, 'I');
     roman = roman.replace(equis, 'L');
     roman = roman.replace(ces, 'D');
     return roman;
 }

 export function letras (rep, num) {
    let result = '';
    for (let i = 0; i < rep; i++) {
        result += romanizaArray(num);
    }
    return result;
}