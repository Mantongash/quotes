import { Component, OnInit, Input } from "@angular/core";
import { Quote } from "../quote";

@Component({
  selector: "app-quote",
  templateUrl: "./quote.component.html",
  styleUrls: ["./quote.component.css"]
})
export class QuoteComponent implements OnInit {
  @Input() quote: Quote;
  @Input() showDetails: boolean;
  linkName: string = "Show Details";

  toggleDetails() {
    this.showDetails = !this.showDetails;
    this.showDetails
      ? (this.linkName = "Hide Details")
      : (this.linkName = "Show Details");
  }
  constructor() {}

  ngOnInit() {}
}
