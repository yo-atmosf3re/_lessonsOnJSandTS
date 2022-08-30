function hairdresser(u: UserType) {
   u.age++;
}

type UserType = {
   name: string
   age: number
   address: { title: string }
}

test.skip('reference type test', () => {

   var user = {
      name: 'Alex',
      age: 23,
   }

   // hairdresser(user);

   expect(user.age).toBe(24)

   const superman = user;
   superman.age = 1000;
   expect(user.age).toBe(1000);
})

test.skip('array reference test', () => {

   var users = [
      {
         name: 'Alex',
         age: 23,
      },
      {
         name: 'Alex',
         age: 23,
      },
   ]

   var admins = users;

   admins.push({ name: 'Bandit', age: 10, })

   expect(users[2]).toEqual({ name: 'Bandit', age: 10, })
})

test.skip('value type test', () => {

   var usersCount = 100;

   var adminsCount = usersCount;
   adminsCount = adminsCount + 1;
   adminsCount++;
})

test.skip('reference type test', () => {

   const address = {
      title: "NN"
   }

   var user: UserType = {
      name: 'Alex',
      age: 23,
      address: address,
   }

   let addr = user.address;
   var user2: UserType = {
      name: 'Ksu',
      age: 23,
      address: address,
   }
   user2.address.title = 'Moscow'

   expect(user.address.title).toBe('Moscow');
})

test.skip('reference type array test', () => {

   const address = {
      title: "NN"
   }

   var user: UserType = {
      name: 'Alex',
      age: 23,
      address: address,
   }
   var user2: UserType = {
      name: 'Ksu',
      age: 23,
      address: address,
   }

   const users = [user, user2, { name: 'Olya', age: 13, address: address }]

   const admins = [user, user2]
   admins[0].name = 'Alexandr'

   expect(user.name).toBe('Alexandr');
   expect(users[0].name).toBe('Alexandr');
})

test.skip('sort array test', () => {
   const letters = ['c', 'd', 'a', 'z', 'e'];
   letters.sort()
   expect(letters).toEqual(['a', 'c', 'd', 'e', 'z'])
})

