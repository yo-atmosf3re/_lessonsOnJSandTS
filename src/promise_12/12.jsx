import * as React from 'react';


// Promises - специальный объект. Содержит в себе спецаильное состояние - fulfilled, pending, rejected.
// Внутрь промиса помещается какая-то логика, а мы уже сами решаем успешной такая логика будет или нет с помощью специальных функций resolve и reject. Resolve делает состояние промиса fulfilled, что ознает, что код внутри промиса выполнен успешно. Reject ,тем временем, вызывает ошибку, если код который выполнился, вызывает функцию reject. Reject и resolve это параметры, которые приходят в callback самого промиса и эти параметры настроены самим движком языка.
// Promise нужны для вариативности выполнения кода, для настройки более гибкой логики. Подходят для реализации запросов на сервер, либо асинхронного кода.
// У Promise есть три метода: then - когда промис выполнен успешно (его состояние fulfilled), catch - когда промис выполнен с ошибкой (его состояние rejected), finally - данный метод выполняется в любом случае, в независимости от состояния промиса (fulfilled или rejected, кроме состояние pending)

function PromiseExample() {
   // const getDataFromServer = (url, cb) => {
   //    if (!url.startWith('htttp')) {
   //       cb('Invalid url', null)
   //    } else {
   //       setTimeout(() => {
   //          cb(null, [{ name: 'Alex' }])
   //       }, 1000);
   //    }
   // }
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
   //       return new Promise((res, rej) => {
   //          setTimeout(() => {
   //             rej('Hello')
   //          }, 2000)
   //       })
   //    }
   // }

   // function Users() {
   //    useEffect(() => {
   //       const response = api.getTodolists()
   //    })
   // }

   const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve([{ title: 'Monday', name: 'Alex' }])
         // reject('Some error')
      }, 2000)
   })

   promise.then((data) => {
      console.log('Then')
      console.log(data)
   })
   promise.catch((error) => {
      console.log(error)
      console.log('Catch')
   })
   promise.finally(() => {
      console.log('Finally')
   })


















   return (<div>
      Promise
   </div>);
}

export default PromiseExample;