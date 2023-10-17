import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { InputMaskModule } from 'primeng/inputmask';
import { FormsModule } from '@angular/forms';
import { Product2Component } from './product2/product2.component';
import { ListboxModule } from 'primeng/listbox';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    Product2Component,
   
  ],
 

  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    PanelModule,
    DropdownModule,
    ButtonModule,
    MultiSelectModule,
    DialogModule,
    CalendarModule,
    InputTextModule,
    ConfirmDialogModule,
    ToastModule,
    InputMaskModule,
    FormsModule,
    
  
  ],
  providers: [],
  
  bootstrap: [AppComponent],
 schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
 
