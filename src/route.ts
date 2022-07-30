import { lazy } from 'solid-js';
import { RouteDefinition } from "solid-app-router";
import Login from "./pages/auth/login";
import DefaultLayout from './layout/defaultlayout';

export const routes: RouteDefinition[] = [
    {
        path: '/',
        component: Login
    },
    {
        path:'/auth',
        component: DefaultLayout,
        children:[
          { path: '/',component:lazy(() => import('./pages/dash/dashboard'))}
        ]
    }
]