import { Injectable } from '@angular/core';

const HOTELS : String[] = ["Hotel A", "Hotel B", "Hotel C"];

@Injectable()
export class HotelListService 
{

	gethotelslist() : String[] 
	{
		return HOTELS;
	}
}
