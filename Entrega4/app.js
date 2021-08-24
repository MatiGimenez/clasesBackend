const myPromise = (timeInSeconds) => {
  return new Promise(function (resolve, reject) {
    setTimeout(
      () =>
        resolve({
          status: "200 OK",
          seconds: timeInSeconds,
        }),
      timeInSeconds * 1000
    );
  });
};
function* randomNumber(min, max) {
  let indice = 1;
  while (true) {
    yield {
      number: Math.floor(Math.random() * (max - min + 1) + min),
    };
  }
}
let numeros = randomNumber(1, 25);

console.log("starting...");
myPromise(3).then((res) => console.log(res));
myPromise(2).then((res) => console.log(res));
myPromise(5).then((res) => console.log(res));
myPromise(1).then((res) => console.log(res));
myPromise(4).then((res) => console.log(res));
setInterval(() => {
  console.log(numeros.next().value);
}, 1000);
