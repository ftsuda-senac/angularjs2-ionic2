import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { ProdutoService } from './produto.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
	providers:		[ ProdutoService ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }