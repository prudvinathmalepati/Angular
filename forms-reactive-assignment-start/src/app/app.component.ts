import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  projectForm : FormGroup;

  statusArray = ['Stable', 'Critical', 'Finished'];
  invalidProjectNames = ['Test'];

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required], [this.invalidNames]),
      'projectStatus': new FormControl(null),
      'email': new FormControl(null, [Validators.required, Validators.email])
    })
  }

  // invalidNames(control: FormControl) : {[s:string] : boolean}  {
  //   if(this.invalidProjectNames.indexOf(control.value) != -1 ) {
  //     return {'invalidProjectName': true};
  //   } else {
  //     return null;
  //   }
  // }

  invalidNames(control: FormControl) : Promise<any> | Observable<any> {
    const promise = new Promise<any> ( (resolve, reject) => {
      setTimeout(() => {
        if(control.value==='Test') {
          resolve({'invalidProjectName': true});
        } else {
          resolve(null);
        }
      }, 2000);  
    } );

    return promise;
  }

  onSubmit() {
    console.log(this.projectForm);
  }
}
