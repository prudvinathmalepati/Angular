import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ErrorsComponent } from './errors/errors.component';
import { WarningsComponent } from './warnings/warnings.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorsComponent,
    WarningsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
