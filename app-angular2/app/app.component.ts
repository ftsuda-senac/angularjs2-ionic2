import { Component, Input, OnInit } from '@angular/core';
import { Produto } from './produto';
import { ProdutoService } from './produto.service';
import { PRODUTOS } from './produto-mock';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent implements OnInit {

	private _mensagem: string = 'Mensagem do componente';

  outraMensagem: string = 'Outra mensgem do componente - acesso public'
	
	prods: Produto[];
	
	constructor(private service: ProdutoService) {
		
	}

  get mensagem(): string {
    return this._mensagem + ' - acesso via get';
  }
	set mensagem(msg: string) {
    this._mensagem = msg;
  }

	@Input()
	prod: Produto = {
		'id': 1,
		'nome': 'Bolo de chocolate',
		'descricao': 'Melhor bolo',
		'preco': 59.99
	};

	mostrarId(id) {
		//alert(id);
		this.service.obter(id).then(p => this.prod = p);
	}
	
	ngOnInit() { // vem do OnInit
		this.service.listar().then(xpto => this.prods = xpto);
	}

}
