//angular core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatInputModule,MatSelectModule,
        MatRadioModule,MatNativeDateModule,MatDatepickerModule,MatDialogModule,
        MatTableModule,MatSortModule} from '@angular/material';

// form Module
import { FormsModule } from '@angular/forms';

// form Module
import { RouterModule} from  '@angular/router';
//http Module
import { HttpModule } from '@angular/http';
//used Components
import { AppComponent } from './app.component';
import { CreateFormComponent/*, UpdateDialog*/ } from './create-form/create-form.component';
import { TableFilteringExample, DeleteDialog} from './userlist/userlist.component';


//services
import { UserService } from './user.service';



// import 'rxjs/add/operator/map';
// import { Observable } from 'rxjs';


//Routing paths
const ROUTES = [
  {
    path: '',
    redirectTo: 'form',
    pathMatch: 'full'
  },
  {
  path: 'form', 
  component: CreateFormComponent
  },
  {
    path: 'form/:id', 
    component: CreateFormComponent
  },
  {
    path: 'list', 
    component: TableFilteringExample
  }
  
];

@NgModule({
  declarations: [
    AppComponent,
    CreateFormComponent,
    DeleteDialog,
    /*UpdateDialog,*/
    TableFilteringExample
  ],
  entryComponents:[DeleteDialog/*,UpdateDialog*/],
  imports: [
    BrowserModule,HttpModule,FormsModule,RouterModule.forRoot(ROUTES),
    //material
    BrowserAnimationsModule,
    NoopAnimationsModule,
    //material used fields 
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatButtonModule,
    MatRadioModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
