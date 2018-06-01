// Declare the participant list array variable and define services to add and return the participant.

import {Injectable} from '@angular/core';
import {Participant} from './participant';

// Array variable to store the list of participant.
	var participantList : Participant[] = [];
	

@Injectable()
export class ParticipantListService
{
	/* Funtion : add a single participant object to the array and assign id.
	   input: Participant object
	   output: void
	   */
	   
	addparticipant( p : Participant) : void
	{
		p.id = participantList.length + 1;
		participantList.push(p);
		console.log("in service:",participantList.length);
		
	}
	
	/* Funtion : return the list of participants
	   input: void
	   output: participant array 
	   */
	getparticipantlist() : Participant[]
	{
		return participantList;
	}
	
	/* Funtion : return the details of participants based on participant id.
	   input: an integer id
	   output: participant object
	   */
	getparticipant(id: number): Promise<Participant>
	{
		return Promise.resolve(participantList).then(participantList => participantList.find(p => p.id === id));
	}
}
 
