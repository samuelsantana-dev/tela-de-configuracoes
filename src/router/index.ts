// Bibliotecas
import { createRouter, createWebHistory } from 'vue-router';
// Pages
import HomePage from '../pages/HomePage.vue';
import AboutPage from '../pages/VueQuery.vue';
import SettingsPage from '../pages/SettingsPage.vue';
import ProfileSettings from '../pages/settings/ProfileSettings.vue';
import SecuritySettings from '../pages/settings/SecuritySettings.vue';
import NotificationsSettings from '../pages/settings/NotificationsSettings.vue';
import BillingSettings from '../pages/settings/BillingSettings.vue';
import IntegrationsSettings from '../pages/settings/IntegrationsSettings.vue';
import PrivacySettings from '../pages/settings/PrivacySettings.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/vueQuery', name: 'VueQuery', component: AboutPage },
   { 
    path: '/settings', 
    component: SettingsPage,
    children: [
      { path: '', redirect: '/settings/profile' },
      { path: 'profile', name: 'ProfileSettings', component: ProfileSettings },
      { path: 'security', name: 'SecuritySettings', component: SecuritySettings },
      { path: 'notifications', name: 'NotificationsSettings', component: NotificationsSettings },
      { path: 'privacy', name: 'PrivacySettings', component:  PrivacySettings}, 
      { path: 'billing', name: 'BillingSettings', component: BillingSettings }, 
      { path: 'integrations', name: 'IntegrationsSettings', component: IntegrationsSettings},
    ]
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundPage },
];

 const router = createRouter({
        history: createWebHistory(),
        routes,
      });

export default router;
