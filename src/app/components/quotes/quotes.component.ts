import { Component, OnInit } from "@angular/core";
import { Quote } from "../quote";

@Component({
  selector: "app-quotes",
  templateUrl: "./quotes.component.html",
  styleUrls: ["./quotes.component.css"]
})
export class QuotesComponent implements OnInit {
  quotes: Quote[] = [
    {
      name: "Anthony Ng'ang'a",
      actualQuote:
        "There is nothing more powerful in the world than the idea that came in time.",
      author: "Victor Hugo"
    },
    {
      name: "James O'brien",
      actualQuote:
        "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
      author: "Aristotle"
    },
    {
      name: "John Doe",
      actualQuote:
        "Never bend your head. Always hold it high. Look the world straight in the eye.",
      author: "Hellen Keller"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
