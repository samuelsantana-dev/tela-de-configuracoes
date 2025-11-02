// Bibliotecas
import { createRouter, createWebHistory } from 'vue-router';
// Pages
import HomePage from '../pages/HomePage.vue';
import AboutPage from '../pages/AboutPage.vue';
import SettingsPage from '../pages/SettingsPage.vue';
import ProfileSettings from '../pages/settings/ProfileSettings.vue';
import SecuritySettings from '../pages/settings/SecuritySettings.vue';
import NotificationsSettings from '../pages/settings/NotificationsSettings.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/about', name: 'About', component: AboutPage },
   { 
    path: '/settings', 
    component: SettingsPage,
    children: [
      { path: '', redirect: '/settings/profile' },
      { path: 'profile', name: 'ProfileSettings', component: ProfileSettings },
      { path: 'security', name: 'SecuritySettings', component: SecuritySettings },
      { path: 'notifications', name: 'NotificationsSettings', component: NotificationsSettings },
      { path: 'privacy', name: 'PrivacySettings', component: NotificationsSettings }, 
      { path: 'billing', name: 'BillingSettings', component: NotificationsSettings }, 
      { path: 'integrations', name: 'IntegrationsSettings', component: NotificationsSettings },
    ]
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundPage },
];

 const router = createRouter({
        history: createWebHistory(),
        routes,
      });

export default router;
