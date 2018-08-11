import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { Direccion } from '../../models/direccion';
import { DireccionesProvider } from '../../providers/direcciones/direcciones';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  direcciones: Observable<Direccion[]>
  paginaRuta;
  constructor(
    public navCtrl: NavController,
    private servicioDirecciones: DireccionesProvider
  ) {

  }

  ionViewDidLoad(){
    this.direcciones = this.servicioDirecciones.direcciones;
  }

  editarDireccion(key){
    this.navCtrl.push('EditarDireccionPage', {key : key});
  }

}
