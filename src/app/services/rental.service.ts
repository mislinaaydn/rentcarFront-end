import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { carImage } from '../models/carImage';
import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseModel';


@Injectable({
  providedIn: 'root' 
})
export class RentalService {


  apiUrl='https://localhost:44324/api/'

  constructor(private httpClient:HttpClient) { }
  getRental():Observable<ListResponseModel<Rental>>{
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl)
  }
  getRentalByCarId(carId : number):Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl + 'rentals/getrentaldetailbycarId?carId=' + carId;
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }
  addRental(rental:Rental){
    let newPath = this.apiUrl + 'rentals/add'
    this.httpClient.post(newPath,rental).subscribe()
  }
  getCustomer():Observable<ListResponseModel<Customer>>{
    let apiUrl="https://localhost:44324/api/customers/getall"
    return this.httpClient.get<ListResponseModel<Customer>>(apiUrl);
  }

  getCarDetailsByCarId(carId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getcardetail?carId="+carId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  add(rental:Rental):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"rentals/add",rental)
}
}