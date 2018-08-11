import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject} from 'angularfire2/database';
import { Direccion } from '../../models/direccion';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators/map';

@Injectable()
export class DireccionesProvider {

  direccionRef: AngularFireObject<Direccion>;
  direccion: Observable<Direccion>;

  direccionesRef: AngularFireList<Direccion>;
  direcciones: Observable<Direccion[]>

  constructor(private afdb: AngularFireDatabase) {

    // this.direccionRef = afdb.object('direccion');
    // this.direccion = this.direccionRef.valueChanges();

    this.direccionesRef = afdb.list('direcciones');
    this.direcciones = this.direccionesRef.snapshotChanges().pipe(
      map(changes => changes.map(c => ({ key : c.payload.key, ...c.payload.val()}))
    ));
  }

  crearDireccion(direccion:Direccion){
     return this.direccionesRef.push(direccion);
  }

  obtenerDireccion(key){
    this.direccionRef = this.afdb.object(`direcciones/${key}`);
    this.direccion = this.direccionRef.valueChanges()
    return this.direccion;
  }

}
