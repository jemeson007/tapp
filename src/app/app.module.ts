import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
// import { HttpClientModule } from '@angular/common/http';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { Imds } from './in-memory-data.service';
import  AppComponent  from './app.component';
import { ROUTES } from './app.routing';
import { HFComponent } from './h-f/h-f.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
// import { MatLabelModule } from '@angular/material/label';
// import { MatOptionModule,  }
// import {MDCFoo, MDCFooFoundation} from '@material/foo';
// import {MDCTopAppBar} from '@material/top-app-bar';
import { MatOptionModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    HFComponent
  
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    // HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   Imds
    //   , { dataEncapsulation : false }
    // ),
    FlexLayoutModule,
    MatIconModule,
    MatCardModule,
    // MDCFoo,
    // MDCFooFoundation
    // MDCTopAppBar
    // MatLabelModule,
    MatOptionModule,
    MatSelectModule,
    MatToolbarModule
    
  ],
  // exports :[ 
  //   MDCTopAppBar
  // ],

  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {


 }
