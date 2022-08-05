
import { addNewBooksToUser, makeHairStyle, removeBook, updateBook, upgradeUserLaptop, userHasMoved, userHasMovedOtherHouse, UserType, UserWithBooksType, UserWithLaptopType } from './10_01'

test.skip('reference type test', () => {
   let user: UserType = {
      name: 'Alex',
      hair: 32,
      address: {
         city: 'NN'
      }
   }
   const awesomeUser = makeHairStyle(user, 2)

   user.address.city = 'Moscow';

   expect(awesomeUser.hair).toBe(16)
   expect(user.hair).toBe(32)
   expect(awesomeUser.address).toBe(user.address)
})

test.skip('change address', () => {
   let user: UserWithLaptopType = {
      name: 'Alex',
      hair: 32,
      address: {
         city: 'NN'
      },
      laptop: {
         title: 'Asus'
      }
   }
   const movedUser = userHasMoved(user, 'Moscow')

   user.address.city = 'Moscow';

   expect(user).not.toBe(movedUser)
   expect(user.address).not.toBe(movedUser.address)
   expect(user.laptop).toBe(movedUser.laptop)
   expect(movedUser.address.city).toBe('Moscow')

   expect(user.hair).toBe(32)
})

test.skip('upgrade laptop to macbook', () => {
   let user: UserWithLaptopType = {
      name: 'Alex',
      hair: 32,
      address: {
         city: 'NN'
      },
      laptop: {
         title: 'Asus'
      }
   }
   const movedUser = upgradeUserLaptop(user, 'Macbook')

   expect(user).not.toBe(movedUser)
   expect(user.address).toBe(movedUser.address)
   expect(user.laptop).not.toBe(movedUser.laptop)
   expect(movedUser.laptop.title).toBe('Macbook')
   expect(user.laptop.title).toBe('Asus')
})

test.skip('upgrade laptop to macbook', () => {
   let user: UserWithLaptopType & UserWithBooksType = {
      name: 'Alex',
      hair: 32,
      address: {
         city: 'NN',
         house: 12,
      },
      laptop: {
         title: 'Asus'
      },
      books: ['css', 'html', 'js', 'react']
   }
   const movedUser = userHasMovedOtherHouse(user, 13)

   expect(user).not.toBe(movedUser)
   expect(user.books).toBe(movedUser.books)
   expect(user.address).not.toBe(movedUser.address)
   expect(movedUser.laptop.title).toBe('Asus')
   expect(movedUser.address.house).toBe(13)
})

test.skip('add new books to user', () => {
   let user: UserWithLaptopType & UserWithBooksType = {
      name: 'Alex',
      hair: 32,
      address: {
         city: 'NN',
         house: 12,
      },
      laptop: {
         title: 'Asus'
      },
      books: ['css', 'html', 'js', 'react']
   }
   const movedUser = addNewBooksToUser(user, 'restAPI')

   expect(user).not.toBe(movedUser)
   expect(user.books).not.toBe(movedUser.books)
   expect(movedUser.books[4]).toBe('restAPI')
   expect(user.books.length).toBe(4)
})

test.skip('add new books to user', () => {
   let user: UserWithLaptopType & UserWithBooksType = {
      name: 'Alex',
      hair: 32,
      address: {
         city: 'NN',
         house: 12,
      },
      laptop: {
         title: 'Asus'
      },
      books: ['css', 'html', 'js', 'react']
   }
   const movedUser = updateBook(user, 'css', 'ts')

   expect(user).not.toBe(movedUser)
   expect(user.books).not.toBe(movedUser.books)
   expect(movedUser.books[2]).toBe('ts')
   expect(user.books.length).toBe(4)
})

test('remove js books to user', () => {
   let user: UserWithLaptopType & UserWithBooksType = {
      name: 'Alex',
      hair: 32,
      address: {
         city: 'NN',
         house: 12,
      },
      laptop: {
         title: 'Asus'
      },
      books: ['css', 'html', 'js', 'react']
   }
   const movedUser = removeBook(user, 'js')

   expect(user).not.toBe(movedUser)
   expect(user.books).not.toBe(movedUser.books)
   expect(movedUser.books[2]).toBe('react')
   expect(user.books.length).toBe(4)
})