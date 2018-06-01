import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { ParticipantList } from './participant-list.component' ;
import { RegistrationDetails } from './registration-details.component';
import { ParticipantComponent } from './participant.component';

import { RouterModule} from '@angular/router';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
  		RouterModule.forRoot([
  		{
    		path: 'participantslist',
    		component: ParticipantList
  		},
  		{
  		  path: 'register',
  		  component : RegistrationDetails
  		},
  		{ 
  		path: '',
  		redirectTo: '/register',
  		pathMatch: 'full'
  		},
  		{
  		path: 'participant/:id',
  		component: ParticipantComponent
		},
  
  		 ]) ],
  declarations: [ AppComponent, RegistrationDetails, ParticipantList, ParticipantComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
