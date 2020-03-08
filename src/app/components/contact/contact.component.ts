import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  contactForm;
  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      emailAddress: "",
      body: ""
    });
  }

  ngOnInit(): void {}

  onSubmit(customerData) {
    // Process checkout data here

    this.contactForm.reset();

    console.warn("Your order has been submitted", customerData);
  }
}
