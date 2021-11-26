const horses = ["1go", "2go", "3go", "4go", "5go"];

const getRandomTime = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const run = (horse) => {
  return new Promise((resolve) => {
    const time = getRandomTime(2000, 3500);

    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
};

//смотрим н результат одной лошади
// run(horses[0]).then((result) => {
//   console.log(result);
// });

//делаем promise через map для всех лошадей сразу!

console.log(
  "%c Заезд начался, ставки не принимаються",
  "color: brown; font-size: 16px;"
);
const promises = horses.map(run);
// const promises = horses.map((horse) => run(horse));
//Это синхронный кодю. Таким методом мы получим масив Промисов, котороы ожидают свое выполнение.
console.log(promises);

//Теперь не обходимо получить результат самого быстрого промиса
Promise.race(promises).then(({ horse, time }) => {
  console.log(
    `%c Победил ${horse}, финишировал за ${time} времени`,
    "color: green; font-size: 16px;"
  );
});

//Получаем результат когда добежали абсолютно все лошади, когда заезд закончился!
Promise.all(promises)
  .then((results) => {
    console.log(
      "%c Заезд окончен, принимаются ставки.",
      "color: blue; font-size: 16px;"
    );
    console.table(results);
  })
  .catch(console.log);
