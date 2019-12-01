import { Component, OnInit } from "@angular/core";
import { Quote } from "../quote";

@Component({
  selector: "app-quotes",
  templateUrl: "./quotes.component.html",
  styleUrls: ["./quotes.component.css"]
})
export class QuotesComponent implements OnInit {
  showDetails: boolean = false;
  quotes: Quote[] = [
    {
      name: "Anthony Ng'ang'a",
      actualQuote:
        "There is nothing more powerful in the world than the idea that came in time.",
      author: "Victor Hugo",
      postedBy: "Anthony Ng'ang'a"
    },
    {
      name: "James O'brien",
      actualQuote:
        "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
      author: "Aristotle",
      postedBy: "Andrew Mark"
    },
    {
      name: "John Doe",
      actualQuote:
        "Never bend your head. Always hold it high. Look the world straight in the eye.",
      author: "Hellen Keller",
      postedBy: "Mr. Somebody"
    }
  ];


  constructor() {}

  ngOnInit() {}
}
