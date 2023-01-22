import React from 'react'

class User {
   constructor(name) {
      this.name = name
   }
   sayHi() {
      console.log(this.name)
   }
}

const user = new User('Alex')


console.log(user)
console.log(user.sayHi('Jon'))


export const Cop = () => {
   return (
      <div>Classes, objects, prototypes</div>
   )
}
