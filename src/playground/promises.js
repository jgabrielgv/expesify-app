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
}).catch((error) => {
  console.log(error);
});

console.log('after');