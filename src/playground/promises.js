const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Juancho',
      age: 25
    });
  }, 3000);
  //reject('Something went wrong!');
});

console.log('before');

promise.then((data) => {
  console.log(data);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('This is my other promise');
    }, 3000);
  });
}).then((str) => {
  console.log('Does this run?', str);
}).catch((error) => {
  console.log(error);
});

console.log('after');