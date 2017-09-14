import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HistorietasComponent } from './historietas/historietas.component';
import { HistorietaComponent } from './historietas/historieta/historieta.component';
import { MisHistorietasComponent } from './historietas/mis-historietas/mis-historietas.component';

const appRoutes: Routes = [
  { path: 'historietas', component: HistorietasComponent },

  

];

@NgModule({
  declarations: [
    AppComponent,
    HistorietasComponent,
    HistorietaComponent,
    MisHistorietasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
