import axios from 'axios';
import React from 'react'

function PromiseAgainExample() {
   function getNumber() {
      const promise = new Promise((resolve, reject) => {
         setTimeout(() => {
            resolve(Math.random())
         }, 2000);
      })
      return promise;
   }
   getNumber().then(n => console.log(n))
   getNumber().then(n => console.log(n))
   return (<div>
      Promise example, again...
   </div>);
}

export default PromiseAgainExample;