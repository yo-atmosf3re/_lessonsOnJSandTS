import React from 'react'


function EventLoopExample() {
   function foo() {
      while (true) {
         console.log(1)
      }
   }
   return (<div style={{ textAlign: 'center', fontSize: '40px' }}>
      Event Loop example!
      <button onClick={foo}>click</button>
   </div>);
}

export default EventLoopExample;