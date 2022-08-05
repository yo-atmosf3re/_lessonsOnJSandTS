import { ManType } from "./05_01";

let people: Array<ManType> = []

beforeEach(() => {
   people = [
      { name: 'Ivan Ivanov', age: 33 },
      { name: 'Alexandr Grozov', age: 24 },
      { name: 'Alex Mihailov', age: 18 },
   ]
})

test.skip('should get array of greeting messages', () => {
   const messages = people.map(man => `Hello ${man.name.split(' ')[0]}. Welcome to NY!`)
   expect(messages[0]).toBe('Hello Ivan. Welcome to NY!')
   expect(messages[1]).toBe('Hello Alexandr. Welcome to NY!')
   expect(messages[2]).toBe('Hello Alex. Welcome to NY!')
})
