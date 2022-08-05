
import { addCompanies, addNewBooksToUser, CompaniesType, makeHairStyle, removeBook, updateBook, updateCompanies, updateCompanyTitle, upgradeUserLaptop, userHasMoved, userHasMovedOtherHouse, UserType, UserWithBooksType, UserWithCompanyType, UserWithLaptopType } from './10_01'

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

test.skip('remove js books to user', () => {
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

test.skip('companies to user', () => {
   let user: UserWithLaptopType & UserWithCompanyType = {
      name: 'Alex',
      hair: 32,
      address: {
         city: 'NN',
         house: 12,
      },
      laptop: {
         title: 'Asus'
      },
      company: [
         { id: 1, title: 'EPAM' },
         { id: 2, title: 'Yandex' },
      ]
   }
   const movedUser = addCompanies(user, { id: 3, title: 'Google' })

   expect(user).not.toBe(movedUser)
   expect(user.company).not.toBe(movedUser.companies)
   expect(movedUser.companies[2].title).toBe('Google')
   expect(user.company.length).toBe(2)
})

test.skip('update companies to user', () => {
   let user: UserWithLaptopType & UserWithCompanyType = {
      name: 'Alex',
      hair: 32,
      address: {
         city: 'NN',
         house: 12,
      },
      laptop: {
         title: 'Asus'
      },
      company: [
         { id: 1, title: 'epam' },
         { id: 2, title: 'Yandex' },
      ]
   }
   const movedUser = updateCompanies(user, 1, 'EPAM') as UserWithLaptopType & UserWithCompanyType

   expect(user).not.toBe(movedUser)
   expect(user.company).not.toBe(movedUser.company)
   expect(movedUser.company[0].title).toBe('EPAM')

})

test('updet companies to user', () => {
   let companies = {
      'Alex': [{ id: 1, title: 'Google' }, { id: 2, title: 'Yandex' }],
      'Michle': [{ id: 1, title: 'Epam' }]
   }

   const copy: any = updateCompanyTitle(companies, 'Alex', 1, 'Yandex')

   expect(copy['Alex']).not.toBe(companies['Alex'])
   expect(copy['Michle']).toBe(companies['Michle'])
   expect(copy['Alex'][0].title).toBe('Yandex')

})
