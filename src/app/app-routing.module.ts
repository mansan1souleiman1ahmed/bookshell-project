import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
//Import des components pages pour faire les roots
import { LoginComponent } from "./pages/login/login.component";
import { ErrorComponent } from "./pages/error/error.component";
import { BookPageComponent } from "./pages/book-page/book-page.component";
import { BooksDetailsComponentComponent } from "./components/books/books-details-component/books-details-component.component";
import { UserComponent } from "./pages/user/user.component";
import { RegisterComponent } from "./pages/register/register.component";
const routes: Routes = [
  {
    path: "",
    component: LoginComponent // CHANGE THIS TO HOME PAGE LATER
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "user",
    component: UserComponent
  },
  {
    path: "books",
    component: BookPageComponent
  },
  {
    path: "books/:id",
    component: BooksDetailsComponentComponent
  },
  {
    path: "book-rent/:id",
    component: RegisterComponent
  },
  {
    path: "**",
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
