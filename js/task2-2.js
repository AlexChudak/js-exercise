// const calculateEngravingPrice = (message = "", pricePerWord = 0) => pricePerWord;
//  // Write code in this line
 
// console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80

//console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160

//console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240

//console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120

//console.log(calculateEngravingPrice('Uno', 100)); // 100

// const friends = ['mango','kiwi','Poli','Ajax'];
// console.table(friends);


// for(const friend of friends){
// console.log(friend);
// }


// for (let i=0; i < friends.length; i+=1){
// friends[i] += `-${i}`; 
// }
// console.table (friends);



// friends[0]='barab';
// friends[2]=232;
// console.table(friends);

// console.table(friends);

// console.log(friends[1]);

// const lastIndex = friends.length-1;
// console.log(lastIndex);

// let a=[1,23,34,35];
// let b=a;

// a[2]=5678;

// console.log('a=',a);

// console.log('b=',b);

// const cart=[10,23,44,78,45,44,26,44];


// let total=0;

// for (let i=0; i<cart.length; i+=1){ 
   

//    cart[i] = Math.round (cart[i]*1.1);
//    total+=cart[i];
//  }

// for(const value of cart){
//     total+=value;
// }

// console.log('total=',total);

// const numbers=[1,5,8,9,12,4,15,27,30,18,11];
// let total=0;

// for (const number of numbers){
    

//     if (number % 2 === 0){
//         console.log(number,'-Четное!!!');

//         total+=number;
//     }
// }
// console.log('total=',total)

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1s5cute';

// let message=`Пользователь ${loginToFind} не найден.`;

// for (let i=0; i<logins.length; i+=1){
//     const login=logins[i];


//     if (login === loginToFind){
//         message=`Пользователь ${loginToFind} найден.`;
//         break;
//     } 
        
//     }

//     console.log(message);
// console.log(logins.includes(loginToFind));
// const message= (logins.includes(loginToFind))? 'Пользователь ${loginToFind} найден.':'Пользователь ${loginToFind} не найден.';
// console.log(message);

/*
 * Напиши скрипт поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */
// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber=numbers[0];

// for (const number of numbers){
//     // console.log(number);

//     if (number>smallestNumber){
//         smallestNumber=number;
//     }
// }
// console.log('result=',smallestNumber);

// * Напиши скрипт, который объединяет все элементы массива в одно строковое значение.
// * Элементов может быть произвольное кол-во.
// * Пусть элементы массива  в строке будут разделены запятой.
// * - Сначала через for
// * - Потом через join()
// */

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax', 'Ajax'];
// let string='';

// for(const friend of friends){
    

//     string+=friend+',';
// }
// string=string.slice(0,string.length-1);
// const string= friends.join('---')
// console.log(string);

/*
 * Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */




// const string='JavaScript';
// const letters= string.split('');
// let inverterString='';

// console.log(letters);

// for (const letter of letters){
// console.log(letter);

// if (letter === letter.toLowerCase()){
//     console.log('fuck-',letter);

//     inverterString+=letter.toUpperCase();
// }else {
//     console.log('kapec-',letter);
//     inverterString+=letter.toLowerCase();
// }

// inverterString +=(letter === letter.toLowerCase())?letter.toUpperCase():letter.toLowerCase();
// }
// console.log(inverterString);

/*
 * Делаем slug в URL из названия статьи (например на dev.to)
 * Заголовок статьи состоит только из букв и пробелов
 *
 * - Нормализируем строку
 * - Разбиваем по словам
 * - Сшиваем в строку с разделителями
 */
// Должно получиться top-10-benefits-of-react-framework
// const title = 'Top 10 benefits of React framework';

// const normalizeTitle=title.toLowerCase();
// // console.log(normalizeTitle);

// const words=normalizeTitle.split(' ');
// //

// const slug= words.join('-');
// // console.log(slug);

// const slug2=title.toLowerCase().split(' ').join('-');
// console.log(slug2);
/*
 * Напиши скрипт который считает сумму элементов двух массивов.
 */

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total=0;

// const numbers = array1.concat(array2);
// console.log(numbers);

// for(const number of numbers){
//     total+=number;
// }
// console.log(total);

/*
 * Работем с коллекцией карточек в trello
 * - Метод splice()
 * - Удалить
 * - Добавить
 * - Обновить
 */

// const cards = [
//     'Карточка-1',
//     'Карточка-2',
//     'Карточка-3',
//     'Карточка-4',
//     'Карточка-5',
//   ];

//   console.table(cards);

//   const cardToRemove='Карточка-4';
//   const index=cards.indexOf('Карточка-4');
//   console.log(index);

//   cards.splice(index,3);

//  cards.splice(2, 2,'тпгцуау','weirbbier');


//   console.table(cards);

// const add=function (x,y){
//   console.log(x);
//   console.log(y);

//   return x*y
// }

// console.log( 'add=', add(3,5));

// const cards = [10,20,45,78,24,85];
// let total=0;

// for(const card of cards){
//   total+=card;
// }

// console.log('total=', total);

// const calculateTotalPrice = function (items){

//   let total=0;

//   for(const item of items){
//     total+=item;
//   }

//   return total;
// }

// console.log( "Total=", calculateTotalPrice([1,3,58,44]));

// const logItems=function (items){
//   for(const item of items){
//     console.log(item);
//   }
// }



// logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
// logItems([1, 2, 3, 4, 5]);
// logItems(['клавиатура', 'наушники', 'часы']);

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

// const findLogin = function (allLogins,findtoLogin){
//   // for (const login of allLogins){
//   //   if (login===findtoLogin){
//   //     return `Пользователь ${findtoLogin} найден`;
//   //   }
//   // }
//   // return `Пользователь ${findtoLogin} не найден`

// return allLogins.includes(findtoLogin)?
// `Пользователь ${findtoLogin} найден`:
// `Пользователь ${findtoLogin} не найден`;
// }

// console.log(findLogin(logins, 'avocod3r'));
// console.log(findLogin(logins, 'k1widab3st'));
// console.log(findLogin(logins, 'jam4l'));
// console.log(findLogin(logins, 'poly1scute'));


// const findSmallesNumber= function (numbers){
//   let smallNumber=numbers[0];
  
//   for (const number of numbers){
//     if (number<smallNumber){
//       smallNumber=number;
//     }
//   }
//    return smallNumber;
// }



// console.log(findSmallesNumber([3, 8, 12, -2, 15])); // -2
// console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
// console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4


// Подсчет стоимости гравировки украшений
// Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию calculateEngravingPrice(message = "", pricePerWord = 0) принимающую строку (в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.

// Для решения этой задачи не используйте циклы. Т.е. никаких for, while, do while, for of, for in, forEach или функциональных методов.
const calculateEngravingPrice = (message = "", pricePerWord = 0) => message.split(' ').length*pricePerWord; // Write code in this line

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80

//console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160

//console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240

//console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120

//console.log(calculateEngravingPrice('Uno', 100)); // 100