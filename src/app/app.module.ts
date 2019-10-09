//This imports allow to navigate through pages using the browser
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
//All components that are created are automatically added here below
import { LoginComponent } from "./pages/login/login.component";
import { ErrorComponent } from "./pages/error/error.component";
import { BookPageComponent } from "./pages/book-page/book-page.component";
import { UserComponent } from "./pages/user/user.component";
import { RegisterComponent } from "./pages/register/register.component";
import { RegisterInputComponent } from "./components/register-input/register-input.component";
import { LoginInputComponent } from "./components/login-input/login-input.component";
import { BookListComponentComponent } from "./components/book-list-component/book-list-component.component";
import { UserDetailsComponent } from "./components/user-details/user-details.component";
//To make the http request you need to import the http clientmodule
//import { HttpClientModule } from "@angular/common/http";
//You use this import below to use observables
import { from } from "rxjs";
//In the import bellow you import the the Api that executes the Http request. Add this class to the provider array so it is accessible to all components in the App
import { BooksDetailsComponentComponent } from "./components/books/books-details-component/books-details-component.component";

// href

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { HttpClientModule } from "@angular/common/http";
import { Apollo, ApolloModule } from "apollo-angular";
import { ApolloLink } from "apollo-link";
import { HttpLink, HttpLinkModule } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { BookRentComponent } from "./components/books/book-rent/book-rent.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    BookPageComponent,
    UserComponent,
    RegisterComponent,
    RegisterInputComponent,
    LoginInputComponent,
    BookListComponentComponent,
    UserDetailsComponent,
    BooksDetailsComponentComponent,
    BookRentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpLinkModule,
    //GraphQLModule,
    ApolloModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    const uri = "https://graph.becode.xyz";
    const http = httpLink.create({ uri });

    const authLink = new ApolloLink((operation, forward) => {
      const token = localStorage.getItem("token");

      operation.setContext({
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoia2V5IiwidWlkIjoiZjc2NzA2NjItYjlkOC00NDA3LWI5MTQtZmUzOGZhZGVmZjA5Iiwia2V5IjoiYzllNTkxMDMiLCJpYXQiOjE1Njk5MTQxNDN9.0RcvIysa6i1OUJqP5o_1iZ55y0-pJ-E5vh9WKcdsIWU"
        },
        cors: true
      });

      return forward(operation);
    });

    apollo.create({
      link: authLink.concat(http),
      cache: new InMemoryCache()
    });
  }
}
