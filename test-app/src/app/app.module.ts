import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { MySearchPipe } from './my-search.pipe';
import { ItemListService } from "./item-list/item-list.service";
import { HttpModule } from '@angular/http';

import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'crisis-center', component: PageNotFoundComponentComponent },
  { path: 'heroes',      component: ItemListComponent }  
  
];


@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    MySearchPipe,
    PageNotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [ItemListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
