import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyD6oVgGJBF-mCqMF1aLajhS4IjnW_-gWXM",
    authDomain: "expensify-a6738.firebaseapp.com",
    databaseURL: "https://expensify-a6738.firebaseio.com",
    projectId: "expensify-a6738",
    storageBucket: "expensify-a6738.appspot.com",
    messagingSenderId: "559667954250"
};
firebase.initializeApp(config);

const database = firebase.database();

database.ref('expenses')
.once('value')
.then((snapshot) => {
    const expenses = [];
    snapshot.forEach((childSnapshop) => {
        expenses.push({
            id: childSnapshop.key,
            ...childSnapshop.val()
        });
    });
    console.log(expenses);
});

// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: 976123498763
// });

// const notes = database.ref('notes/-L9NQGD-gTmn6Wh7CPyY').update({
//     body: 'Buy food'
// });

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native, Angular, Python'
// });

// const firebaseNotes = {
//     notes: {
//        first: {
//             id: '12',
//             title: 'First note!',
//             body: 'This is my note'
//         },
//         second: {
//             id: '761ase',
//             title: 'Another note',
//             body: 'This is my note'
//         }
//     }
// };

// const notes = [{
//     id: '12',
//     title: 'First note!',
//     body: 'This is my note'
// }, {
//     id: '761ase',
//     title: 'Another note',
//     body: 'This is my note'
// }];

// database.ref('notes').set(notes);


// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const value = snapshot.val();
//     console.log(value);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

// const onValueChanged = database.ref().on('value', (snapshot) => {
//     const { name, job: { title, company } } = snapshot.val();
//     const text = `${name} is a ${title} at ${company}`;
//     console.log(text);
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     // change the data
//     database.ref().update({
//         age: 25
//     });
// }, 3500);

// const onValueChanged = (snapshot) => {
//     console.log(snapshot.val());
// };

// const onValueChanged = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChanged);
//   }, 7000);

//   setTimeout(() => {
//     database.ref('age').set(30);
//   }, 10500);

// database.ref().set({
//     name: 'Juan Gabriel',
//     age: 26,
//     stressLevel: 6,
//     job: { 
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Grecia',
//         country: 'Costa Rica'
//     }
// }).then(() => {
//     console.log('Data is saved!');
// }).catch((error) => {
//     console.log('This failed', error);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Twitter',
//   'location/city': 'Naranjo'
// });

// database.ref().update({
//     name: 'Angel',
//     age: 25,
//     job: 'Software Developer',
//     isSingle: null
// });

// database.ref().update({
//   job: 'Scrum Master',
//   'location/city': 'Escazu'
// });



// database.ref('isSingle').set(null);

// database.ref('isSingle')
// .remove()
// .then(() => {
//   console.log('Data removed!');
// })
// .catch((error) => {
//   console.log('An error occurred removing a value', error);
// });