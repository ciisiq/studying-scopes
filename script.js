'use strict';
//Scoping practice

//Global Scope
function calcAge(birthYear) {
  //Variable scope
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    //block scope
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven';
      //Will use first this firstName than the Global because use the stack chain;
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }

    // console.log(str);
    //will give str is not defined because it is a scope only avaliable inside their scope

    console.log(millenial);
    //will find this because is not variable Let or const (ES6) it is VAR

    // console.log(add(2, 3));
    //will give a error because is not in the same scope, but only because the USE Strict in the top of the page, without it, it will works.
  }

  printAge();

  return age;
}

//Global Variable
const firstName = 'Cintia';
calcAge(1991);

//95 Hoisting and TDZ in practice
// console.log(me);
// Underfined
// console.log(job);
// Cannot acces "job" before initialization
// console.log(year);
// Cannot acces "job" before initialization

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

console.log(addDecl(2, 1));
//Will be able to acess
// console.log(addExpr(2, 1));
//Will not be able before initilization
// console.log(addArrow(2, 1));
//Will not be able before initilization

//function declaration
function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
