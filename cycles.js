// ülesehitus
for (let i = 0; i < 5; i++) {
    console.log(i);
}
for (let j = 5; j > 0; j--) {
    console.log(j);
}

// massiivi elementide läbimine
const fruits = ["Apple", "Banana", "Orange", "Mango"];
for (let index = 0; index < fruits.length; index++) {
    console.log(fruits[index]);
}
for (const fruit in fruits) {
    if (Object.hasOwnProperty.call(fruits, fruit)) {
        const element = fruits[fruit];
        console.log(element);
    }
}

// pesastatud tsükkel
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}


// https://meet.google.com/jiw-dsji-dcp