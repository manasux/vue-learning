import { createApp } from 'vue'
import App from './App.vue'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// firebase
import firebase from 'firebase';
import 'firebase/auth';
import firebaseConfig from "./utils/config";

// initializing firebase using firebase config
firebase.initializeApp(firebaseConfig);

import router from './router'
import store from './store'

const app = createApp(App);

app.use(VueSweetalert2);
app.use(store);
app.use(router);
app.mount('#app');
