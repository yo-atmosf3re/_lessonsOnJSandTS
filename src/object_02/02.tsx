type LocalCityType = {
   title: string
   district: string
}

type AddressType = {
   streetTitle: string
   city: LocalCityType
}

export type StudentType = {
   id: number
   name: string
   age: number
   isActive: boolean
   address: AddressType
   technologies: Array<TechnologiesType>
}

type TechnologiesType = {
   id: number
   title: string
}

export const student: StudentType = {
   id: 0,
   name: 'Alex',
   age: 32,
   isActive: false,
   address: {
      streetTitle: 'Lenina',
      city: {
         title: 'NN',
         district: 'Leninskiy',
      }
   },
   technologies: [
      {
         id: 1,
         title: "CSS"
      },
      {
         id: 2,
         title: 'HTML',
      },
      {
         id: 3,
         title: "JS",
      },
      {
         id: 4,
         title: "React",
      },
   ]
}

console.log(student.technologies[1].title);