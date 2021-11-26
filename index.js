// const promise = new Promise((resolve, reject) => {
//      resolve('Привет');
//     reject('by');
// });
// console.log(promise);
/////////////////////////////////////////////////////////////////////
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Coll');
//     }, 2000);
// });

// promise.then(result => {
//     console.log(result);
//когда этот промис выполниться успешно, то выполни эту ф-цию, и в эту ф-цию, придет результат этого выполнения.
//Это простая регистрация call back.
// });

//////////////////////////////////////////////////////////////////////////
//Если промс выполняеться с ошибкой
// const promise = new Promise((resolve, reject) => {
//     const success = Math.random() > 0.3;
//     setTimeout(() => {
//         if (success) {
//             resolve('Успех');
//         }
//         reject('Ошибка');
//     }, 2000);
// });

// promise.then(result => {
//     console.log(result);
//когда этот промис выполниться успешно, то выполни эту ф-цию, и в эту ф-цию, придет результат этого выполнения.
//Это простая регистрация call back.
// });
//////////////////////////////////////////////////////////////////////////
//onResolve, onReject

// const promise = new Promise((resolve, reject) => {
//     const success = Math.random() > 0.3;
//     setTimeout(() => {
//         if (success) {
//             resolve('Успех');
//         }
//         reject('Ошибка');
//     }, 2000);
// });

// promise.then(
//coll back - когда все хорошо.
// result => console.log(result),
//coll back - когда все плохо.
//     error => console.log(error),
// );
////////////////////////////////////////////////////////////////////////////////////
//более удобный метод Catch

// const promise = new Promise((resolve, reject) => {
//     const success = Math.random() > 0.3;
//     setTimeout(() => {
//         if (success) {
//             resolve('Успех');
//         }
//         reject('Ошибка');
//     }, 2000);
// });

// console.log('До');

// promise
//     .then(result => console.log(%c${result}, 'color:green; font-size: 20px'))
//     .catch(error => console.log(%c${error}, 'color:red; font-size: 20px'));
//в одну строчку.
//coll back - когда все хорошо.
//coll back - когда все плохо.
// console.log('После');

///////////////////////////////////////////////////////////////////////////////////
// не пытайтесь в не coll back then, catch, получить каки это данные с промиса, это не возможно.
// const promise = new Promise((resolve, reject) => {
//   const success = Math.random() > 0.3;
//   setTimeout(() => {
//     if (success) {
//       resolve("Успех");
//     }
//     reject("Ошибка");
//   }, 2000);
// });

// let data;

// console.log('Дата до промиса', data);
//данные промиса доступны только в этом coll back
// promise
//     .then(result => {
//         console.log(%c${result}, 'color:green; font-size: 20px');
//         data = result;
//         console.log('дата в нутри колбека', data);
//     })
//или в этом coll back
// .catch(error => console.log(%c${error}, 'color:red; font-size: 20px'));
// в одну строчку.
// coll back - когда все хорошо.
// coll back - когда все плохо.
// console.log('Дата после промиса', data);

//Репета 32:04
//////////////////////////////////////////////////////////////////////////////////////////////
//Метод .finally()

// const promise = new Promise((resolve, reject) => {
//   const success = Math.random() > 0.3;
//   setTimeout(() => {
//     if (success) {
//       resolve("Успех");
//     }
//     reject("Ошибка");
//   }, 2000);
// });

// метод finally как бы ожидает на примере Spinera..
// let isLoading = false;

// isLoading = true;

// SpeechRecognitionAlternative.classList.add("visible");

// promise
//   .then((result) => {
//     console.log(`%c${result}`, "color:green; font-size: 20px");
// isLoading = false;
//   })
//   .catch((error) => {
//     console.log(`%c${error}`, "color:red; font-size: 20px");
//   })
//   .finally(() => {
// isLoading = false;
//     spinner.classList.remove("visible");
//   });

//////////////////////////////////////////////////////////////////////////////
//Promise цепочки (then - их можно чейнить)

const promice = new promice((resolve) => {
  resolve(5);
});

// Promise.then((value) => console.log(value));
Promise.then((x) => {
  console.log("x: ", x);

  return x * 2;
})
  .then((y) => {
    console.log("y: ", y);

    return y + 50;
  })
  .then((z) => {
    console.log("z: ", z);
  })
  .catch((error) => console.log(error));
