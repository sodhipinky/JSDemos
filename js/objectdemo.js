let student = {
    name: "John",
    age: 21,
    isEnrolled: true
}
console.log(student);
console.log(student.name);
console.log(student["age"]);

//iterate an object using for...in loop
/*
    for (key in object) {
        code block to be executed
    }
*/
for (let key in student) {
    console.log(key + ": " + student[key]);
}