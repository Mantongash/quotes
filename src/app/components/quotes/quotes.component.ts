import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Quote } from "../quote";
// import { ConditionalExpr } from "@angular/compiler";

@Component({
  selector: "app-quotes",
  templateUrl: "./quotes.component.html",
  styleUrls: ["./quotes.component.css"]
})
export class QuotesComponent implements OnInit {
  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();
  showDetails: boolean = false;
  quotes: Quote[] = [
    {
      actualQuote:
        "There is nothing more powerful in the world than the idea that came in time.",
      author: "Victor Hugo",
      postedBy: "Anthony Ng'ang'a"
    },
    {
      actualQuote:
        "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
      author: "Aristotle",
      postedBy: "Andrew Mark"
    },
    {
      actualQuote:
        "Never bend your head. Always hold it high. Look the world straight in the eye.",
      author: "Hellen Keller",
      postedBy: "Mr. Somebody"
    }
  ];

  addNewQuote(quote) {
    this.quotes.push(quote);
  }

  deleteQuote(isComplete, index) {
    // if (isComplete) {
    //   let toDelete = confirm(
    //     `Are you sure you want to delete ${this.quotes[index]}`);
    //     if(toDelete) {
    //       this.quotes.splice(index, 1);
    //     }
    // }
    // this.quotes.splice(i,1)
  }

  constructor() {}

  ngOnInit() {}
}
