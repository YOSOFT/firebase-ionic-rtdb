import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DireccionesProvider } from '../providers/direcciones/direcciones';

import { AngularFireModule} from 'angularfire2/'
import { AngularFireDatabaseModule } from 'angularfire2/database';

import {AgmCoreModule} from '@agm/core';

var configFirebase = {
  apiKey: "AIzaSyBhGLXHo48ROqbZH7ImKdUXSbVE82cTewA",
  authDomain: "rutas-bicicletas.firebaseapp.com",
  databaseURL: "https://rutas-bicicletas.firebaseio.com",
  projectId: "rutas-bicicletas",
  storageBucket: "rutas-bicicletas.appspot.com",
  messagingSenderId: "128528284788"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(configFirebase),
    AngularFireDatabaseModule,
    AgmCoreModule.forRoot({
      apiKey : 'AIzaSyBhGLXHo48ROqbZH7ImKdUXSbVE82cTewA'}),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DireccionesProvider
  ]
})
export class AppModule {}
