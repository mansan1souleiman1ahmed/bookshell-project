import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "apollo-client/util/Observable";
import gql from "graphql-tag";

type Response = {
  book: {};
};

@Component({
  selector: "app-books-details-component",
  templateUrl: "./books-details-component.component.html",
  styleUrls: ["./books-details-component.component.css"]
})
export class BooksDetailsComponentComponent implements OnInit {
  private routeSub: Subscription;
  constructor(
    public apollo: Apollo,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  book: {} = {};
  isbn: string = "";

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.isbn = params["id"];
    });
    this.apollo
      .watchQuery<Response>({
        query: gql`
          query getBook($isbn: ID!) {
            book(isbn: $isbn) {
              isbn
              title
              author
            }
          }
        `,
        variables: {
          isbn: this.isbn
        }
      })
      .valueChanges.subscribe(result => {
        this.book = result.data.book;
      });
  }
}
