import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { IniciosesionComponent } from './views/iniciosesion/iniciosesion.component';
import { ListarclienteComponent } from './components/cliente/listarcliente/listarcliente.component';
import { RegistrarclienteComponent } from './components/cliente/registrarcliente/registrarcliente.component';
import { AdministrarComponent } from './views/administrar/administrar.component';
import { ClienteComponent } from './components/cliente/cliente.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'iniciosesion', component: IniciosesionComponent },
    { path: 'administrar', component: AdministrarComponent },


    { path: 'cliente', component: ClienteComponent },

    { path: 'listarcliente', component: ListarclienteComponent },
    { path: 'registrarcliente', component: RegistrarclienteComponent },
];
