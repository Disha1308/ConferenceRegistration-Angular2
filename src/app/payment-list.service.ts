import { Injectable} from '@angular/core';

const PAYMENTMODELIST : String [] = ["Dollars","Rupees", "Euro"]

@Injectable()
export class PaymentListService 
{

	getpaymentmodelist() : String[] 
	{
		return PAYMENTMODELIST;
	}
}