// №1
// let student = new Object();


// let student = {
//     name: "Саша",
//     surname: "Клепец",
//     age: 40,
//     kurs: 1,
//     anglish: "intermediate",
// }

// console.log(student);
// console.log(student.name);
// delete(student.anglish);
// console.log(student);

//№2

// let book = {
//     numberOfPages: 545,
//     cover: true,
//     isTheAuthorAlive: false,
//     isBestseller: true,
//     bookEditions: 20000000,
// }
// console.log(book);
// // console.log("cover" in book);
// // console.log("true" in book);

// for (let key in book) {
//     // console.log(key); 
//     // console.log(book[key]);
//     if (book[key] == true || book[key] == false) {
//         console.log(key);
//     }
// };



// №3

// let auto = {
//         make: "Audi",
//         color: "Red",
//         doors: 4,
//         horsepower: 147,
//         engineSize: 2.0,
//         transmisiion: "Automatic",
//     }
//     // let copyAotoObject = {};

// // 1-ый способ
// let copyAotoObject = Object.assign({}, auto);
// Object.assign(copyAotoObject, auto);


// 2-ой способ
// let copyAotoObject = {};
// for (let key in auto) {
//     copyAotoObject[key] = auto[key];
// }

// console.log(copyAotoObject);
// console.log(auto);

// №4 

// function animal(name, legs, color) {
//     return {
//         name: name,
//         legs: legs,
//         color: color,
//     };
// }

// let newAnimal = animal("cat", 4, "white");
// console.log(newAnimal);
// animal.studentObjeckt = function() {
//     console.log(`This ${newAnimal.color} ${newAnimal.name} has ${newAnimal.legs} legs`);
// };
// animal.studentObjeckt();


// №5

// let train = {
//     locomotiveLength: 25,
//     totalCoachCars: 4,
//     coachLength: 15,
// }

// let lengthTrain = 1;
// for (let key in train) {
//     lengthTrain *= train[key];
// }
// console.log(`Длинна поезда составит: ${lengthTrain}  метров`);

//№ 6
// let student = {
//     nameStudent: "Сергей",
//     surnameStudent: "Петров",
//     numberGrup: 24,
//     studentObjeckt: function() {
//         console.log(`Это студент: ${student.nameStudent} ${student.surnameStudent} из группы №${student.numberGrup}`);
//     },
// };
// student.studentObjeckt();



//№7 

// function Animal(type, view, numberLegs, predator, namePet, age) {
//     this.type = type;
//     this.view = view;
//     this.numberLegs = numberLegs;
//     this.predator = predator;
//     this.namePet = namePet;
//     this.age = age;

// }

// let animalView = new Animal("dog", "taksa", 4, true, "Veniamin", 14);
// console.log(animalView);