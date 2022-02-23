import { Routes, RouterModule } from '@angular/router';

import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [
    { path: 'login', component: LoginFormComponent },
    
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);