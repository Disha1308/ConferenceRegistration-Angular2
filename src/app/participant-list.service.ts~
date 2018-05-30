import {Injectable} from '@angular/core';
import {Participant} from './participant';


	var participantList : Participant[] = [];
	
@Injectable()
export class ParticipantListService
{

	addparticipant( p : Participant) : void
	{
		p.id = participantList.length + 1;
		participantList.push(p);
		console.log("in service:",participantList.length);
		
	}
	
	getparticipantlist() : Participant[]
	{
		return participantList;
	}
	
	getparticipant(id: number): Promise<Participant>
	{
		return Promise.resolve(participantList).then(participantList => participantList.find(p => p.id === id));
	}
}
 
