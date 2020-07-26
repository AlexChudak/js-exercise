const invoice = 150; 
const stock = 100;

// const message = "" ;


// if (invoice <= stock) {
//     message = 'Заказ оформлен, с вами свяжется менеджер';
//   } else {
//     message = 'На складе недостаточно товаров!'
//   }

const message = invoice <= stock?'Заказ оформлен, с вами свяжется менеджер':'На складе недостаточно товаров!';





console.log (message);
// Write code under this line


//console.log(message);

//если invoice равен 100
// то значение message будет равно
// 'Заказ оформлен, с вами свяжется менеджер'

//если invoice равен 50
// то значение message будет равно
// 'Заказ оформлен, с вами свяжется менеджер'  

//если invoice равен 150
// то значение message будет равно
// 'На складе недостаточно товаров!'  