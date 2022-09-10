import axios from 'axios';
import React from 'react'

function PromiseAgainExample() {
   // function getNumber() {
   //    const promise = new Promise((resolve, reject) => {
   //       setTimeout(() => {
   //          resolve(Math.random())
   //       }, 2000);
   //    })
   //    return promise;
   // }
   // getNumber().then(n => console.log(n))
   // getNumber().then(n => console.log(n))

   // function getConcoleLog() {
   //    return new Promise((res, rej) => {
   //       res(console.log('Starting loged'))
   //    })
   // }
   // getConcoleLog()
   //    .then(() => {
   //       setTimeout(() => {
   //          console.log('1')
   //       }, 2000);
   //    })
   //    .then(() => {
   //       setTimeout(() => {
   //          console.log('2')
   //       }, 3000);
   //    })
   //    .then(() => {
   //       setTimeout(() => {
   //          console.log('3')
   //       }, 4000);
   //    })

   // function wait(timeout: number) {
   //    return new Promise<void>((res, rej) => {
   //       setTimeout(() => {
   //          res()
   //       }, timeout)
   //    })
   // }
   // async function run() {
   //    await wait(1000)
   //    console.log(1)
   //    await wait(2000)
   //    console.log(2)
   //    await wait(2000)
   //    console.log(3)
   // }
   // run()

   const api = {
      async save() {
      },
      async read() {
         return { name: 'hello' }
      }
   }
   async function run() {
      await api.save()
      console.log('saved')
      let data = await api.read()
      console.log('read', data)
   }
   run()

   return (<div>
      Promise example, again...
   </div>);
}

export default PromiseAgainExample;