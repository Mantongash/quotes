import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AddQuoteComponent } from "./components/add-quote/add-quote.component";
import { QuotesComponent } from "./components/quotes/quotes.component";
import { QuoteComponent } from "./components/quote/quote.component";
import { QuoteDetailsComponent } from "../app/components/quote-details/quote-details.component";

@NgModule({
  declarations: [
    AppComponent,
    AddQuoteComponent,
    QuotesComponent,
    QuoteComponent,
    QuoteDetailsComponent
    //   ConfirmationPopoverModule.forRoot({
    //     confirmButtonType: "danger"
    //   })
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
