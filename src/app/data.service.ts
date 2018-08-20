import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Customer } from './customer.model';
//import { CUSTOMERS } from './customers';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor( private http: HttpClient) { }



saveCustomer(customer){
	return this.http.post("http://192.168.10.159:8085/customermanagement-0.0.1/api/savecustomer",customer);//.map(res => { return res;});
}

getData(){
	return this.http.get("http://192.168.10.159:8085/customermanagement-0.0.1/api/customers");

}

deleteCustomerById(id){
	 return this.http.delete("http://192.168.10.159:8085/customermanagement-0.0.1/api/delete/"+id);
}scp -r -o StrictHostKeyChecking=no /var/lib/jenkins/workspace/customer-nginx/dist madhuwanti@192.168.10.160:/var/www/nginx


getDataById(id){
	return this.http.get("http://192.168.10.159:8085/customermanagement-0.0.1/api/customer/"+id);
}

}



