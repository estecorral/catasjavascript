import * as kata1 from "./cata1/cata1";
import * as kata2 from "./cata2/cata2";
import * as kata3 from "./kata3/main";

let res;
// Kata1
res = kata1.testNumber(55);
console.log(res);

// Kata2
    // Romano a arabe
res = kata2.arabicer('DIXC');
console.log('El valor del número romano introducido es: ', res);
    // Arabe a romano
res = kata2.romanicer(589);
console.log('El número romano es: ', res);

res = kata2.validator('IIIV');
console.log(res);

res = kata3.recibeManos('2H 2C 4H 5H KH', 'AC 5H 6C 7C 8C');
console.log(res);
