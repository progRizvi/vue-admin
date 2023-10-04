import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';
import router from './router';
import store from './store'; // Adjust the path

const app = createApp(App);


app.use(store);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app');
