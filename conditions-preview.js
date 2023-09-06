/* // Loose võrdlus
const n = 5;
console.log("5 == 5: ", n == '5');

// Strict võrdlus
console.log(n === '5'); // false: erinevad andmetüübid (number vs string)
console.log(1 === true); // false: erinevad andmetüübid (number vs boolean)
console.log(1 == true); // true, aga tüübid on erinevad */

console.log(true && false); // AND: false
console.log(true || false); // OR: true
console.log(!true); // NOT: false

const condition = false;
const secondCondition = true;
if (condition) {
    console.log("if blokk");
} else if (secondCondition) { 
    console.log("else if blokk");
} else {
    console.log("else blokk");
}

if (condition) {
    console.log("tavaline if-lause");
} else {
    console.log("false tavalisest if-lausest");
}

condition ? console.log("lühendatud if-lause") : console.log("false lühendatud if-lausest");

