// App Core Engine & Server Connector
const firebaseConfig = {
    apiKey: "AIzaSyBWJJZHzUhbrl-dh1wowh-u0n0T9i5n0uU",
    databaseURL: "https://hamzazed34567-default-rtdb.firebaseio.com",
    projectId: "hamzazed34567",
    storageBucket: "hamzazed34567.firebasestorage.app",
    appId: "1:734054414157:android:a8f76007ce00d4488e2904"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
