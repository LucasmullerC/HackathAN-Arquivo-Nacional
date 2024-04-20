import { Routes } from '@angular/router'
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { JogoComponent } from './pages/jogo/jogo.component';

export const routes: Routes = [
    {
        path:'',
        component: InicioComponent,
        runGuardsAndResolvers: 'always',
      },
      {
        path:'login',
        component: LoginComponent,
        runGuardsAndResolvers: 'always',
      },
      {
        path:'jogo',
        component: JogoComponent,
        runGuardsAndResolvers: 'always',
      }
];
