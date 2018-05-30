import { Component, OnInit } from '@angular/core';
import { Participant } from './participant' ;
import { ParticipantListService} from './participant-list.service';

@Component({
  selector: 'participant-list',
  template: ` 
  	        <h4>{{title}}</h4>
  	     
    		<a *ngFor="let p of participantList"  [routerLink]="['/participant', p.id]"  class="col-1-4">
    		
    		<span>{{p.id}}</span>  <span>{{p.name}}</span> <br> </a>
    		
    		  
    `,
    
  providers: [ParticipantListService]
})
export class ParticipantList  implements OnInit
{ 	
	title = 'List of Participant'; 
	participantList : Participant [];
	
	constructor(private plservice: ParticipantListService)
	{}
	
	ngOnInit() : void
	{
		this.participantList = this.plservice.getparticipantlist();
	}


}
