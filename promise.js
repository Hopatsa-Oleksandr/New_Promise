//Вся разработка она асинхронная, все построенно на промисах, ты вызиваешь, ф-ию, она возвращает ПРОМИС, и ты по результату этого промиса, вызваешь или в then или в cath что то.
//Все на запросах!! - обновить пользователя, забрать пользователя, добавить пользователя...запрос запрос запрос, и ты каждый запрос ЧЕЙНИШЬ - .then-.cath.-then.-cath.....итд

const fetchUser = (userName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.3;

      if (success) {
        const user = { name: userName, age: 26, posts: 74 };
        resolve(user);
      }

      const error = "Произошла ошибка :(";
      reject(error);
    }, 1000);
  });
};

fetchUser("Mango").then(onFetchUserSuccess).catch(onFetchUserError);

function onFetchUserSuccess(user) {
  console.log(user);
}

function onFetchUserError(error) {
  console.log(`%c ${error}`, "color: red; font-size: 16px;");
}

//fetch говорит дай мне бекенд ссылку я схожу туда и что то тебе верну
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  //получаем или результат в then
  .then(console.log)
  //или получаем ошибку в catch
  .catch(console.log);

// запускаем и видим что возвращает бек енд нам.

//Telegram - Фунция в ПРОМИСЕ(смотри фото - еще один пример)
