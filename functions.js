function funktsioon(argument) {
    return argument * 2;
}

console.log(
    funktsioon(4)
);
console.log(
    funktsioon(6)
);
console.log(
    funktsioon("Hello, World!")
);

function calculateSum(...arvud) {
    let sum = 0;
    let i = 0;
    while (i < arvud.length) {
        sum += arvud[i];
        i++;
    }
    return sum;
}
console.log(calculateSum(1, 2, 3));
console.log(calculateSum(5, 10, 3));

function calculateRingArea(radius) {
    return Math.PI * Math.sqrt(radius);
}

function calculateCylinderVolume(radius, height) {
    const ringArea = calculateRingArea(radius);
    return ringArea * height;
}

console.log(calculateCylinderVolume(1, 1));

const sayHello = function(name) {
    console.log(`Tere, ${name}`);
}

sayHello("John");

(function() {
    const x = 10;
    console.log(x);
})();

const noolFunktsioonid = () => {
    // funktsiooni keha
}

const sayHelloArrowed = name => {
    console.log(`Hello, ${name}`);
}

sayHelloArrowed("John");

const sum = (a, b) => {
    const result = a + b
    return result
};

console.log(sum(1, 2));


setTimeout(function() {
    console.log("Tere pärastlõunast!");
}, 1000);