import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-navegacao',
  templateUrl: './menu-navegacao.component.html',
  styleUrls: ['./menu-navegacao.component.css']
})
export class MenuNavegacaoComponent {
  menuAberto:boolean = false;

  abrirMenu(){
    if(this.menuAberto){
      this.menuAberto = false;
    } else{
      this.menuAberto = true;
    }
    return this.menuAberto;
  }
}
