import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import skLocale from './locales/sk';
import router from './router'

const i18n = createI18n({
  locale: 'sk',
  messages: {
    sk: skLocale,
  },
});

const app = createApp(App);

app.use(i18n);
app.use(router)

app.mount('#app');