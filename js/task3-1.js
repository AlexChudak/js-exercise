// Задача 3 - 1
// CRUD для свойств объекта
// С - create(создать)
// R - read(читать)
// U - update(обновить)
// D - delete (удалить)
// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле 'mood' со значением 'happy'
// добавляет поле 'full time' со значением true
// заменяет значение 'hobby' на 'skydiving'
// заменяет значение 'premium' на false
// в переменную message записывает содержимое объекта user:
// для переменной keys присваивает массив свойств объекта, используя метод Object.keys()
// с помощью оператора for...of
// в формате ключ: значение
// c переносом строки('\n')
let message = '';
const user = {
  age: 20,
  hobby: 'html',
  name: 'Mango',
  premium: true,
};

user.hobby = 'skydiving';
user['premium'] = false;
user.mood = 'happy';
user['full time'] = true;

//Write code under this line

const keys = Object.keys(user);
// Write code under this line
// Write code under this line
for (const key of keys) {
  message += `${key}  :  ${user[key]}\n`;
} //Write code under this line

console.log(message);
/*
'age : 20
hobby : skydiving
name : Mango
premium : false
mood : happy
"full time" : true
' */

//const playlist = {
//   name: 'мой супер плейлист',
//   raiting: 5,
//   track: ['track - 1', 'track - 2', 'track - 3'],
//   trackCount: 3,
//   changeName(newName) {
//     this.name = newName;
//   },
// };

// playlist.changeName('New Musik playlist');

// console.log(playlist);

// const inputName = 'color';
// const inputLabel = 'tomato';

// const colorpickerData = {
//   [inputName]: inputLabel,
// };
// console.log(colorpickerData);

// const feedback = {
//   good: 5,
//   neutral: 14,
//   bad: 3,
// };

// let total = 0;
// const values = Object.values(feedback);

// for (const value of values) {
//   console.log(value);

//   total += value;
//   console.log('total=', total);
// }

// console.log(values);

// console.log(feedback);

//Работа с коллекцией(массивом объектов)

// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: false },
//   { name: 'Ajax', online: false },
//   { name: 'Kong', online: true },
// ];

// console.table(friends);

// const findFriendByName = function (allfriends, friendName) {
//   for (const friend of allfriends) {
//     // console.log(friend);

//     if (friend.name === friendName) {
//       return 'OK!';
//     }
//   }
//   return 'hernya';
// };

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

// const getAllNames = function (allfriends) {
//   const names = [];
//   for (const friend of allfriends) {
//     // console.log(friend.online);
//     if (!friend.online) {
//       // !friend.online- если не онлайн "!"
//       names.push(friend);
//     }
//   }

//   return names;
// };

// console.log(getAllNames(friends));
