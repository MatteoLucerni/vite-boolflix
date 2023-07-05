import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
library.add(faStar);
import App from './App.vue';

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
