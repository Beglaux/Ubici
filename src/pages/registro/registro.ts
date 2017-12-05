import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { FileOpener } from '@ionic-native/file-opener';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  usuario:string;
  password:string;
  nombres:string;
  apellidos:string;
  genero:string;
  correo:string;
  fechaNacimiento:string; 
  userData: any;

  constructor(public navCtrl: NavController, public iab: InAppBrowser, private facebook: Facebook, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }
}
