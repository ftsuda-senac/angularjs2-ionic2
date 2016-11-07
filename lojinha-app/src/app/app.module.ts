import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { ListaProdutos } from '../pages/lista-produtos/lista-produtos';
import { DetalheProduto } from '../pages/detalhe-produto/detalhe-produto';
import { Login } from '../pages/login/login';
import { Configuracao } from '../pages/configuracao/configuracao';
import { ProdutoService } from '../providers/produto-service';

@NgModule({
  declarations: [
    MyApp,
    ListaProdutos,
    DetalheProduto,
    Login,
    Configuracao
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListaProdutos,
    DetalheProduto,
    Login,
    Configuracao
  ],
  providers: [
    ProdutoService
  ]
})
export class AppModule {}
