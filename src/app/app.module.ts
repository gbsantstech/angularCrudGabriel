import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { FuncionarioModule } from './funcionario';
import { ListarFuncionarioComponent } from './listar-funcionario/listar-funcionario.component';
import { EditarFuncionarioComponent } from './editar-funcionario/editar-funcionario.component';
// import { CadastrarFuncionarioComponent } from './cadastrar-funcionario/cadastrar-funcionario.component';

@NgModule({
  declarations: [
    AppComponent,
    // EditarFuncionarioComponent,
    // CadastrarFuncionarioComponent,
    // ListarFuncionarioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FuncionarioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
