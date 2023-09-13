const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2022,
    color: 'red',
    additionalOptions: [
        'Climate',
        'Electric Windows',
        'Navigation System'
    ],
    fullName() {
        return this.make + " " + this.model;
    }
}

console.log(car);

console.log(car.make);
console.log(car.model);
console.log(car.year);
console.log(car.color);
console.log(car.additionalOptions);

const cars = [{
    make: 'Honda',
    model: 'Civic',
    year: 2008
}, {
    make: 'Tesla',
    model: 'Model X',
    year: 2019
}, {
    make: 'Subaru',
    model: 'Impreza',
    year: 2005
}];

const foundCars = cars.find(car => car.year > 2018);
console.log(foundCars);

const filteredCars = cars.filter(car => car.year > 2018);
console.log(filteredCars);

const sortedCars = cars.sort((a, b) => a.year - b.year);
console.log(sortedCars);
