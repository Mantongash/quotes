import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Quote } from "../quote";
import { toUnicode } from "punycode";

@Component({
  selector: "app-quote",
  templateUrl: "./quote.component.html",
  styleUrls: ["./quote.component.css"]
})
export class QuoteComponent implements OnInit {
  @Input() quote: Quote;
  @Input() showDetails: boolean;
  @Output() isComplete = new EventEmitter<boolean>();
  // @Output() quote: Quote
  linkName: string = "Show Details";

  toggleDetails() {
    this.showDetails = !this.showDetails;
    this.showDetails
      ? (this.linkName = "Hide Details")
      : (this.linkName = "Show Details");
  }

  // Like Counter

  likeCounter: number = 0;
  dislikeCounter: number = 0;
  // likes: number = this.quote.like;
  // maxVote = [];

  dislikeClick() {
    this.dislikeCounter++;
  }

  likeClick() {
    this.likeCounter++;
  }

  deleteQuote(complete:boolean) {
    this.isComplete.emit(complete);
      
    
  }
  constructor() {}

  ngOnInit() {}
}
