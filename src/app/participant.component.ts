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
  	      <label>Name : {{participant.name}}</label><br>
  	      <label>Contact : {{participant.contact}}</label><br>
  	      <label>Address : {{participant.address}}</label><br>
  	      <label>Nationality : {{participant.nationality}}</label><br>
  	      <label>Status : {{participant.status}}</label><br>  	      
  	      <label>Hotel Preference : {{participant.hotelpreference}}</label><br>  	   
  	    <label>Payment Mode : {{participant.paymentmode}}</label><br> 
  	    <button (click) = "goBack()">Go Back</button></div>
  		`,
})
export class ParticipantComponent  implements OnInit{ 
	participant : Participant; 
	
	constructor(
  	private parlistservice: ParticipantListService,
  	private route: ActivatedRoute,
  	private location: Location
	) {}
	
	
	ngOnInit() : void
	{  
	this.route.params
    .switchMap((params: Params) => this.parlistservice.getparticipant(+params['id']))
    .subscribe(participant => this.participant = participant);
    	
    	}
	
	goBack(): void {
  	this.location.back();
	}

	}
	
	
