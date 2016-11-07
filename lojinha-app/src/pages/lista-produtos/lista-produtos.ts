import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetalheProduto } from '../detalhe-produto/detalhe-produto';
import { ProdutoService } from '../../providers/produto-service';
import { Produto } from '../../model/produto';

/*
  Generated class for the ListaProdutos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-lista-produtos',
  templateUrl: 'lista-produtos.html'
})
export class ListaProdutos {

  produtos: Produto[];
  errorMessage: string;

  constructor(public navCtrl: NavController, public service: ProdutoService) {}

  ionViewDidLoad() {
  }

  ionViewWillEnter() {
    this.getListaProdutos();
  }

  getListaProdutos() {
		this.service.listar().then(
			produtos => this.produtos = produtos, 
			error => this.errorMessage = <any>error);
	}

  mostrarDetalhes(event, idProd) {
    this.navCtrl.push(DetalheProduto, {
      id: idProd
    });
  }

}
