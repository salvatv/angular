import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HistorietasComponent } from './historietas/historietas.component';
import { HistorietaComponent } from './historietas/historieta/historieta.component';
import { MisHistorietasComponent } from './historietas/mis-historietas/mis-historietas.component';
import { CosasComponent } from './cosas/cosas.component';
import { ColegasComponent } from './colegas/colegas.component';
import { EventosComponent } from './eventos/eventos.component';
import { DatosComponent } from './cosas/datos/datos.component';
import { ColeguillasComponent } from './cosas/coleguillas/coleguillas.component';
import { BuscadorComponent } from './colegas/buscador/buscador.component';
import { HistorietasService } from './historietas/mis-historietas/historietas-service';
import { SearchPipe } from './colegas/buscador/searchpipe';

const appRoutes: Routes = [
  { path: 'historietas', component: HistorietasComponent },
  { path: 'cosas', component: CosasComponent },
  { path: 'colegas', component: ColegasComponent },
  { path: 'eventos', component: EventosComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HistorietasComponent,
    HistorietaComponent,
    MisHistorietasComponent,
    CosasComponent,
    ColegasComponent,
    EventosComponent,
    DatosComponent,
    ColeguillasComponent,
    BuscadorComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [HistorietasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
