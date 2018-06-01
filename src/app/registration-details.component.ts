//Component to faciliate user registration

import { Component, OnInit } from '@angular/core';
import {Participant} from './participant';
import {HotelListService} from './hotel-list.service';
import {StatusListService} from './status-list.service';
import {PaymentListService} from './payment-list.service';
import { ParticipantListService } from './participant-list.service';

@Component({
  selector: 'registration-details',
  templateUrl: './registration.component.html',
  providers: [Participant, HotelListService, StatusListService, PaymentListService, ParticipantListService],
  styleUrls: ['./registration.component.css']
})

export class RegistrationDetails implements OnInit 
{ 
 	participantStatusList :String[];
 	hotelList : String[];
 	paymentModeList : String[];
 	participant: Participant;
 	invaliddetails : boolean;
 	
 	constructor(private p : Participant, private hotellistservice : HotelListService,
 		    private statuslistservice : StatusListService, private pmodeservice : PaymentListService,
 		    private plservice : ParticipantListService)
 	{ 
 	}
 	
 	//fetch the list of hotels, payment mode and participant status list using services.
 	ngOnInit() : void
 	{
 		this.participant = this.p;
 	  this.hotelList = this.hotellistservice.gethotelslist(); 	  
 	  this.participantStatusList = this.statuslistservice.getstatuslist();
 	  this.paymentModeList = this.pmodeservice.getpaymentmodelist();
 	}
 	
 	//function defined for button : validate the null fields and adds participant using a participant list service
 	addparticipant(p: Participant):void
 	{	console.log(p.name);
 		if (p.name=="Enter name" || p.address =="Enter address" || p.contact == 0)
 		  this.invaliddetails = true;
 		else
 			this.invaliddetails = false;
 		
 		if (this.invaliddetails == false)
 			this.plservice.addparticipant(p);
 			
 		console.log("validate",this.invaliddetails);
 	}	
}
