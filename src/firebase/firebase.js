import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FAIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };
  
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  export{ firebase, googleAuthProvider, database as default }; 




//   database.ref('expenses').once('value').then((snapshot)=>{
//     const expenses = [];
//     snapshot.forEach(element => { 
//         expenses.push({
//             id: element.key,
//             ...element.val()
//         });


//     });
// }) 

  // database.ref('expenses').on('child_changed', (snapshot)=>{
  //   console.log(snapshot.key, snapshot.val());
  // });
  // database.ref('expenses').push({
  //   description: 'coffee',
  //   amount: '$35.00',
  //   note: 'morning coffee',
  //   createdAt: '1234'
  // });
  // database.ref('expenses/-Mas7ucrPaJOGwItuf0T').update({
  //   description: 'Rent',
  //   amount: '$350.00',
  //   note: 'january rent',
  //   createdAt: '123456'
  // });
  // database.ref('expenses').push({
  //   description: 'petrol',
  //   amount: '$5.00',
  //   note: 'trip',
  //   createdAt: '0381234'
  // });
  // database.ref('expenses').on('value', (snapshot)=>{
  //       const expenses = [];
  //       snapshot.forEach((childSnapShot)=>{
  //         expenses.push({
  //           id: childSnapShot.key,
  //           ...childSnapShot.val()
  //         });
  //       });
  //       console.log(expenses);
  // });
  // database.ref().set({
  //   name: 'Hassan Ali',
  //   age:26,
  //   stressLevel:6,
  //   job: {
  //     title: 'Software developer',
  //     company: 'google'
  //   },
  //   location: {
  //       city: 'Islamabad',
  //       country: 'Pakistan'
  //   }
  // }).then(()=>{
  //   console.log('data is saved');
  // }).catch((e)=>{
  //   console.log('this failed', e);
  // });
  // database.ref().update({
  //   stressLevel: 9,
  //   'job/company': 'Amazon',
  //   'location/city': 'Seattle'
  // }).then(()=>{
  //   console.log('data is updated');
  // }).catch((e)=>{
  //   console.log('Updation failed', e);
  // });
  // database.ref().on('value', (snapshot)=>{
  //   const val = snapshot.val();
  //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
  // })