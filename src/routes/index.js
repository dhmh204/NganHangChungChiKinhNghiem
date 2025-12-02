export * from './routes';
// Ví dụ trong file cấu hình route
import AuthPage from '~/pages/Auth'; 
const routes = [
  { path: '/login', component: AuthPage },
  { path: '/register', component: AuthPage },
  // ...
];