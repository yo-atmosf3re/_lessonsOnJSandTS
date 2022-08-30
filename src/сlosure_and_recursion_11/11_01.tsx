import * as React from 'react';

// Лексическое окружение, замыкание и рекурсия
// Скоуп - правило поиска переменной в определенной области видимости
// Лексическое окружение - то, что окружает функцию/блок кода и то, на что ссылается функция/блок кода при поиске переменных
// let и const видны в пределах блока и видимости, а var не ограничивается пределами блока
// Стэк - структура данных, в которой пооредно хранятся данные. В стэк попадает первый вызов функции, последним он и уходит
// Рекурсия вызывается до тех пор, пока не удалятся все стэк-фреймы из стека, и функция не вернёт примитивное значение
// Шаг рекурсии - вызов рекурсии ещё раз
// Если не будет условия, после которого рекурсия прекратится, то будет переполнение стэка (stack oferflow)

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


   // function makeCounter() {
   //    let count = 0
   //    return () => {
   //       console.log(++count)
   //    }
   // }
   // let counter = makeCounter();
   // let counter2 = makeCounter();
   // counter()
   // counter()
   // counter2()
   // counter2()

   // const a = () => {
   //    const aName = 'a'
   //    console.log(aName)
   // }
   // const b = () => {
   //    const bName = 'b'
   //    console.log(bName)
   //    a()
   // }
   // const c = () => {
   //    const cName = 'c'
   //    console.log(cName)
   //    b()
   // }
   // c()

   // const pow = (x: number, n: number): number => {
   //    if (n === 1) {
   //       return x
   //    }
   //    return x * pow(x, n - 1)
   // }
   // console.log(pow(2, 5))

   const dom = {
      nodeValue: 5,
      children: [
         { nodeValue: 5, children: null },
         {
            nodeValue: 7, children: [
               { nodeValue: 4, children: null }
            ]
         }
      ]
   }

   const domRecursion = (dom: any) => {
      let res = dom.nodeValue;
      if (!dom.children) {
         return res
      }
      dom.children.forEach((n: any) => {
         res += domRecursion(n)
      })
   }
















   return (
      <div>
      </div>
   );
}

export default Foo;