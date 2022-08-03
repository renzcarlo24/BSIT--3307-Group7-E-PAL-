import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth) { }

  loginFireauth(value){
    return new Promise<any> ( (resolve, reject)=>{
      firebase.auth().signInWithEmailAndPassword(value.email, value.password).then(
        res => resolve(res),
        error => reject(error)
      )
    })
   }
   userRegistration(value){
    return new Promise<any> ( (resolve, reject)=>{
      firebase.auth().createUserWithEmailAndPassword(value.email,value.password).then(
        res => resolve(res),
        error => reject(error)
      )
    })
  }
}
