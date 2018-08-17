import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent implements OnInit {
  
  activeUsers: string[];
  inactiveUsers: string[];

  acToInCounter: number = 0;
  inToAcCounter: number = 0;
  constructor(private usersService: UsersService) {
    usersService.counterEvent.subscribe(
      (acToInCounter: boolean) => {
        if(acToInCounter) {
          this.acToInCounter++;
        } else {
          this.inToAcCounter++;
        }
      }
    );
  }

  ngOnInit() {
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
  }
  
}
