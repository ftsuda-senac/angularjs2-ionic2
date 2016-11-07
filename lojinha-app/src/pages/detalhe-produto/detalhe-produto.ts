import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProdutoService } from '../../providers/produto-service';
import { Produto } from '../../model/produto';

/*
  Generated class for the DetalheProduto page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detalhe-produto',
  templateUrl: 'detalhe-produto.html'
})
export class DetalheProduto {

	produto: Produto;
	id: number;
	errorMessage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ProdutoService) {}

  ionViewDidLoad() {
  }

  ionViewWillEnter() {
		this.id = +this.navParams.get('id'); // O + converte string para numero
		this.getDetalheProduto(this.id);
  }

  getDetalheProduto(id) {
		this.service.obter(id).then(
			prod => this.produto = prod, 
			error => this.errorMessage = <any>error);
	}

}
