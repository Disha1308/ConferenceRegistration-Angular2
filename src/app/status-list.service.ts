import { Injectable} from '@angular/core';

//array of string defining person's status
const STATUSLIST : String [] = ["Student","Professor", "Professional"]

@Injectable()
export class StatusListService 
{
	/* Funtion : return the list of person status.
	   input: void
	   output: string array
	   */
	getstatuslist() : String[] 
	{
		return STATUSLIST;
	}
}
