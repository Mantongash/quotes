import { Component, OnInit, Input } from "@angular/core";
import { QuotesComponent } from "../quotes/quotes.component";
import { Quote } from "../quote";

@Component({
  selector: "quote-details",
  templateUrl: "./quote-details.component.html",
  styleUrls: ["./quote-details.component.css"]
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quoteDetail: Quote;
  @Input() showDetails: boolean;




  constructor() {}

  ngOnInit() {}
}
