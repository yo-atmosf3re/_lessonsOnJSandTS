const ages = [18, 20, 22, 1, 100, 98, 14];

const oldAges = [100];

export type CourseType = {
   title: string
   price: number
}

const courses = [
   { title: 'css', price: 100 },
   { title: 'css', price: 200 },
   { title: 'css', price: 150 },
]

const cheapPredicate = (courses: CourseType) => {
   return courses.price < 160;
}

const cheapCourses = [];