import { copyFile } from "fs"

export type UserType = {
   name: string
   hair: number
   address: { city: string, house?: number }
}

export type LaptopType = {
   title: string
}

export type UserWithLaptopType = UserType & {
   laptop: LaptopType
}

export type UserWithBooksType = UserType & {
   books: Array<string>
}

export function makeHairStyle(u: UserType, power: number) {
   const copy = {
      ...u,
      hair: u.hair / power,
   }
   return copy;
}

export function userHasMoved(u: UserWithLaptopType, city: string) {
   return { ...u, address: { ...u.address, city: city } }
}

export function userHasMovedOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
   return { ...u, address: { ...u.address, house: house } }
}

export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string) {
   return { ...u, laptop: { ...u.laptop, title: laptop } }
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBook: string) {
   return { ...u, books: [...u.books, newBook] }
}

export const updateBook = (u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) => ({ ...u, books: [...u.books.map(i => oldBook === newBook ? newBook = oldBook : newBook)] })

export function removeBook(u: UserWithLaptopType & UserWithBooksType, delBook: string) {
   return { ...u, books: [...u.books.filter(i => i !== delBook)] }
}