import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-work-exp-item",
  templateUrl: "./work-exp-item.component.html",
  styleUrls: ["./work-exp-item.component.css"]
})
export class WorkExpItemComponent implements OnInit {
  @Input() workExpItem;
  faInfoCircle = faInfoCircle;

  constructor() {}

  ngOnInit(): void {}
}
