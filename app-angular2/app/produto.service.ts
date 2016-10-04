import { Injectable } from '@angular/core';
import { Produto } from './produto';
import { PRODUTOS } from './produto-mock';

@Injectable()
export class ProdutoService {

	listar(): Promise<Produto[]> {
		return Promise.resolve(PRODUTOS);
	}

	obter(id: number): Promise<Produto> {
		return Promise.resolve(PRODUTOS).then(
			// *** USANDO SINTAXE "ARROW FUNCTION DO ES2015 ***
			resultados => resultados.filter(prod => prod.id === id)[0]
	
			// Funcao abaixo eh equivalente à acima.
			//function(resultados) {
			//	return resultados.filter(function(prod) {
			//		return prod.id === id;
			//	})[0];
			//}
		);
	}
	
	incluir(produto: Produto) {
		Promise.resolve(PRODUTOS).then(
			function(resultados) {
				let ultimo = resultados.reduce(function(prev, current) {
					return (prev.id > current.id) ? prev : current;
				});
				let proximoId = ultimo.id + 1;
				produto.id = proximoId;
				resultados.push(produto);
			}
		)
	}

}