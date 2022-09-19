import React from 'react'

const OopClassSolidExample = () => {

   // ? OBJECT
   const deleteUser = (userId) => {
      const action = {
         type: "DELETE-USER",
         payload: {
            userId: userId,
         }
      }
      return action;
   }

   const action1 = deleteUser('111')
   const action2 = deleteUser('222')

   // console.log(action1)
   // console.log(action2)

   // ? PROTOTYPE 
   // @ts-ignore
   function DeleteUserAction(userId) {
      this.type = 'DELETE-USER';
      this.payload = {
         userId: userId
      }
   }
   // @ts-ignore
   const action3 = new DeleteUserAction(121212)
   // console.log(action1)

   // * CLASSES
   // @ts-ignore
   // class DeleteUserAction2 {
   //    constructor() {
   //       // @ts-ignore
   //       this.type = 'DELETE-USER';
   //       // @ts-ignore
   //       this.payload = {
   //          userId: userId
   //       }
   //    }
   // }
   const action4 = DeleteUserAction(111)
   const action5 = DeleteUserAction(222)
   // console.log(action4)
   // console.log(action5)

   class User {
      constructor(name, site, dob) {
         this.name = name;
         this.site = site;
         this.dateOfBirth = dob;
         this.counter = 0;
      }
      hello() {
         this.counter++;
         console.log(`I'am ${this.name} is from ${this.site}`)
      }
   }
   const u1 = new User('Alex', 'vk.com', '18.08.1998')
   const u2 = new User('Jon', 'facebook.com', '13.03.1993')
   console.log(u1.hello())
   console.log(u2.hello())





























   return (<div>
      Object oriented programming, SOLID and classes example...
   </div>);
}

export default OopClassSolidExample;