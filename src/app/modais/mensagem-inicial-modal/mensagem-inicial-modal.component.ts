import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-mensagem-inicial-modal',
  templateUrl: './mensagem-inicial-modal.component.html',
  styleUrls: ['./mensagem-inicial-modal.component.css']
})
export class MensagemInicialModalComponent {
  constructor(
    public dialogRef: MatDialogRef<MensagemInicialModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}


  onCancelar(): void {
    this.dialogRef.close(false);
  }
}
