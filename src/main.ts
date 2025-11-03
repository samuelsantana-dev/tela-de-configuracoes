import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config'
import { QueryClient } from '@tanstack/vue-query'
import { VueQueryPlugin } from '@tanstack/vue-query'
import ToastService from 'primevue/toastservice'
import './style.css';

const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    options: {
      darkMode: false
    }
  },
  ripple: true
});

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            refetchOnWindowFocus: false
        }
    }
})

app.use(VueQueryPlugin, { queryClient})
app.use(ToastService)
app.use(router); 
app.mount('#app');
