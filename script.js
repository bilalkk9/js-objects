
//----------TASK No:1----------

//Create an object with properties name, email, password, age, gender, city, country.
//Check if age and country properties exist in object or not.
//Also check firstName and lastName properties in object.


// var obj={
//     name:'Bilal',
//     email:'bilal@gmail.com',
//     password:'12345678',
//     age:'22',
//     city:'Karachi',
//     country:'Pakistan'
// }
//********** hasOwnProperty() Method **********

// if(obj.hasOwnProperty('city')){
//     console.log('This Key exists in the object.');
// }else{
//     console.log('This Key does not exist in the Object.');
// }

//********** in operator **********

// if('Salary' in obj){
//     console.log('This Key exists in the object.');
// }else{
//     console.log('This Key does not exist in the Object.');
// }


//********** Comparing with Undefined **********

// console.log(obj.lastName);



//----------TASK No:2----------

//Create a constructor function with some properties. Now create multiple records using the constructor.


// function Student(name, id, age, cls){
//     this.name=name;
//     this.id=id;
//     this.age=age;
//     this.class=cls;
// }

// var std1= new Student('Ali',1101,22,10);

// var std2= new Student('Asad',1102,18,8);

// var std3= new Student('Asim',1103,20,9);


// Task No:3

// var itemsArray=[
// {name:'juice',price:'50',quantity:'2'},
// {name:'cookie',price:'10',quantity:'4'},
// {name:'shirt',price:'150',quantity:'1'},
// {name:'pen',price:'20',quantity:'3'},
// ];

// Task No:03
//Calculate total price of each item and all items;

// var itemArr = [
//   { name: "cookie", price: "50", quantity: "3" },
//   { name: "juice", price: "40", quantity: "2" },
//   { name: "shirt", price: "150", quantity: "4" },
//   { name: "pen", price: "30", quantity: "2" },
// ];

// for (i = 0; i < itemArr.length; i++) {
//   var a =
//     "The total price of " +
//     itemArr[i].name +
//     " is " +
//     itemArr[i].price * itemArr[i].quantity;
//   console.log(a);
// }

// Task No:04
//Suppose you want to check population of your area, their educations and professions

// function Area(name, gender, address, education, profession) {
//   this.name = name;
//   this.gender = gender;
//   this.address = address;
//   this.education = education;
//   this.profession = profession;
// }
// var person1 = new Area("ali", "male", "abc street", "fsc", "plumber");
// var person2 = new Area("asad", "male", "xyz street", "matric", "shopkeeper");
// var person3 = new Area("amir", "male", "asd street", "graduation", "teacher");
// var person4 = new Area("asim", "male", "cde street", "masters", "banker");
// console.log(person1);
