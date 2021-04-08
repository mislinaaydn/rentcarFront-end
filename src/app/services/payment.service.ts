import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';
import { Payment } from '../models/payment';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  apiUrl = 'https://localhost:44324/api';
  
  constructor(private httpClient:HttpClient) { }

  creditPayment(rental:Rental,amount:number):Observable<ResponseModel>
  {
    let newPath=this.apiUrl+"/rentals/paymentadd";

    return this.httpClient.post<ResponseModel>(newPath,{payment:{amount:amount},rental:rental})
  }
  getPayment():Observable<listResponseModel<Payment>>{
    return this.httpClient.get<listResponseModel<Payment>>(this.apiUrl)
  }
  add(rental:Rental):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"/cards/add",rental)
  
  }
}