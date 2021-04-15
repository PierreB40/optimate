import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// Custom components
import { LoginComponent } from './views/login/login.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ForcolComponent } from './views/forcol/forcol.component';
import { SupplyComponent } from './views/supply/supply.component';

// PrimeNG component
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {MenuModule} from 'primeng/menu';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ToolbarComponent,
    ForcolComponent,
    SupplyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MenubarModule,
    ButtonModule,
    CardModule,
    TableModule,
    InputTextModule,
    MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
