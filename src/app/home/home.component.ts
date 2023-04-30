import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MensagemInicialModalComponent } from '../modais/mensagem-inicial-modal/mensagem-inicial-modal.component';
import { modalAnimations } from '../animacoes/explosao';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[modalAnimations]
})
export class HomeComponent implements OnInit {

  constructor(private dialog: MatDialog){

  }

  ngOnInit(): void {
    this.abrirModal();
  }
  abrirModal() {
    const dialogRef = this.dialog.open(MensagemInicialModalComponent, {
      width: '60vw', height: '50vh',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
