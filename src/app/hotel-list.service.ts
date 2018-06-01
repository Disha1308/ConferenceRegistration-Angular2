//Service to provide list of hotels to the components.

import { Injectable } from '@angular/core';

const HOTELS : String[] = ["Hotel A", "Hotel B", "Hotel C"];

@Injectable()
export class HotelListService 
{
	/* Function : to provide the list of hotels
	input: void
	output : String array
	*/
	
	gethotelslist() : String[] 
	{
		return HOTELS;
	}
}
