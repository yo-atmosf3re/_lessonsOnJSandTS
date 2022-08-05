import React, { useState } from "react"

export type ManType = {
   name: string
   age: number
   lessons: Array<{ title: string; name?: string }>
   address: {
      street: {
         title: string
      }
   }
}

type PropsType = {
   title: string
   man: ManType
}

export const ManComponent: React.FC<PropsType> = ({ title, man, ...props }) => {

   const [message, setMessage] = useState<string>('hello')

   return <div>
      <h3>{title}</h3>
      <hr />
      <div>
         {man.name}
      </div>
   </div>
}