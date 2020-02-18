import { Component, OnInit } from "@angular/core";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  faUser = faUser;
  faPaintBrush = faPaintBrush;

  constructor() {}

  ngOnInit(): void {}
}
