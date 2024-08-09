import { Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { SeletorComponent } from './views/seletor/seletor.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LancarOsComponent } from './views/ordens-de-servico/lancar-os/lancar-os.component';
import { AprovarOsComponent } from './views/ordens-de-servico/aprovar-os/aprovar-os.component';
import { ListagemDeOsComponent } from './views/ordens-de-servico/listagem-de-os/listagem-de-os.component';
import { ListagemDePessoasComponent } from './views/pessoas/listagem-de-pessoas/listagem-de-pessoas.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login', pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'seletor',
        component: SeletorComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },

    ///CATEGORIA: SERVIÇOS///

    {
        path: 'servicos/lancar-os',
        component: LancarOsComponent
    },
    {
        path: 'servicos/aprovar-os',
        component: AprovarOsComponent
    },
    {
        path: 'servicos/listagem-de-os',
        component: ListagemDeOsComponent
    },

    ///CATEGORIA: PESSOAS
    {
        path: 'pessoas/listagem-de-pessoas',
        component: ListagemDePessoasComponent
    }

];
