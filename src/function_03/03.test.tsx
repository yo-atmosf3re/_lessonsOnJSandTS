import { StudentType } from "../object_02/02"
import { addSkill, doesStudentLiveIn, makeStudentActive } from "./03";

let student: StudentType;
beforeEach(() => {
   student = {
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
})

test.skip('new tech skill should be added', () => {
   expect(student.technologies.length).toBe(4);
   addSkill(student, 'Angular');
   expect(student.technologies.length).toBe(5);
   expect(student.technologies[3].title).toBe('Angular');
})

test.skip('student should be made active', () => {
   expect(student.isActive).toBe(false);
   makeStudentActive(student);
   expect(student.isActive).toBe(true);
})

test.skip('does student lives in city?', () => {
   let result = doesStudentLiveIn(student, 'Moscow');
   let result2 = doesStudentLiveIn(student, 'minsk');
   expect(result).toBe(false)
   expect(result2).toBe(true);
})