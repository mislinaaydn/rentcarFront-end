import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';
import { Payment } from '../models/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  apiUrl = 'https://localhost:44324/api/';
  
  constructor(private httpClient:HttpClient) { }
  getPayment():Observable<listResponseModel<Payment>>{
    return this.httpClient.get<listResponseModel<Payment>>(this.apiUrl)
  }
}