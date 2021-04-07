import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { carImage } from '../models/carImage';
import { Customer } from '../models/customer';
import { listResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';


@Injectable({
  providedIn: 'root' 
})
export class RentalService {


  apiUrl='https://localhost:44324/api/'

  constructor(private httpClient:HttpClient) { }
  getRental():Observable<listResponseModel<Rental>>{
    return this.httpClient.get<listResponseModel<Rental>>(this.apiUrl)
  }
  getRentalByCarId(carId : number):Observable<listResponseModel<Rental>>{
    let newPath = this.apiUrl + 'rentals/getrentaldetailbycarId?carId=' + carId;
    return this.httpClient.get<listResponseModel<Rental>>(newPath);
  }
  addRental(rental:Rental){
    let newPath = this.apiUrl + 'rentals/add'
    this.httpClient.post(newPath,rental).subscribe()
  }
  getCustomer():Observable<listResponseModel<Customer>>{
    let apiUrl="https://localhost:44324/api/customers/getall"
    return this.httpClient.get<listResponseModel<Customer>>(apiUrl);
  }

  getCarDetailsByCarId(carId:number):Observable<listResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getcardetail?carId="+carId;
    return this.httpClient.get<listResponseModel<Car>>(newPath);
  }
}
