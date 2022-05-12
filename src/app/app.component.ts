import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sendEmail';
  data:FormGroup;
  constructor( private httpclien:HttpClient) {
    this.data = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      subject: new FormControl('',Validators.required),
      message: new FormControl('',Validators.required)
    })
  }
  sendEmail(){
    this.httpclien.post()
  }
}
