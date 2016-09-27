import { Component, Input } from '@angular/core';
import { Produto } from './produto';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {

	private _mensagem: string = 'Mensagem do componente';

  outraMensagem: string = 'Outra mensgem do componente - acesso public'

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

	prods: Produto[] = [
		{'id': 1, 'nome': 'Bolo 1',
			'descricao': 'xpto 111', 'preco': 1.11 },
		{'id': 2, 'nome': 'Bolo 2',
			'descricao': 'xpto 222', 'preco': 2.22 },
		{'id': 3, 'nome': 'Bolo 3',
			'descricao': 'xpto 3', 'preco': 3.33 },
		{'id': 4, 'nome': 'Bolo 4',
			'descricao': 'xpto 4', 'preco': 4.44 },
	];

	mostrarId(id) {
		alert(id);
	}

}
