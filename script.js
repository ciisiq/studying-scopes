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
