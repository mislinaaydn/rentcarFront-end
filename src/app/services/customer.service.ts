import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { listResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiUrl = 'https://localhost:44324/api/';

  constructor(private httpClient: HttpClient) {}
  getCustomer(): Observable<listResponseModel<Customer>> {
    return this.httpClient.get<listResponseModel<Customer>>(this.apiUrl);
  }
  getCustomerById (customerId : number): Observable<listResponseModel<Customer>> {
    let  newPath = this.apiUrl +'customers/getCustomerById?customerId='+ customerId
    return this.httpClient.get<listResponseModel<Customer>>(this.apiUrl);
  }
}
