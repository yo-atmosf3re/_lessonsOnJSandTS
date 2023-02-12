import React from 'react'

class Users {
   name: string

   constructor(name: string) {
      this.name = name
   }

   sayName() {
      console.log(this.name)
   }
}

class Alex extends Users {
   name: string

   constructor(name: string) {
      super(name)
      this.name = name
   }
   public sayHi() {
      console.log(this.name)
   }
}

const user = new Users('Alex')
// console.log(user.sayName())
// console.log(user.name)

const test = new Function()
// console.log(test)

class User {
   constructor(name: string) {
      console.log(name)
   }
   sayHello() {
      console.log('Some name')
   }
}

interface IUser {
   sayHello: (name: string) => void
}

class Admin implements IUser {
   public sayHello(name: string) {
      // console.log(name)
   }

   constructor(public name: string) {
      // console.log(this.sayHello(name))
   }

}

interface IIgor {
   firstName: string
   age: number
   lastName: string
   sayWhoIam: (firstName: string, age: number, lastName: string) => void
}

class Man implements IIgor {
   // firstName: string
   // age: number
   // lastName: string
   sayWhoIam(firstName: string, age: number, lastName: string): void {
      console.log(`My name is ${firstName} ${lastName}, I'm ${age} years old!`)
   }

   constructor(
      public firstName: string,
      public age: number,
      public lastName: string
   ) {
      this.sayWhoIam(firstName, age, lastName)
   }
}
const simpleMan = new Man('Alex', 24, 'Chrome')

class AdvancedMan extends Man {
   sayWhoIam(firstName: string, age: number, lastName: string): void {
      console.log(`My name is ${firstName} ${lastName}, I'm ${age} years old!`)
   }
   sayHowAreYou() {
      console.log('How are you?')
   }
   constructor(
      public firstName: string,
      public age: number,
      public lastName: string
   ) {
      super(firstName, age, lastName)
      this.sayWhoIam(firstName, age, lastName)
      this.sayHowAreYou()
   }
}

const newAdvancedMan = new AdvancedMan('David', 30, 'Jonson')


class SuperAdmin extends User {

}

const newUser = new Admin('Alex')
newUser.sayHello('Alex')


const user1 = {
   name: 'Martin',
   age: 23,
   [Symbol.toPrimitive](hint: string) {
      if (hint === 'number') return 42
      if (hint === 'string') return 'Hello, my friend!'
      if (hint === 'default') return null
   }
}

const someUser1 = {
   age: 23,
   [Symbol.toPrimitive](hint: string) {
      if (hint === 'number') return this.age
   }
}
const someUser2 = {
   age: 32,
   [Symbol.toPrimitive](hint: string) {
      if (hint === 'number') return this.age
   }
}

console.log(someUser1 < someUser2)

console.log(+user1)
console.log(user1.toString() + 'Jon')
// @ts-ignore
console.log(user1 + 10)












































export const ClassesExample = () => {
   return (
      <div>
         Classes example
      </div>
   )
}
