import { ManType } from "./Destructuring";

let props: ManType;

beforeEach(() => {
   props = {
      name: 'Alexandr',
      age: 23,
      lessons: [{ title: '1' }, { title: '2' }, { title: '3', name: 'react' },],
      address: {
         street: {
            title: 'Lenina'
         }
      }
   }
})

test.skip('', () => {
   const { title } = props.address.street
   const { age, lessons } = props;

   expect(age).toBe(23)
   expect(lessons.length).toBe(2)
   expect(title).toBe('Lenina')
})

test.skip('', () => {
   const l1 = props.lessons[0];
   const l2 = props.lessons[1];

   // const [ls1, ls2] = props.lessons;

   expect(l1.title).toBe('1')
   expect(l2.title).toBe('2')

   const [, ls2, ...restLessons] = props.lessons

   // expect(ls1.title).toBe('1')
   // expect(ls2.title).toBe('2')
   expect(restLessons.length).toBe(1)
   expect(restLessons[0].title).toBe('3')
   expect(restLessons[0].name).toBe('react')

   expect(restLessons[0]).toStrictEqual({ title: '3', name: 'react' })
})