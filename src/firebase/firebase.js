import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore"
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
// import { collection, addDoc, getDocs, doc, setDoc, updateDoc, deleteField, deleteDoc, getDoc, onSnapshot, query } from "firebase/firestore";



export const firebaseConfig = {
  apiKey: "AIzaSyCYbdmtkvfM6CqntVDfRB5oWl626bWO83M",
  authDomain: "expensify-cf0e5.firebaseapp.com",
  projectId: "expensify-cf0e5",
  storageBucket: "expensify-cf0e5.appspot.com",
  messagingSenderId: "474609948969",
  appId: "1:474609948969:web:650557f36a1ac16c22bf38",
  measurementId: "G-NKE3YL33MV"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { provider, auth }
export default db


// const q = query(collection(db, "expenses"));

// const unsubscribe = onSnapshot(q, (querySnapshot) => {
//   querySnapshot.docChanges().forEach((change) => {
//     console.log(change.doc.data())
//   });
// });

// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Lee",
//     last: "Charlton",
//     born: 1991,
//     isSingle: true,
//     location: {
//       city: "Sittingbourne",
//       country: "England"
//     }
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }

// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Keely",
//     middle: "Mellisa",
//     last: "Dunn",
//     born: 1998
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }

// const querySnapshot = await getDocs(collection(db, "users"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });

// setDoc(doc(db, "users", "John"), {
//   first: "John",
//   last: "Smith",
//   age: 32
// });

// await setDoc(doc(db, 'users', 'John'), {
//   age: 17
// }, { merge: true });

// await setDoc(doc(db, 'users', 'John'), {
//   location: {
//     city: "Sittingbourne",
//     country: "England"
//   }
// }, { merge: true });

// setDoc(doc(db, "users", "John"), {
//   attributes: {
//     height: "6ft",
//     weight: "22 stone"
//   }
// }, { merge: true })

// setTimeout(() => {
//   updateDoc(doc(db, "users", "John"), {
//     age: 4
//   }).then((data) => {
//     console.log("she worked beeeeeeeeee!!!!")
//   }).catch((error) => {
//     console.log("didn work beeeey:", error)
//   })
// }, 5000)

// updateDoc(doc(db, "users", "John"), {
//   "attributes.weight": "11 stone"
// }).then(() => {
//   console.log("date was updated")
// }).catch((e) => {
//   console.log("Have this error! -- ", e)
// })

// setTimeout(() => {
//   addDoc(collection(db, "John"), {
//     name: "j",
//     age: 1
//   })
// }, 5000)

// setDoc(doc(db, "dogs", "big woofer"), {
//   woofer: true
// }
// )

// await setDoc(doc(db, "users", "user3"), {
//   name: "John Smith",
//   stressLevel: 2,
//   age: 39,
//   job: {
//     title: "Decorator",
//     company: "spuds"
//   },
//   isSingle: true,
//   location: {
//     city: "Canterbury",
//     country: "England"
//   }
// })

// updateDoc(doc(db, "users", "user1"), {
//   stressLevel: 1,
//   "location.city": "London",
//   "job.company": "Amazon"
// }
// )


// setTimeout(async () => {
//   const docRef = doc(db, "users", "user1")

//   const docSnap = await getDoc(docRef);

//   if (docSnap.exists()) {
//     console.log("Document data:", docSnap.data());
//   } else {
//     console.log("No such document!");
//   }
// }, 2000)


// setTimeout(() => {
//   updateDoc(doc(db, "users", "user1"), {
//     stressLevel: 9,
//     "location.city": "Seattle",
//     "job.company": "Amazon"
//   }
//   )
// }, 3000)


// setTimeout(async () => {
//   const docSnap = await getDoc(doc(db, "users", "user1"));

//   if (docSnap.exists()) {
//     console.log("Document data:", docSnap.data());
//   } else {
//     console.log("No such document!");
//   }
// }, 6000)

// const unsub2 = onSnapshot(doc(db, "users", "user1"), (doc) => {
//   const data = doc.data()
//   console.log(`${data.name} is a ${data.job.title} at ${data.job.company}.`);
// });