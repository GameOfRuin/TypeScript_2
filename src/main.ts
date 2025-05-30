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

// type Merge = {
//   merge: string;
// };
//
// const merge = <T, D>(a: T, b: D, order?: 1 | 2): T & D & Merge => {
//   // ... Ваш код здесь
//   const x = order ?? 1;
//   return { ...a, ...b, merge: x > 1 ? 'YES' : 'NO' };
// };
//
// const obj1 = { a: 10, b: 'b', c: 100, child: { name: 'ch', surname: 'hc' } };
// const obj2 = { a: 20, b: ['b'], d: 200, child: { aa: 'aa', bb: 'bb' } };
//
// console.log(merge(obj1, obj2));
// /* Вывод:
// {
//   a: 20,
//   b: [ 'b' ],
//   c: 100,
//   child: { aa: 'aa', bb: 'bb' },
//   d: 200,
//   merged: 'NO!'
// }
// */
//
// console.log(merge(obj1, obj2, 1));
// /* Вывод:
// {
//   a: 20,
//   b: [ 'b' ],
//   c: 100,
//   child: { aa: 'aa', bb: 'bb' },
//   d: 200,
//   merged: 'NO!'
// }
// */
//
// console.log(merge(obj1, obj2, 2));
// /* Вывод:
// {
//   a: 10,
//   b: 'b',
//   c: 100,
//   child: { name: 'ch', surname: 'hc' },
//   d: 200,
//   merged: 'YES!'
// }
// */
// const storage = [
//   'nick',
//   'nack',
//   'nock',
//   [
//     {
//       first: 'forecast',
//       child: null,
//     },
//     {
//       first: 'castfore',
//       child: null,
//     },
//     'zzz',
//   ],
//   'no-1',
//   'no-2',
// ] as const;
//
// const [firstElement, secondElement, thirdElement, fourthElement, ...nos] = storage;
// const [firstElement1, secondElement1, thirdElement1, [fistElement2, secondElement2, cos], ...other1] = storage;
// const [firstElement3, secondElement3, thirdElement3, [fistElement4, b1, other3], ...other2] = storage;
//
// console.log(nos); // [ 'no-1', 'no-2' ]
// console.log(cos); // [ 'zzz' ]
// console.log(b1); // { first: 'castfore', child: null }
// const megaobject = {
//   child: null,
//   child1: {
//     nick: 'name',
//     nicknames: ['n1', 'n2', { n: 'n', b: 'b' }],
//     james: {
//       kates: {
//         nicks: {
//           nicknames: ['nn', 'vv', 'gg'],
//           child: {
//             nick: 'childName',
//             child: undefined,
//           },
//         },
//       },
//     },
//   },
//   child2: {},
//   child3: 'child3',
// };
//
// const {
//   child,
//   child1: {
//     nick,
//     nicknames,
//     james: {
//       kates: {
//         nicks: {
//           nicknames: [nicknames1, ...otherNicks],
//           child: { nick: nick1, child: child1 },
//         },
//       },
//     },
//   },
//   ...otherChilds
// } = megaobject;
//
// console.log(child); // null
// console.log(otherChilds); // { child2: {}, child3: 'child3' }
// console.log(nick); // name
// console.log(nicknames); // [ 'n1', 'n2', { n: 'n', b: 'b' } ]
// console.log(nicknames1); // nn
// console.log(otherNicks); // [ 'vv', 'gg' ]
// console.log(nick1); // childName
// console.log(child1); // undeined

// type Person = {
//   name: string;
// };
//
// type Paginated<T = never> = {
//   // Вопрос про невер
//   total: number;
//   limit: number;
//   offset: number;
//   items: T[];
// };
//
// const responseOfPersons: Paginated<Person> = {
//   total: 10,
//   limit: 5,
//   offset: 0,
//   items: [{ name: 'P1' }],
// };
//
// const responseOfSomething: Paginated = {
//   total: 10,
//   limit: 5,
//   offset: 0,
//   items: [],
// };

// const matrix = [
//   [1, 2, 4],
//   [3, 5, 4],
//   [4, 4, 7],
//   [3, 5, 9],
// ];
//
// // const result = matrix.reduce((acc: number[], cur: number[]): number[] => {
// //   for (let i = 0; i < cur.length; i++) {
// //     if (!acc.includes(cur[i])) {
// //       acc.push(cur[i]);
// //     }
// //   }
// //   return acc;
// // }, []);
// //
// // console.log(result.sort((a: number, b: number) => a - b));
//
// const flatUniq = (matrix: number[][]) => {
//   const result: number[] = [];
//   for (let i = 0; i < matrix.length; i++) {
//     const massive = matrix[i];
//     for (let j = 0; j < massive.length; j++) {
//       if (!result.includes(massive[j])) {
//         result.push(massive[j]);
//       }
//     }
//   }
//   return result.sort((a: number, b: number) => a - b);
// };
//
// console.log(flatUniq(matrix));

// const numbers = [0, 2, 1, 4];
//
// const findMaxDoble = (acc: number[]): number => {
//   acc.sort((a: number, b: number) => a - b);
//   return acc[acc.length - 2];
// };
//
// console.log(findMaxDoble(numbers));

// const getMissingDigits = (acc: number[]): number[] => {
//   const result = [1];
//   for (let i = 1; i < acc.length; i++) {
//     if (acc[i] - acc[i - 1] === 1) {
//       result.push(acc[i]);
//       continue;
//     }
//     result.push(acc[i]);
//     const margin = acc[i] - acc[i - 1];
//     for (let j = 0; j < margin - 1; j++) {
//       result.push(acc[i] - j - 1);
//     }
//   }
//   return result.sort((a: number, b: number) => a - b);
// };
//
// const result1 = getMissingDigits([1, 2, 3, 5, 8, 10, 11, 13]); // [4, 6, 7, 9, 12];
// console.log(result1);
//
// // const result2 = getMissingDigits([1, 2, 5, 3]); // null
// //
// // const result3 = getMissingDigits([1, 5]); // [2, 3, 4]
// Здесь TLD - ru

// const sampleUri1 = 'https://username:password@www.example.ru:888/path.to/something?a=b&c=d.e.f.g';
//
// // Здесь TLD - com
// const sampleUri2 = 'https://www.example.com/path.to/something?a=b&c=d.e.f.g';
//
// // Здесь TLD - localhost
// const sampleUri3 = 'https://localhost/path.to/something?a=b&c=d.e.f.g';
//
// // const domainName = ['ru', 'com'];
//
// const findTdl = (domainL: string): string => {
//   if (domainL.includes('localhost')) {
//     return 'localhost';
//   }
//   const nameSplit = domainL.split('/')[2];
//   const nameSplit2 = nameSplit.split(':');
//
//   if (nameSplit2.length === 1) {
//     const nameSplit3 = nameSplit2[0].split('.');
//     return nameSplit3[nameSplit3.length - 1];
//   }
//   const nameSplit3 = nameSplit2[1].split('.');
//
//   return nameSplit3[nameSplit3.length - 1];
// };
//
// console.log(findTdl(sampleUri1));
// console.log(findTdl(sampleUri2));
// console.log(findTdl(sampleUri3));

// const arr1 = [1, 5, 10];
// const arr2 = [1, 2, 3, 5, 9, 11, 12, 13];

// const merge = (arr1: number[], arr2: number[]) => {
//   const result = [];
//   for (let i = 0; i < arr1.length - 1; i++) {
//     for (let j = 0; j < arr2.length - 1; j++) {
//       if (arr1[i] > arr2[j]) {
//         result.push(arr2[j]);
//         continue;
//       }
//       if (arr1[i] === arr2[j]) {
//         result.push(arr2[i]);
//         result.push(arr2[j]);
//       }
//     }
//   }
//   return result;
// };
// const arr1 = [1, 5, 6, 10, 22];
// const arr2 = [1, 2, 3, 5, 6, 11, 12, 13];
//
// const merge = (arr1: number[], arr2: number[]) => {
//   const result: number[] = [];
//   let countArr1 = 0;
//   let countArr2 = 0;
//
//   while (countArr1 < arr1.length || countArr2 < arr2.length) {
//     if (arr1[countArr1] >= arr2[countArr2]) {
//       result.push(arr2[countArr2]);
//       countArr2++;
//     } else {
//       result.push(arr1[countArr1]);
//       countArr1++;
//     }
//   }
//   return result;
// };
//
// // Результат:
//
// console.log(merge(arr1, arr2));
// // const result = [1, 1, 2, 3, 5, 5, 9, 10, 11, 12, 13];

// const g = { a: 1, b: '', c: true };
//
// const getValue = <T, D extends keyof T>(g: T, key: D): T[D] => {
//   return g[key];
// };
// const typeTest1: number = getValue(g, 'a');
// const typeTest2: string = getValue(g, 'b');
// const typeTest3: boolean = getValue(g, 'c');
//
// const a = { id: 1, name: 's' };
//
// console.log(getValue(a, 'id')); // 1
// console.log(getValue(a, 'name')); // 2
// // console.log(getValue(a, 'key')); // Ошибка! Ключа key нет в { id: number, name: string };
//
// // console.log(getValue({}, 'age')); // Ошибка! Ключа age нет в {}
//
// const b = { email: 'ex' };
// console.log(getValue(b, 'email')); // ex
// // console.log(getValue(b, '')); // Ошибка! Ключа '' нет в { email: string }
//
// console.log(getValue({ ...a, x: 10 }, 'x')); // 10
// console.log(getValue({ ...a, x: 10 }, 'name')); // s
// console.log(getValue({ ...a, x: 10 }, 'id')); // 1
// // console.log(getValue({ ...a, x: 10 }, 's')); // Ошибка! Ключа s нет в { id: number, name: string, x: number }
//
// console.log(getValue({ ...b, ...a }, 'email')); // ex
//
// const checkNumber: number = getValue({ age: 1 }, 'age');
// const checkBoolean: boolean = getValue({ a: true }, 'a');
// const checkNull: null = getValue({ x: null }, 'x');
//
// console.log(getValue({ a: 'str' }, 'a').toUpperCase()); // STR
// console.log(getValue({ a: 10 }, 'a') ** 2); // 100
// let user = {
//   age: 10,
//   name: 'Original Name',
// };
// const update = <T>(user: T, update: Partial<T>) => {
//   return { ...user, ...update };
// };
// user = update(user, {}); // Поля не переданы - нечего обновлять
// console.log(user); // { age: 10, name: 'Original Name' }
// if (user.age !== 10 || user.name !== 'Original Name') {
//   throw Error('It is not working');
// }
//
// user = update(user, { age: 23 }); // Обновить возраст
// console.log(user); // { age: 23, name: 'Original Name' }
// if (user.age !== 23 || user.name !== 'Original Name') {
//   throw Error('It is not working');
// }
//
// user = update(user, { name: 'Updated Name' }); // Обновить имя
// console.log(user); // { age: 23, name: 'Updated Name' }
// if (user.age !== 23 || user.name !== 'Updated Name') {
//   throw Error('It is not working');
// }
//
// user = update(user, { age: 100, name: 'name' }); // Обновить имя и возраст
// console.log(user); // { age: 23, name: 'Updated Name' }
// if (user.age !== 100 || user.name !== 'name') {
//   throw Error('It is not working');
// }
//
// // Строки ниже должны подчеркивать ошибку! Для запуска можете их закомментировать
// update(user, { age: 100, name: 'name', a: 10 }); // Здесь должна гореть ошибка! Поля "a" нет в объекте user!
// update(user, { x: true }); // Здесь должна гореть ошибка! Поля "x" нет в объекте user!
// update(user, { age: true }); // Здесь должна гореть ошибка! Должен был быть тип number, но передан "boolean"
// update(user); // Здесь должна гореть ошибка! Второй аргумент обязательно должен быть!
type User = {
  name: string;
  surname: string;
  faaang: string;
  x: string;
};

const user: User = {
  name: 'aaabcdeeeef',
  surname: 'hhfooodgeeeerg',
  faaang: 'ffaanngg',
  x: 'xxxxxxxxxxxxxxxxxxxx',
};

const encode = (user: Record<string, string>) => {
  const text = JSON.stringify(user);
  let count = 1;
  let result = '';

  for (let i = 0; i < text.length - 1; i++) {
    if (text[i] === text[i + 1]) {
      count++;
    } else {
      result += text[i] + (count === 1 ? '' : count.toString());

      count = 1;
    }
  }
  return result;
};
const decode = <T>(encodedText: string): T => {
  let result = '';
  let count = '';
  let char = '';

  for (const encodedTextElement of encodedText) {
    if (!isNaN(Number(encodedTextElement))) {
      count += encodedTextElement;
    } else {
      result += char.repeat(count ? Number(count) : 1);
      char = encodedTextElement;
      count = '';
    }
  }
  result += '}';
  return JSON.parse(result);
};

console.log(decode('{"name":"a3bcde4f","surname":"h2fo3dge4rg","fa3ng":"f2a2n2g2","x":"x20"}'));
const encoded: string = encode(user);
const expectedEncoded = '{"name":"a3bcde4f","surname":"h2fo3dge4rg","fa3ng":"f2a2n2g2","x":"x20"}';

console.log('Закодированная строка', encoded);
console.log('Кодирование:', encoded === expectedEncoded ? 'ВЕРНО' : 'ОШИБКА', '\n');

// --------- Проверка декодирования
const decoded: User = decode<User>(encoded);
console.log('Декодированный объект', decoded);

// try {
//   deepStrictEqual(decoded, user);
//   console.log('Декодирование ВЕРНОЕ!');
// } catch (e) {
//   console.log('Декодирование ОШИБКА!');
