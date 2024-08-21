// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FB_APIKEY,
    authDomain: import.meta.env.VITE_FB_AUTHDOMAIN,
    projectId: import.meta.env.VITE_FB_PROJECTID,
    storageBucket: import.meta.env.VITE_FB_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_FB_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_FB_APPID,
    measurementId: import.meta.env.VITE_FB_MEASUREMENTID,
};

// Initialize Firebase
const fbApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

/**
 * ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 * 사용자
 */
const fbAuth = getAuth(fbApp);

/**
 * ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 * 스토어
 */
const fbStore = getFirestore(fbApp);

/**
 * ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 * 스토리지
 */
const fbStorage = getStorage(fbApp);

/**
 * ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 * 함수
 */
const fbFunction = getFunctions(fbApp);

const fbDb = getFirestore(fbApp);

export { fbApp, fbAuth, fbStore, fbStorage, fbFunction, fbDb };
// export { db, signInWithGoogle };
