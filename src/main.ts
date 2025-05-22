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
// const array = [
//   [1, 2, 9],
//   [2, 3, 6],
//   [5, 5, 25],
//   [8, 3, 222],
//   [0, 0, 0],
// ];
//
// const checkResult = (array: number[][]) => {
//   let count = 0;
//   for (const never of array) {
//     // @ts-ignore
//     const result: boolean = never[0] * never[1] === never[2];
//     console.log(`Выражение ${array[count]}`, result);
//     count++;
//   }
// };
//
// console.log(checkResult(array));
// type count = { [key: string]: number };
//
// export const countTypes = (...args: any[]): count => {
//   const counter: count = {};
//   for (const arg of args) {
//     const type = typeof arg;
//     if (counter[type] === undefined) {
//       counter[type] = 0;
//     }
//     counter[type]++;
//   }
//   return counter;
// };
// console.log(countTypes(3, true, 'a', 1, {}, () => {}, 4, [], undefined, false, 0, undefined, {}, ''));

// type newWord = { [key: string]: string };
//
// const source = 'the quick brown fox jumps over the lazy dog';
// const custom = 'oak lgypb wited zts qgfch tuki oak mjrn xtv';
// const converted = 'ntg ajuk fjbydv vikjo citvikhh yd mkjidydv qjujhpiyco. ptdvijoh!';
//
// const comparison: newWord = {};
// let count = 0;
// let result = '';
//
// for (const sourceElement of source) {
//   // Ключ это последовательные буквы из custom, поля это буквы из оригинала
//   comparison[custom[count]] = sourceElement;
//   count++;
// }
//
// for (const convertedElement of converted) {
//   result += comparison[convertedElement] ?? convertedElement;
// }
// console.log(result);

// const testCases = [
//   [10000, { name: 'День рождения.mp4', size: 1, units: 'gb' }, { speedPerSecond: 100, units: 'kb' }],
//   [1024, { name: 'Отчёт.docx', size: 1023443, units: 'kb' }, { speedPerSecond: 1, units: 'mb' }],
//   [1, { name: 'Голосовое сообщение.mp3', size: 1, units: 'b' }, { speedPerSecond: 1000, units: 'gb' }],
//   [86402, { name: 'Корги.png', size: 100.45, units: 'mb' }, { speedPerSecond: 1162.6, units: 'b' }],
//   [100450000000, { name: 'GTA V', size: 100.45, units: 'gb' }, { speedPerSecond: 1, units: 'b' }],
// ] as const;
//
// type fileInfo = {
//   name: string;
//   size: number;
//   units: string;
// };
//
// type speedInfo = {
//   speedPerSecond: number;
//   units: string;
// };
//
// const convertToByti = (size: number, units: string): number => {
//   if (units === 'gb') {
//     return size * Math.pow(10, 9);
//   }
//   if (units === 'mb') {
//     return size * Math.pow(10, 6);
//   }
//   if (units === 'kb') {
//     return size * Math.pow(10, 3);
//   }
//   return size;
// };
//
// const downloadTimeCalculator = (file: fileInfo, speed: speedInfo) => {
//   const fileToBites = convertToByti(file.size, file.units);
//   const sppedToBites = convertToByti(speed.speedPerSecond, speed.units);
//
//   return fileToBites / sppedToBites;
// };
//
// /**
//  * Цикл для проверки каждого тест-кейса по очереди
//  */
// for (const testCase of testCases) {
//   const [expected, file, speed] = testCase;
//
//   const result = downloadTimeCalculator(file, speed);
//
//   if (result === expected) {
//     console.log(`Расчеты верны для файла "${file.name}"! \tРезультат: ${result}  | Ожидаемый: ${expected}`);
//   } else {
//     console.log(`Расчеты НЕВЕРНЫ для файла "${file.name}"! \tРезультат: ${result}  | Ожидаемый: ${expected}`);
//   }
// }

// const tests = [
//   ['топот', true],
//   ['пот', false],
//   ['потоп', true],
//   ['кабак', true],
//   ['(())', false],
//   ['табат', true],
//   ['abab', false],
//   ['топпот', true],
//   ['()()', true],
//   ['', true],
//   ['123321', true],
//   ['())(', true],
//   ['abba', true],
//   ['а роза упала на лапу азора', false], // Пробелы не совпадают!
// ] as const;
//
// const isPalindrome = (word: string): boolean => {
//   for (let i = 0; i <= Math.floor(word.length / 2); i++) {
//     if (word[i] !== word[word.length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// };
//
// for (const test of tests) {
//   const [word, expected] = test;
//
//   const result = isPalindrome(word);
//   if (result !== expected) {
//     console.log(`Для слова "${word}" тест не прошел. Ожидалось: ${expected} | Получено: ${result}`);
//     continue;
//   }
//
//   console.log(`Слово "${word}" успешно. Результат: ${result}`);
// }
// type figure = {
//   name: string;
//   type: string;
//   color: string;
//   border: string | null;
//   size: string;
// }
//
//
// const first: figure = {
//   name: 'Фигура №1',
//   type: 'square',
//   color: 'red',
//   border: 'black',
//   size: 'large',
// };
//
// const second: figure = {
//   name: 'Фигура №2',
//   type: 'square',
//   color: 'red',
//   border: null,
//   size: 'large',
// };
//
// const third: figure = {
//   name: 'Фигура №3',
//   type: 'circle',
//   color: 'red',
//   border: 'black',
//   size: 'large',
// };
//
// const fourth: figure = {
//   name: 'Фигура №4',
//   type: 'square',
//   color: 'green',
//   border: 'black',
//   size: 'large',
// };
//
// const fifth: figure = {
//   name: 'Фигура №5',
//   type: 'square',
//   color: 'red',
//   border: 'black',
//   size: 'small',
// };
//
// const figures = [first, second, third, fourth, fifth];
// const counter =  {};
//
// for (const figure of figures)
//   for (const figureKey in figure) {
//     if (figureKey === 'name'){ // Если ключ ame пропускаем
//       continue
//     }
//     // @ts-ignore
//     const nameType = figure[figureKey]; // берем поле из ключа
//     // @ts-ignore
//     if (!counter[nameType]){
//       const name2 = figureKey;// Если такого поля в каинтере нет то создаем ключ по полю и поле с массивом b названием типа
//       // @ts-ignore
//       counter[nameType] = [name2]
//     }
//     // @ts-ignore
//     // @ts-ignore
//     const nameOfFigure = ${ // @ts-ignore
//       figure.name};
//     counter[nameType].push({name: nameOfFigure});
//   }
//
// for (const counterKey in counter) {
//   // @ts-ignore
//   if (counter[counterKey].length === 2){
//     // @ts-ignore
//     console.log(counter[counterKey][0],counter[counterKey][1].name);
//   }
// }
// console.log(counter);

// import { faker } from '@faker-js/faker/locale/en';
//
// type peuple = {
//   name: string;
//   age: number;
//   gender: string;
// };
//
// const Persons = (number: number): peuple[] => {
//   const multyHuman: peuple[] = [];
//   for (let i = 0; i < number; i++) {
//     const human: peuple = {
//       name: faker.person.fullName(),
//       age: Math.round(Math.random() * 100),
//       gender: faker.person.sex(),
//     };
//     multyHuman.push(human);
//   }
//   return multyHuman;
// };
//
// const testGroup = Persons(5);
//
// const test = testGroup.find((person) => person.age > 10);
//
// console.log(test);

// const storage = [
//   { age: 10, name: 'first' },
//   { age: 20, name: 'second' },
//   { age: 30, name: 'third' },
//   { age: 40, name: 'fourth' },
// ];
//
// const smartSearch = (arr: any[], property: any, value: any) => {
//   const resulr = arr.find((person) => person[property] === value);
//   return resulr;
// };
//
// const person1 = smartSearch(storage, 'age', 30);
// console.log(person1);
// // { age: 30, name: 'third' }
//
// const person2 = smartSearch(storage, 'age', 10);
// console.log(person2);
// // { age: 10, name: 'first' }
//
// const person3 = smartSearch(storage, 'name', 'second');
// console.log(person3);
// // { age: 20, name: 'second' }

// type User = {
//   name: string;
//   age: number;
// };
//
// const users: User[] = [
//   { name: 'Пользователь-1', age: 1 },
//   { name: 'Пользователь-21', age: 21 },
//   { name: 'Пользователь-30', age: 30 },
//   { name: 'Пользователь-14', age: 14 },
//   { name: 'Пользователь-18', age: 18 },
//   { name: 'Пользователь--1', age: -1 },
//   { name: 'Пользователь-1', age: 1 },
// ];
//
// const deleteUser = users.filter((user) => user.age >= 18);
// console.log(deleteUser);
// /* Ожидаемый вывод:
// [
//   { name: 'Пользователь-21', age: 21 },
//   { name: 'Пользователь-30', age: 30 },
//   { name: 'Пользователь-18', age: 18 },
// ]
//  */

// const storage = [
//   { age: 10, name: 'first' },
//   { age: 20, name: 'second' },
//   { age: 30, name: 'third' },
//   { age: 40, name: 'fourth' },
// ];
//
// const storage2 = storage.map((person) => {
//   return {
//     age: person.name,
//     name: person.age,
//     reversed: true,
//   };
// });
//
// console.log(storage2);
// /* Ожидаемый вывод:
// [
//   { age: 'first', name: 10, reversed: true },
//   { age: 'second', name: 20, reversed: true },
//   { age: 'third', name: 30, reversed: true },
//   { age: 'fourth', name: 40, reversed: true }
// ]
// */

// const sort = (array: ??[], key: ??, direction: ??) => {
//   const newArray = array;
//
//   // @ts-ignore
//   newArray.sort((a, b) =>{
//     if (a[key] > b[key]) {
//       return direction === 'desc' ? -1 : 1;
//     }
//     if (a[key] < b[key]) {
//       return direction === null ? 1 : -1;
//     }
//     return 0;
//
//   }
//   // @ts-ignore
//   return newArray
// };
//
// type User = { id: number; age: number; name: string };
//
// const users: User[] = [
//   { id: 1, age: 10, name: 'zxc' },
//   { id: 3, age: 20, name: 'juk' },
//   { id: 6, age: 2, name: 'aa' },
//   { id: 9, age: 1, name: 'ab' },
//   { id: 2, age: 5, name: 'zz' },
// ];
//
// // @ts-ignore
// const sortedByIdAsc = sort(users, 'id');
// console.log(sortedByIdAsc);
// /* Отсортированы по увеличению id
// [
//   { id: 1, age: 10, name: 'zxc' },
//   { id: 2, age: 5, name: 'zz' },
//   { id: 3, age: 20, name: 'juk' },
//   { id: 6, age: 2, name: 'aa' },
//   { id: 9, age: 1, name: 'ab' }
// ]
//  */
//
// const sortedByNameDesc = sort(users, 'name', 'desc');
// console.log(sortedByNameDesc);
// /* Отсортированы по уменьшению имени
// [
//   { id: 2, age: 5, name: 'zz' },
//   { id: 1, age: 10, name: 'zxc' },
//   { id: 3, age: 20, name: 'juk' },
//   { id: 9, age: 1, name: 'ab' },
//   { id: 6, age: 2, name: 'aa' }
// ]
//  */
//
// const sortedByAgeDesc = sort(users, 'age', 'desc');
// console.log(sortedByAgeDesc);
// /* Отсортированы по уменьшению возраста
// [
//   { id: 3, age: 20, name: 'juk' },
//   { id: 1, age: 10, name: 'zxc' },
//   { id: 2, age: 5, name: 'zz' },
//   { id: 6, age: 2, name: 'aa' },
//   { id: 9, age: 1, name: 'ab' }
// ]
//  */
//
// console.log(users);
// /* ПЕРВОНАЧАЛЬНЫЙ МАССИВ USERS ОСТАЛСЯ НЕ ТРОНУТЫМ!
// [
//   { id: 1, age: 10, name: 'zxc' },
//   { id: 3, age: 20, name: 'juk' },
//   { id: 6, age: 2, name: 'aa' },
//   { id: 9, age: 1, name: 'ab' },
//   { id: 2, age: 5, name: 'zz' }
// ]
//  */

// const deduplicate = (word: string) => {
//   const massiveWord = word.split(''); // Создаем массив из слова
//   return massiveWord.reduce((acc: string, cur: string) => {
//     return acc.includes(cur) ? acc : acc + cur;
//   }, '');
// };
//
// const result = deduplicate('uuunbbeliaaaaveeabbbblllllee');
// console.log(result); // unbeliaveable

/*
Вам даны 2 пользователя банковской системы.
У каждого пользователя есть список проведенных операций по банковской карте.
Каждая операция может быть как положительной (пополнение), так и отрицательной (снятие).

При открытии счета у пользователя есть стартовый баланс - он может быть как отрицательным, так и положительным.

Напишите функцию calculateBalanceForUser(user: User): number, которая принимает на вход объект типа User,
а возвращает число - текущий баланс пользователя.
С помощью reduce просто просуммируйте стартовый баланс и все операции.
 */

// type Transaction = {
//   id: number;
//   diff: number;
// };
//
// type User = {
//   id: number;
//   name: string;
//   startBalance: number;
//   transactions: Transaction[];
// };
//
// const alexander: User = {
//   id: 37,
//   name: 'AleX',
//   startBalance: 0,
//   transactions: [
//     { id: 8, diff: 100 },
//     { id: 30, diff: -50 },
//     { id: 23, diff: 250 },
//   ],
// };
//
// const max: User = {
//   id: 40,
//   name: 'MaX',
//   startBalance: -3,
//   transactions: [
//     { id: 4, diff: 9 },
//     { id: 5, diff: -18 },
//     { id: 5, diff: 3 },
//   ],
// };
//
// const calculateBalanceForUser = (user: User): number => {
//   const transaction = user.transactions;
//   return (
//     transaction.reduce((acc: number, cur: Transaction) => {
//       return acc + cur.diff;
//     }, 0) + user.startBalance
//   );
// };
//
// const alexanderBalance = calculateBalanceForUser(alexander); // Его история операция: 0 + 100 - 50 + 250
// console.log(alexanderBalance); // 300
//
// const maxBalance = calculateBalanceForUser(max); // Его история операция: -3 + 9 - 18 + 3
// console.log(maxBalance); // -9

// const values = [
//   [1, 100],
//   [2, 200],
//   [3, 300],
//   [1, 2],
//   [3, 400],
//   [4, 500],
//   [1, 99],
// ];
//
// const result = values.reduce(
//   (acc: Record<string, { count: number; sum: number }>, cur: number[]) => {
//     const evaluation = cur[0].toString();
//     if (!acc[evaluation]) {
//       acc[evaluation] = { count: 1, sum: cur[1] };
//       return acc;
//     }
//     acc[evaluation].count += 1;
//     acc[evaluation].sum += cur[1];
//     return acc;
//   },
//   {} as Record<string, { count: number; sum: number }>,
// );
//
// console.log(result);
/*
{
  '1': { count: 3, sum: 201 },
  '2': { count: 1, sum: 200 },
  '3': { count: 2, sum: 700 },
  '4': { count: 1, sum: 500 }
}
/*

 */

type Merge = {
  merge: string;
};

const merge = <T, D>(a: T, b: D, order?: 1 | 2): T & D & Merge => {
  // ... Ваш код здесь
  const x = order ?? 1;
  return { ...a, ...b, merge: x > 1 ? 'YES' : 'NO' };
};

const obj1 = { a: 10, b: 'b', c: 100, child: { name: 'ch', surname: 'hc' } };
const obj2 = { a: 20, b: ['b'], d: 200, child: { aa: 'aa', bb: 'bb' } };

console.log(merge(obj1, obj2));
/* Вывод:
{
  a: 20,
  b: [ 'b' ],
  c: 100,
  child: { aa: 'aa', bb: 'bb' },
  d: 200,
  merged: 'NO!'
}
*/

console.log(merge(obj1, obj2, 1));
/* Вывод:
{
  a: 20,
  b: [ 'b' ],
  c: 100,
  child: { aa: 'aa', bb: 'bb' },
  d: 200,
  merged: 'NO!'
}
*/

console.log(merge(obj1, obj2, 2));
/* Вывод:
{
  a: 10,
  b: 'b',
  c: 100,
  child: { name: 'ch', surname: 'hc' },
  d: 200,
  merged: 'YES!'
}
*/
