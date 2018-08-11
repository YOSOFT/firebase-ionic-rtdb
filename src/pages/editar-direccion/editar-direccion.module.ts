import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditarDireccionPage } from './editar-direccion';

@NgModule({
  declarations: [
    EditarDireccionPage,
  ],
  imports: [
    IonicPageModule.forChild(EditarDireccionPage),
  ],
})
export class EditarDireccionPageModule {}
