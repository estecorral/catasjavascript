import * as kata1 from "./cata1/cata1";
import * as kata2 from "./cata2/cata2";
let res;
// Kata1
res = kata1.testNumber(100);
console.log(res);

// Kata2
    // Romano a arabe
res = kata2.arabicer('DXCIX');
console.log(res);
    // Arabe a romano
res = kata2.romanicer(589);
console.log(res);

res = kata2.arabicer(res);
console.log(res);