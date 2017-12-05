import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomeTPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google: any;

@IonicPage()
@Component({
  selector: 'page-home-t',
  templateUrl: 'home-t.html',
})
export class HomeTPage {
  nombre:string;
  password:string; 
  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
        
  }
  goBack() {
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina3Page');
    this.initMap();
  this.nombre = this.navParams.get("nombre");
  this.password = this.navParams.get("password");
  }
  initMap(){
    let lating = new google.maps.LatLng(-17.393835, -66.156946);
    let mapOptions = {
      center: lating,
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }
}
