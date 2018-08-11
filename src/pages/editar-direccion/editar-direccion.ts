import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Direccion } from '../../models/direccion';
import { Observable, of } from 'rxjs';

import { DireccionesProvider } from '../../providers/direcciones/direcciones';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-editar-direccion',
  templateUrl: 'editar-direccion.html',
})
export class EditarDireccionPage {

  direccion: Observable<Direccion>;
  esNuevo: Boolean;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private servicioDirecciones: DireccionesProvider
  ) {

    console.log(navParams.get('key'));
    this.esNuevo = navParams.get('key') === 'nueva';
  }

  ionViewDidLoad() {
    console.log(this.esNuevo);
    if(this.esNuevo)
    {

      let direcion: Direccion = new Direccion()
      ;
      direcion.nombre = ' ';
      this.direccion = of(direcion) as Observable<Direccion>;
    }else {
      this.direccion  = this.servicioDirecciones.obtenerDireccion(this.navParams.get('key'));
    }
  }

  crearDireccion(direccion: Direccion){
    this.servicioDirecciones.crearDireccion(direccion)
    .then(res => this.navCtrl.setRoot(HomePage));
  }

}
