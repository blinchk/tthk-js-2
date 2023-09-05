const array = [];

// Elementide lisamine
array.push(1); // [1], massiivi lõppu
console.log(array);
array.push(2, 3); // [1,2,3]
console.log(array);
array.unshift(-1, 0); // [-1,0,1,2,3], massiivi algusesse
console.log(array);
array.splice(1, 0, 555); // [-1,555,0,1,2,3], määratees kindla indeksi
console.log(array);

// Elementide eemaldamine
console.log(array.pop()); // 3, viimane element
console.log(array); // [ -1, 555, 0, 1, 2 ]
console.log(array.shift()); // -1, esimene element
console.log(array); // [ 555, 0, 1, 2 ]
// splice meetod - indeks, kui palju elemente eemaldada
console.log(array.splice(1, 1)); // [ 0 ], konkreetne element
console.log(array); // [ 555, 1, 2 ]
console.log(array.slice(1)); // [ 1, 2 ], osa massiivist
console.log(array); // [ 555, 1, 2 ]

// Elementide sorteerimine
const array2 = [8, 9, 1, 2, 3, 4, 0];
array2.sort();
array2.reverse();
console.log(array2);

// Elemendi otsimine
console.log(array2.indexOf(9)); // 0
console.log(array2.indexOf(0)); // 6
console.log(array2.indexOf(12)); // -1

// Masiivide ühendamine
const combinedArray = array.concat(array2);
console.log(combinedArray); // [555, 1, 2, 9, 8,4, 3, 2, 1, 0]

// Mitmemõõtmelised massiivid
const grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(grid[0][1]);

const numbersInString = '1,2,3,4,5'
console.log(numbersInString.split(','));