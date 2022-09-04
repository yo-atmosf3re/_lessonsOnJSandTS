import * as React from 'react';


// Promises - 

function PromiseExample() {
   const getDataFromServer = (url, cb) => {
      if (!url.startWith('htttp')) {
         cb('Invalid url', null)
      } else {
         setTimeout(() => {
            cb(null, [{ name: 'Alex' }])
         }, 1000);
      }
   }
   // getDataFromServer('http://api.com/users', (err, data) => {
   //    if (err) {
   //       throw new Error(err)
   //    } else {
   //       console.log('Response from server: ', data)
   //       getDataFromServer('http://api.com/users', (err, data) => {
   //          if (err) {
   //             throw new Error(err)
   //          } else {
   //             console.log('Response from server: ', data)
   //             getDataFromServer('http://api.com/users', (err, data) => {
   //                if (err) {
   //                   throw new Error(err)
   //                } else {
   //                   console.log('Response from server: ', data)
   //                   getDataFromServer('http://api.com/users', (err, data) => {
   //                      if (err) {
   //                         throw new Error(err)
   //                      } else {
   //                         console.log('Response from server: ', data)
   //                         getDataFromServer('http://api.com/users', (err, data) => {
   //                            if (err) {
   //                               throw new Error(err)
   //                            } else {
   //                               console.log('Response from server: ', data)
   //                            }
   //                         })
   //                      }
   //                   })
   //                }
   //             })
   //          }
   //       })
   //    }
   // })

   // const promise = new Promise((resolve, reject) => {
   //    setTimeout(() => {
   //       reject('Hello')
   //    }, 1000);
   // })
   let a = 5;
   let b = 0;
   const prom = new Promise((resolve, reject) => {
      function sum(a, b) {
         return a + b
      }
      let c = sum(a, b)
      if (c > 5) {
         resolve(`sum a, b - ${c}`)
      } else {
         reject('sum a, b incorrect')
      }
   })
   console.log(prom)






















   return (<div>
      Promise
   </div>);
}

export default PromiseExample;