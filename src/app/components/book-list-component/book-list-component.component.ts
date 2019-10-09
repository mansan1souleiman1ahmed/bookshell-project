import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { BrowserModule } from "@angular/platform-browser";
//For customizing the url
import { ActivatedRoute } from "@angular/router";

type Response = {
  books: { nodes: [] };
};
@Component({
  selector: "app-book-list-component",
  templateUrl: "./book-list-component.component.html",
  styleUrls: ["./book-list-component.component.css"]
})
export class BookListComponentComponent implements OnInit {
  books: [] = [];

  constructor(private route: ActivatedRoute, private apollo: Apollo) {
    apollo
      .watchQuery<Response>({
        query: gql`
          {
            books(all: true) {
              nodes {
                isbn
                title
                author
              }
            }
          }
        `
      })
      .valueChanges.subscribe(result => {
        console.log(result);

        this.books = result.data.books.nodes;
        console.log("Books:", this.books);
      });
  }
  ngOnInit() {}
}
