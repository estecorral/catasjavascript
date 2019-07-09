export function testNumber (num) {
    let result = '';
    if (num <= 100 && num > 0) {
        switch (result) {
            /*
            se omite el caso FooBarQuix ya que tenemos que introducir números entre 1 y 100 y el primer número divisible
            entre 3, 5 y 7 es el 210
             */
            case '':
                if (num % 3 === 0) {
                    result += 'Foo';
                }
                if (num % 5 === 0) {
                    result += 'Bar';
                }
                if (num % 7 === 0) {
                    result += 'Quix';
                }
            case 'Foo':
            case 'FooBar':
            case 'FooQuix':
            case 'Bar':
            case 'BarQuix':
            case 'Quix':
                result += charNum(num);
        }
        return result;
    } else {
        return 'El número introducido no es correcto o no está entre 1 y 100'
    }

}
function charNum(num) {
    let numChar = num.toString();
    let res = '';
    for ( let i = 0; i < numChar.length; i++ ) {
        if (numChar.charAt(i) === '3') {
            res += 'Foo';
        }
        else if (numChar.charAt(i) === '5') {
            res += 'Bar';
        }
        else if (numChar.charAt(i) === '7') {
            res += 'Quix';
        }
    }
    return res;
}