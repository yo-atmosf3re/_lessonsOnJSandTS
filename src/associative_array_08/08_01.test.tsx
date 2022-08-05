import { usersObj } from './08_01'

export type UsersType = {
   [key: string]: { id: number, name: string }
}

let users: UsersType

beforeEach(() => {
   users = {
      '101': { id: 101, name: 'Alex' },
      '3232312': { id: 3232312, name: 'Dima' },
      '1212': { id: 1212, name: 'Miha' },
      '1': { id: 1, name: 'Lena' },
   }
})

test.skip('should update corresponding user', () => {
   users['1'].name = 'Elena'

   expect(users['1']).toEqual({ id: 1, name: 'Elena' })
})

test.skip('should delete corresponding user', () => {
   delete users['1']

   expect(users['1']).toBeUndefined()
})