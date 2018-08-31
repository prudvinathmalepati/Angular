import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultSubscription = 'Advanced';
  submitted= false;

  sub = {
    email: '',
    subscription: '',
    password: ''
  }

  onSubmit(form: NgForm) {
    this.submitted = true;
    this.sub.email = form.value.email;
    this.sub.subscription = form.value.subscription;
    this.sub.password = form.value.password;

    form.reset();
  }
}
