import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Quote } from "../quote";

@Component({
  selector: "app-add-quote",
  templateUrl: "./add-quote.component.html",
  styleUrls: ["./add-quote.component.css"]
})
export class AddQuoteComponent implements OnInit {
  addQuote: string;

  newQuote = new Quote("", "", "");
  @Output() addedQuote = new EventEmitter<Quote>();

  submittedQuote() {
    this.addedQuote.emit(this.newQuote);
  }
  // formatQuote() {
  //   let quoteToFormat = document.getElementById("quoted");
  //   quoteToFormat.style.first
  // }

  // onSubmit(submitedForm: ngForm) : void {
  //   console.log(submitedForm.value);
  // }

  constructor() {}

  ngOnInit() {}
}
