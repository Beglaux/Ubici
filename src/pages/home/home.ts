import { Component } from '@angular/core';
import {IonicPage, NavController } from 'ionic-angular';
import { TabPage} from '../tab/tab';
import { RegistroPage } from '../registro/registro';
import {Http, Headers } from '@angular/http'


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  titulo:string = 'UBICI';
  nombre:string;
  password:string; 
  

  constructor(public navCtrl: NavController, public http: Http) {
  }
  GoPageMenu(){
    var login = {
      nombre: this.nombre,
      password: this.password
    };
    this.navCtrl.push('TabPage', login);
  }
  GoPageRegistro(){
    this.navCtrl.push('RegistroPage');
  }

  login() {
    var link = 'http://ubici.000webhostapp.com/login.php';
    var login = {
      nombre: this.nombre,
      password: this.password
    };
    var data = JSON.stringify({username: login.nombre, password: login.password});
    
    this.http.post(link, data), error => {
        console.log("Oooops!");
    };
}
}

