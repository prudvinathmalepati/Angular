import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName : String = "UserName";

  isUserNamePresent : boolean = true;

  clearUserName() {
    this.userName = "";
    this.isUserNamePresent = false;
  }

  userNameModified() {
    if(this.userName.length > 0) {
      this.isUserNamePresent = true;
    } else {
      this.isUserNamePresent = false;
    }
  }
}
