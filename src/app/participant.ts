export class Participant
{
	id : number;
	name : String;
	contact : number;
	address : String;
	nationality : String;
	status : String;
	hotelpreference : String;
	paymentmode : String;
	
	constructor() 
	{
		this.id = 0;
		this.name = "Enter name";
		this.contact = 0;
		this.address = "Enter address";
	this.nationality = "Enter nationality";
	this.status = "Student";
	this.hotelpreference = null ;
	this.paymentmode = null;
		
	}
}
