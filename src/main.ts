// type A = {
//   age?: number | string;
//   nick: string;
//   info: [] | {};
//   photo?: string | null;
// };
//
// const a1: A = {
//   age: 10,
//   nick: 'mynick',
//   info: [1, 100],
//   photo: 'string',
// };
//
// const a2: A = {
//   age: '10 years',
//   nick: '',
//   info: { id: 100 },
//   photo: null,
// };
//
// const a3: A = {
//   nick: '       ',
//   info: ['secret', 'key'],
// };
//
// const a4: A = {
//   nick: '',
//   info: {},
// };

// type A = {
//   first: string;
//   second: {
//     third: string;
//     fourth?: string;
//     fifth: {
//       sixth?: {
//         tenth: {
//           twelfth?: {
//             thirteenth: {
//               fifteenth: {
//                 sixteenth?: {
//                   last: 'Достучались';
//                 };
//               };
//             };
//             fourteenth: string;
//           };
//         };
//         eleventh: string;
//       };
//       seventh: number;
//       eight: string;
//     };
//   };
// };
//
// const a: A = {
//   first: 'z',
//   second: {
//     third: 'f',
//     fourth: 'a',
//     fifth: {
//       sixth: {
//         tenth: {
//           twelfth: {
//             thirteenth: {
//               fifteenth: {
//                 sixteenth: {
//                   last: 'Достучались',
//                 },
//               },
//             },
//             fourteenth: 's',
//           },
//         },
//         eleventh: 'kk',
//       },
//       seventh: 8,
//       eight: 'b',
//     },
//   },
// };
//
// console.log(a.second.fifth.sixth?.tenth.twelfth?.thirteenth.fifteenth.sixteenth?.last);

// import chalk from 'chalk';
//
// const stars = [];
// const count = 10;
// const colorName = [chalk.blue, chalk.green, chalk.red];
//
// for (let i = 0; i < count; i++) {
//   const color = colorName[i % 3];
//
//   stars.push(color('*'));
// }
// console.log(stars.join(' - '));

// type cars = 'BMW' | 'AUDI' | 'MERSEDES';
//
// type numbersOfCars = 2 | 4 | 6;
//
// type shop = {
//   storeName: string;
//   cars: cars;
//   numbers: numbersOfCars;
// };

// import { faker } from '@faker-js/faker';
// import chalk from 'chalk';
//
// const colorName = [chalk.blue, chalk.green, chalk.red];
//
// type users = {
//   name: string;
//   email: string;
//   sexType: string;
//   dateOfBirth: string;
// };
//
// const user: users = {
//   name: faker.person.fullName(),
//   email: faker.internet.email(),
//   sexType: faker.person.sexType(),
//   dateOfBirth: faker.date.birthdate().toString(),
// };
//
// for (const userKey in user) {
//   const nuberOfRandomColor = Math.round(Math.random() * 2);
//   const randomColor = colorName[nuberOfRandomColor];
//   console.log(randomColor(user[userKey as keyof users]));
// }

// import { faker } from '@faker-js/faker';
//
// enum Color {
//   green,
//   blue,
//   red,
// }
//
// type User = {
//   name: string;
//   color: string;
//   id: string;
//   email: string;
// };
//
// function createRandomUser(): User {
//   return {
//     name: faker.person.fullName(),
//     color: faker.helpers.arrayElement(['blue', 'green', 'red']),
//     id: faker.string.uuid(),
//     email: faker.internet.email(),
//   };
// }
//
// const user = createRandomUser();
// const user2 = createRandomUser();
// const user3 = createRandomUser();
// const users = [user, user2, user3];
//
// for (const user1 of users) {
//   // eslint-disable-next-line no-debugger
//   debugger;
//   if (user1.color === Color[Math.round(Math.random() * 2)]) {
//     console.log(user1);
//   }
// }

// console.log(Color[Math.round(Math.random() * 2)]);
// console.log(users);

// const ncd = (a: number): number | void => {
//   for (let i = 2; i < a; i++) {
//     if (!(a % i)) {
//       // Находим наименьший делитель
//       return a / i; // Возвращаем наибольший делитель
//       break;
//     }
//   }
//   return console.log('Чисто простое');
// };
//
// console.log(ncd(11));

// type A = {
//   number: number;
//   number1: number;
//   number2: number;
//   number3: number;
// };
// const sumAll = (Numbers1: A): number => {
//   const values = Object.values(Numbers1);
//   let sum = 0;
//   for (const value of values) {
//     sum += value;
//   }
//   // let sum: number = 0;
//   // for (const numbers1Key in Numbers1) {
//   //   const value = Numbers1[numbers1Key as keyof A]; // Не понял этого момента
//   //   sum += value;
//   // }
//   return sum;
// };
//
// const Numbers1: A = {
//   number: 2,
//   number1: 3,
//   number2: 6,
//   number3: 7,
// };
// // console.log(Object.values(Numbers1));
// console.log(sumAll(Numbers1));

// import { faker } from '@faker-js/faker/locale/en';
//
// type user = {
//   name: string;
//   age?: number | null;
// };
//
// const stastFound = (people: user[]): number | string | void => {
//   for (const person of people) {
//     if (person.name === 'stas') {
//       return person.age ?? 'Возраста нет';
//     }
//   }
//   return console.log('Объект не найден');
// };
//
// const firstMan: user = {
//   name: faker.person.fullName(),
// };
//
// const secondMan: user = {
//   name: 'stas',
//   age: 334,
// };
// const thirdMan: user = {
//   name: faker.person.fullName(),
//   age: 22,
// };
//
// const people = [firstMan, secondMan, thirdMan];
//
// console.log(stastFound(people));

// import dayjs from 'dayjs';
//
// type VoidCallback = () => void;
//
// const timeDate = (Date: string, cbFuture: VoidCallback, cbPast: VoidCallback) => {
//   const now = dayjs();
//   if (now.isAfter(Date, 'day')) {
//     cbPast();
//   }
//   if (now.isBefore(Date, 'day')) {
//     cbFuture();
//   }
//   return console.log();
// };
//
// const cbFuture = () => {
//   console.log(`Это явно будущее`);
// };
//
// const cbPast = () => {
//   console.log(`Вы в прошлом`);
// };
//
// const datee = '2025-05-12T10:00:00.000Z';
// console.log(timeDate(datee, cbFuture, cbPast));
const array = [
  [1, 2, 9],
  [2, 3, 6],
  [5, 5, 25],
  [8, 3, 222],
  [0, 0, 0],
];

const checkResult = (array: number[][]) => {
  let count = 0;
  for (const never of array) {
    // @ts-ignore
    const result: boolean = never[0] * never[1] === never[2];
    console.log(`Выражение ${array[count]}`, result);
    count++;
  }
};

console.log(checkResult(array));
