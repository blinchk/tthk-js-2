const tingimus = 1 == 1;
if (tingimus) {
    // Kood, mis täidetakse, kui tingimus on tõene
}  
if (1 == 1) {
    // Kood, mis täidetakse, kui tingimus on tõene
} 

const a = 5;
const b = 10;

// Võrdlusoperaatorid
console.log(a > b); // false: 5 ei ole suurem kui 10
console.log(a < b); // true: 5 on väiksem kui 10
console.log(a >= b); // false: 5 ei ole suurem või võrdne 10-ga
console.log(a <= b); // true: 5 on väiksem või võrdne 10-ga
console.log(a == b); // false: 5 ei ole võrdne 10-ga
console.log(a != b); // true: 5 ei ole võrdne 10-ga 

// Loose võrdlus
const n = 5;
console.log("5 == 5: " + n == '5');
// Strict võrdlus
console.log(n === '5'); // false: erinevad andmetüübid (number vs string)
console.log(1 === true); // false: erinevad andmetüübid (number vs boolean)
console.log(1 == true); // true, aga tüübid on erinevad

const age = 18;
const isStudent = false;
if (age >= 18 && !isStudent) {
    console.log("Olete täisealine ja mitte õpilane.");
}
const dayOfWeek = "Laupäev";
if (dayOfWeek === "Laupäev" || dayOfWeek === "Pühapäev") {
    console.log("Nädalavahetusel on aeg lõõgastuda.");
}
const loggedIn = false;
if (!loggedIn) {
    console.log("Palun logige sisse oma kasutajakontoga.");
}

const condition = true;
const secondCondition = true;
if (condition) {
    // Kood, mis täidetakse, kui esimene tingimus on tõene
} else if (secondCondition) {
    // Kood, mis täidetakse, kui teine tingimus on tõene
} else {
    // Kood, mis täidetakse, kui ükski tinigmus ei ole tõene
}

let punktid = 75;
 
if (punktid >= 90) {
   console.log("Teie hinne on A.");
} else if (punktid >= 80) {
   console.log("Teie hinne on B.");
} else if (punktid >= 70) {
   console.log("Teie hinne on C.");
} else {
   console.log("Teie hinne on D.");
}

// if-lausete pesastamine
if (condition) {
    // Esimnene tingimus on tõene
    if (secondCondition) {
        // Teine tingimus on tõene
    }
    else {
        // Teine tingimus on väär
    }
    // Esimnene tingimus on tõene
} else {
   // Esimene tingimus on väär
}

// Lühendatud if-lause
condition ? console.log("Tõene") : console.log("Väär");