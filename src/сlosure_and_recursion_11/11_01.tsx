import * as React from 'react';

// Лексическое окружение, замыкание и рекурсия
// Скоуп - правило поиска переменной в определенной области видимости
// Лексическое окружение - то, что окружает функцию/блок кода и то, на что ссылается функция/блок кода при поиске переменных

function Foo() {
   // let firstName = 'Alex'
   // let sayHi = () => {
   //    console.log(`Hello ${firstName}`)
   // }
   // firstName = 'Hanna'
   // sayHi()

   // function foo() {
   //    const firstName = 'Alex'
   //    return () => {
   //       console.log(firstName)
   //    }
   // }
   // let firstName = 'Hanna'
   // const bar = foo()
   // bar()
   // let hello = 'Hello'
   // function sayHello(name: string) {
   //    function foo() {
   //       let age = 24;
   //       console.log(`${hello}, ${name}, my age is ${age}`)
   //    }
   //    foo()
   // }
   // sayHello('Alex')

   function makeCounter() {
      let count = 0
      return () => {
         console.log(++count)
      }
   }
   let counter = makeCounter();
   let counter2 = makeCounter();
   counter()
   counter()
   counter2()
   counter2()

















   return (
      <div>
      </div>
   );
}

export default Foo;