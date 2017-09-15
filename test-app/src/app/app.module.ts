import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { MySearchPipe } from './my-search.pipe';
import { ItemListService } from './item-list/item-list.service';
import { HttpModule } from '@angular/http';

import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { OrderComponent } from './order/order.component';
import { CartComponent } from './order/cart/cart.component';
import { CartService } from './order/cart/cart.service';
import { FormularioComponent } from './order/formulario/formulario.component';

const appRoutes: Routes = [
  { path: 'heroes', component: ItemListComponent },
  { path: 'crisis-center', component: PageNotFoundComponentComponent },
  { path: 'order', component: OrderComponent }


];

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    MySearchPipe,
    PageNotFoundComponentComponent,
    ItemComponent,
    OrderComponent,
    CartComponent,
    FormularioComponent
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
  providers: [ItemListService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
