//Component to contain participant detail and display on participant template.

import { Component, OnInit } from '@angular/core';
import { Participant } from './participant';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { ParticipantListService } from './participant-list.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'participant',
  providers: [ ParticipantListService],
  
  template: ` <div *ngIf = 'participant'>
  	      <h4> Participant Details</h4>
  	      <label><span>Name :</span> {{participant.name}}</label><br>
  	      <label><span>Contact : </span>{{participant.contact}}</label><br>
  	      <label><span>Address : </span>{{participant.address}}</label><br>
  	      <label><span>Nationality :</span> {{participant.nationality}}</label><br>
  	      <label><span>Status :</span> {{participant.status}}</label><br>  	      
  	      <label><span>Hotel Preference :</span> {{participant.hotelpreference}}</label><br>  	   
  	    <label><span>Payment Mode :</span> {{participant.paymentmode}}</label><br> 
  	    <button (click) = "goBack()">Go Back</button></div>
  		`,
  		
  styles :[`label
{
    display: block;
}

label span
{
    display: inline-block;
    text-align: right;
    width: 200px;
}
 
button{ margin-left : 150px;}
H4 { margin-left : 100px;}
`],
})
export class ParticipantComponent  implements OnInit{ 
	participant : Participant; 
	
	constructor(
  	private parlistservice: ParticipantListService,
  	private route: ActivatedRoute,
  	private location: Location
	) {}
	
	//Use to fetch the participant using Participant List Service and userid obtained for active URL
	
	ngOnInit() : void
	{  
	this.route.params
    .switchMap((params: Params) => this.parlistservice.getparticipant(+params['id']))
    .subscribe(participant => this.participant = participant);
    	
    	}
	
	//Back button function to navigate to the previous page.
	goBack(): void {
  	this.location.back();
	}

	}
	
	
