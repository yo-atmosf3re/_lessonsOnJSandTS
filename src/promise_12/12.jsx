import axios from 'axios';
import * as React from 'react';
import { useState, useEffect } from 'react'

// * Promises - специальный объект. Содержит в себе спецаильное состояние - fulfilled, pending, rejected.
// ? Внутрь промиса помещается какая-то логика, а мы уже сами решаем успешной такая логика будет или нет с помощью специальных функций resolve и reject. Resolve делает состояние промиса fulfilled, что ознает, что код внутри промиса выполнен успешно. Reject ,тем временем, вызывает ошибку, если код который выполнился, вызывает функцию reject. Reject и resolve это параметры, которые приходят в callback самого промиса и эти параметры настроены самим движком языка.
// * Promise нужны для вариативности выполнения кода, для настройки более гибкой логики. Подходят для реализации запросов на сервер, либо асинхронного кода.
// ? У Promise есть три метода: then - когда промис выполнен успешно (его состояние fulfilled), catch - когда промис выполнен с ошибкой (его состояние rejected), finally - данный метод выполняется в любом случае, в независимости от состояния промиса (fulfilled или rejected, кроме состояние pending)
// * Все три мтеода промиса возвращают сам промис, в связи с этим можно сделать цепочку промисов, например: ( promise.then(() => {}).catch(() => {}).finally(() => {}) )
// ? Async/await - async указывается возле параметра функции, это говорит о том, что функция будет возвращать промис. Внутрь такой функции можно поместить логику, которая заменит цепочку из промисов с помощью инструкции await, которая указывает на то, что код зарезолвится только тогда, когда у промиса сменится состояние.
// * У конструктора Promise есть статические методы: .all(), .allSettled(), .race(), .reject(), resolve(). 
// * reject - возвращает сразу зареджекченный промис. Можно присвоить переменной, которая будет таким промисом. resolve - возвращает сразу зарезолвленный промис. Можно присвоить переменной, которая будет таким промисом. all([]) - принимает все промисы в массиве, которые должны быть зарезолвлены, ждёт когда они будут зарезолвлены. Такие промисы можно передать дальше в then и дальше с ним работать ( Promise.all([p1, p2]).then((values) => {console.log(values)}) ), но такой метод не обрабатывает ошибки, и если будет ошибка вовремя then, то код сразу упадёт в cath. .allSettled() - синтаксис такой же как у .all, но возвращает вообще все результаты - и реджект, и резолв, а так же возвращает массив промисов. .race - возвращает только тот промис, который зарезолвился самый первый.


function PromiseExample() {
   const getDataFromServer = (url) => {
      return new Promise((res, rej) => {
         if (!url.startsWith('htttp')) {
            rej('Invalid url', null)
         } else {
            setTimeout(() => {
               res(null, [{ name: 'Alex' }])
            }, 1000);
         }
      })
   }

   const getData = () => {
      getDataFromServer('http:/api.com/users')
         .then(users => {
            return getDataFromServer('http:/api.com/users/2')
         }).then(user => {
            return getDataFromServer('http:/api.com/users/2/books')
         }).then(books => {
            return getDataFromServer('http:/api.com/users/2/books/10')
         }).then(pages => {
            return getDataFromServer('http:/api.com/users/2/books/pages/10')
         }).catch((err) => {
            console.log(err)
         })
   }

   const getDataAsync = async () => {
      try {
         const users = await getDataFromServer('http:/api.com/users')
         const user = await getDataFromServer('http:/api.com/users/2')
         const books = await getDataFromServer('http:/api.com/users/2/books')
         const book = await getDataFromServer('http:/api.com/users/2/books/10')
      } catch (e) {
         console.log(e)
      } finally {

      }
   }






   // const promise = new Promise((resolve, reject) => {
   //    setTimeout(() => {
   //       reject('Hello')
   //    }, 1000);
   // })
   // let a = 5;
   // let b = 0;
   // const prom = new Promise((resolve, reject) => {
   //    function sum(a, b) {
   //       return a + b
   //    }
   //    let c = sum(a, b)
   //    if (c > 5) {
   //       resolve(`sum a, b - ${c}`)
   //    } else {
   //       reject('sum a, b incorrect')
   //    }
   // })
   // console.log(prom)

   // const api = {
   //    getTodolists() {
   //       return fetch('https://api.com')
   //    }
   // }

   // function Users() {
   //    const [tl, setTl] = useState(null);
   //    const [error, setError] = useState(null);
   //    useEffect(() => {
   //       setIsLoading(true)
   //       api.getTodolists()
   //          .then((tl) => {
   //             setTl(tl)
   //          })
   //          .catch((err) => {
   //             setError(err)
   //          })
   //          .finally(() => {
   //             setIsLoading(false)
   //          })
   //    })
   // }
   // const promise = new Promise((resolve, reject) => {
   //    setTimeout(() => {
   //       resolve([{ title: 'Monday', name: 'Alex' }])
   //       // reject('Some error')
   //    }, 2000)
   // })

   // promise.then((data) => {
   //    console.log(data)
   //    // throw new Error('Test error')
   // }).catch((error) => {
   //    console.log(error)

   // }).finally(() => {
   //    console.log("finally")
   // })








   // const api = {
   //    getTodos() {
   //       return axios.get('https://jsonplaceholder.typicode.com/todos/1').then(res => res.data)
   //    }
   // }

   // const [td, setTd] = useState([])

   // const getData = () => {
   //    api.getTodos()
   //       .then((todos) => {
   //          console.log(todos)
   //          setTd([...td, todos])
   //       })
   //       .catch((error) => {
   //          console.log(error)
   //       })
   // }

   return (<div>
      {/* <button onClick={getData}>click</button>
      {
         td.map(t => <div>{t.title}</div>)
      } */}
      Promise
   </div>);
}

export default PromiseExample;