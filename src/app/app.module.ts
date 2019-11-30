import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule} from "@angular/common"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddQuoteComponent } from './components/add-quote/add-quote.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { QuoteComponent } from './components/quote/quote.component';

@NgModule({
  declarations: [
    AppComponent,
    AddQuoteComponent,
    QuotesComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
