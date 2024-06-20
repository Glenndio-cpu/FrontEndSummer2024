//IIFE & Callback Function


// JavaScript Variabel
// let first_name = "John"; //Snake Case
// let FirstName = "John"; //Pascal Case
// let firstName = "John"; //Camel Case

//Tipe data
// const firstName = "John"; //String
// let age = 30; //Number
// let isMarried = true; //Boolean

// console.log(firstName, age, isMarried);
// let address;
// console.log(address); //undefined
// address = "Airmadidi";
// console.log(address);
// //const nilainya tidak dirubah
// firstName = "Doe";

//Javascript Operators
//Aritmethic
// let bil1 = 10;
// let bil2 = 3;
// console.log(bil1 + bil2); //13
// console.log(bil1 - bil2); //7
// console.log(bil1 * bil2); //30
// console.log(bil1 / bil2); //3.33
// console.log(bil1 ** bil2); //1000
// console.log(bil1 % bil2); //1
// console.log(bil1);
// bil1++;
// console.log(bil1); //11
// bil1--;
// console.log(bil1); //10

//Assignment
// let x = 10;
// // x = x + 2;
// x += 2;
// console.log(x);

//String Operators
// let firstName = "John";
// let lastName = "Doe";
// console.log(firstName + " " + lastName);

//Equality Operators
// let x = 10;
// let y = "10";

// console.log(x == y); //true
// console.log(x === y); //false

//IIFE & Callback Function

//BMI = berat / (tinggi * tinggi)
//Cara 1
function greetings(name) {
    let string = "Hello" + name;
    return string;
  }
  //Cara 2
  const greetings2 = function () {
    console.log("Hello World2");
  };
  
  let output = greetings("John");
  console.log(output);
  greetings2();

  function = calculateBMI(berat,tingg) {
    let bmi = berat / (tinggi * tinggi)
    if (bmi < 18.5) {
        classification = 'Underweight'
    } else if(bmi>=25){
        classification = 'Overweight'
    } else if (bmi > 25 && bmi < 29){
        classification = 'Pre Obese'
    } else {
        classification = 'Obese'
    }
    return classification
  }

  let output = calculatBMI(90, 1.7)
  console.log ('Classifikasi BMI anda adalah' + output)


  // IIFE (Immediately Invoked Function Expression)
fucntion () {
    console.log("Hello IIFE")
})()



  //Callback Function
function greetings(){
    console.log('Hello')
}
function sayHello(callback){
    callback()
})
sayHello(greetings)