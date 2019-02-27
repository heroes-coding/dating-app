import { Component, OnInit } from "@angular/core";
import { AuthService } from "../_services/auth.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"],
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  logout() {
    localStorage.removeItem("token");
    console.log("logged out");
  }
  loggedIn() {
    const token = localStorage.getItem("token");
    return !!token;
  }
  login() {
    this.authService.login(this.model).subscribe(
      next => {
        console.log("Logged in successfully");
      },
      error => {
        console.log(error);
      }
    );
  }
}
