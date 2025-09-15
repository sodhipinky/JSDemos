let student = {
    name: "John",
    age: 21,
    isEnrolled: true
}
// console.log(student);
// console.log(student.name);
// console.log(student["age"]);

//iterate an object using for...in loop
/*
    for (key in object) {
        code block to be executed
    }
*/
// for (let index in student) {
//     console.log(`${index}: ${student[index]}`);
// }

//Object methods
let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    speed: 0,

    //method
    accelerate(){
        this.speed += 10;
        console.log(`The car is accelerating. Current speed: ${this.speed} km/h`);
    },

    brake(){
        this.speed -= 10;
        if(this.speed < 0) this.speed = 0;
        console.log(`The car is braking. Current speed: ${this.speed} km/h`);
    }
}

car.accelerate();
car.accelerate();