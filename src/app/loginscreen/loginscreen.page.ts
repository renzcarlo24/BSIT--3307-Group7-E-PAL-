import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from 'src/app/auth.service'
@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.page.html',
  styleUrls: ['./loginscreen.page.scss'],
})
export class LoginscreenPage implements OnInit {

  validationUserMessage={
    email:[
      {type:"required", message:"Please enter your Email"},
      {type:"pattern", message:"The Email entered is Incorrect.Try again"} 
    ],

    password:[
      {type:"required", message:"Please enter your password"},
      {type:"minlength", message:"The password must be at least 6 characters or more"} 
    ]
  }

  validationFormUser: FormGroup;
  constructor(public formbuider: FormBuilder, public authservice: AuthService, private router: Router, private firestore: AngularFirestore,) { }

  ngOnInit() {
    this.validationFormUser = this.formbuider.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      
      ]))
    })
  }
  LoginUser(value){
    console.log("Am logged in")
    try{
      this.authservice.loginFireauth(value).then( resp =>{
        console.log(resp);
        this.router.navigate(['tabs'])
      })
    }catch(err){
      console.log(err);
    }
  }

}
