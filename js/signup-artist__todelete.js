import { auth, db, provider, providerTwo, artistsCollectionRef } from "./main.js";
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider  } from 'https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js';
import { addDoc, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js";

// ============ Sign up and sign in with Google ============
document.getElementById('signUpGoogle').addEventListener('click', () => {
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    console.log(result.user);
    window.location.href  = "login-account.html"

    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;

    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
})

// ============ Sign up and sign in with Facebook ============
document.getElementById('signUpFacebook').addEventListener('click', () => {
signInWithPopup(auth, providerTwo)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;

    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

    // ...
  });
})


// ============ Sign UP UP UP with email and password ============
document.getElementById('signUpBtn').addEventListener('click', (e) => {
  e.preventDefault();

  const userEmail = document.getElementById('emailUser').value;
  const userPassword = document.getElementById('passwordUser').value;

  // createUserWithEmailAndPassword(auth, userEmail, userPassword) 
  createUserWithEmailAndPassword(auth, userEmail, userPassword).then((cred) => {
      setDoc(doc(artistsCollectionRef, cred.user.uid), {
        full_name: document.getElementById('artist_full_name').value,
        city: document.getElementById('artist_city').value,
        postal_code: document.getElementById('artist_postal_code').value,
        phone_number: document.getElementById('artist_phone_number').value,
        bio: document.getElementById('artist_bio').value,
        website: document.getElementById('website_url').value,
        instagram: document.getElementById('instagram_url').value,
        uid: cred.user.uid

      }).then(() => {
        console.log('User Created');
        window.location.href  = "home-artist.html"

      });
  })

  .catch((err) => {
    console.log(err.code)
    console.log(err.message)
  })

  // .then((res) => {
  //     console.log(res.user)

  //     // window.location.href  = "login-account.html"

  //     // getUserLog() = res.user;
  //   })
  //   .catch((err) => {
  //     console.log(err.code)
  //     console.log(err.message)
  //   })
    // createUser();
})












// // ============ Sign UP UP UP with email and password ============
// document.getElementById('signUpBtn').addEventListener('click', (e) => {
//   e.preventDefault();

//   const userEmail = document.getElementById('emailUser').value;
//   const userPassword = document.getElementById('passwordUser').value;

//   // createUserWithEmailAndPassword(auth, userEmail, userPassword) 
//   createUserWithEmailAndPassword(auth, userEmail, userPassword).then(cred => {
//     const createArtistUser = async () => {
//       await addDoc(artistsCollectionRef, {
//         full_name: document.getElementById('artist_full_name').value,
//         city: document.getElementById('artist_city').value,
//         postal_code: document.getElementById('artist_postal_code').value,
//         phone_number: document.getElementById('artist_phone_number').value,
//         bio: document.getElementById('artist_bio').value,
//         website: document.getElementById('website_url').value,
//         instagram: document.getElementById('instagram_url').value,
//         uid: cred.user.uid




//       }).then(() => {
//         console.log('User Created');
//       });
//     };

//     console.log(cred.user);
//     createArtistUser();

//     // window.location.href  = "login-account.html"



//   })

//   .catch((err) => {
//     console.log(err.code)
//     console.log(err.message)
//   })




//   // .then((res) => {
//   //     console.log(res.user)

//   //     // window.location.href  = "login-account.html"

//   //     // getUserLog() = res.user;
//   //   })
//   //   .catch((err) => {
//   //     console.log(err.code)
//   //     console.log(err.message)
//   //   })
//     // createUser();
// })




















// function getUserLog(user) {
//   if (user !== null) {
//     console.log('funciona!')
//     // window.location.href  = "login-account.html"

//   return document.getElementById('userLoggedIn').innerHTML = `${res.user.email}`
//   } else {
//     console.log('error')
//   }
// }


// ============ Sign IN IN IN with email and password ============
// document.getElementById('signInBtn').addEventListener('click', () => {

//   const userEmail = document.getElementById('emailUser').value;
//   const userPassword = document.getElementById('passwordUser').value;

//   signInWithEmailAndPassword(auth, userEmail, userPassword)
//     .then((res) => {
//       console.log(res.user)
//     })
//     .catch((err) => {
//       console.log(err.code)
//       console.log(err.message)
//     })   
// })

// ============ Logout ============
// const logout = async () => {
//   await signOut(auth);
// }

// signOutBtn.addEventListener('click', logout);

// signOut(auth).then(() => {
//   // Sign-out successful.
// }).catch((error) => {
//   // An error happened.
// });

// const logout = document.getElementById('signOutBtn');
// logout.addEventListener('click',(e) => {
//   e.preventDefault();
//   auth.signOut()
//   console.log(logout);
// })



// const monitorAuthState = async ()  => {
//   onAuthStateChanged(auth, user => {
//     if (user) {
//       console.log(user);
//       showApp();
//       showLoginState(user);

//       hideLoginError();
//     }
//     else {
//       showLoginForm();
//       output1.innerHTML = "You're not logged in."
//     }
//   });
// }

// monitorAuthState();




// document.getElementById('addData').addEventListener('click', async () => {

//   const userEmail = document.getElementById('userInputEmail').value;
//   const userPassword = document.getElementById('userInputPassword').value;

//   const docRef = await addDoc(collection(db, "artist"), {
//     email: userEmail,
//     password: userPassword
//   });
//   console.log("Document written with ID: ", docRef.id);
// })

// document.getElementById('getData').addEventListener('click', async () => {

//   const userEmail = document.getElementById('userInputEmail').value;
//   const userPassword = document.getElementById('userInputPassword').value;
//   const userDocId = document.getElementById('userInputDocId').value;

//   const docRef = doc(db, "artist", userDocId);
//   const docSnap = await getDoc(docRef);

//   if (docSnap.exists()) {
//     console.log("Document data:", docSnap.data());
//   } else {
//     // doc.data() will be undefined in this case
//     console.log("No such document!");
//   }
// })