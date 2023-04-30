import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { AgendaComponent } from './agenda/agenda.component';
import { MenuNavegacaoComponent } from './menu-navegacao/menu-navegacao.component';
import { CursoComponent } from './curso/curso.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { BiografiaComponent } from './biografia/biografia.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MensagemInicialModalComponent } from './modais/mensagem-inicial-modal/mensagem-inicial-modal.component';
import { MatDialogModule } from '@angular/material/dialog'; // importe o MatDialogModule



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContatoComponent,
    AgendaComponent,
    MenuNavegacaoComponent,
    CursoComponent,
    BiografiaComponent,
    MensagemInicialModalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
