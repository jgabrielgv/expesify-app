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

database.ref().set({
    name: 'Juan Gabriel',
    age: 26,
    isSingle: false,
    location: {
        city: 'Grecia',
        country: 'Costa Rica'
    }
}).then(() => {
    console.log('Data is saved!');
}).catch((error) => {
    console.log('This failed', error);
});

// database.ref().

// firebase.database().ref().set('This is my data');
// database.ref('age').set(27);
// database.ref('location/city').set('Naranjo');

database.ref('attributes').set({
    height: 178,
    weight: 88
}).then(() => {
    console.log('Attributes saved!');
}).catch((error) => {
    console.log('Save attributes task failed!', error);
});