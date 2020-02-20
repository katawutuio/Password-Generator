import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  password = "";
  includeLetters = false;
  includeNumbers = false;
  includeSymbol = false;

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbol() {
    this.includeSymbol = !this.includeSymbol;
  }

  onButtonClick() {
    this.password = "MY PASSWORD!!!";
  }
}
