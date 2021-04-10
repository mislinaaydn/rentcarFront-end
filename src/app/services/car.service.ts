import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { ResponseModel } from '../models/responseModel';
import { ItemResponseModel } from '../models/ItemResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
 
  apiUrl = 'https://localhost:44324/api/';

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<listResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcardetails';
    return this.httpClient.get<listResponseModel<Car>>(newPath);
  }

  getCarsByBrand(brandId: number): Observable<listResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getbybrand?brandId=' + brandId;
    return this.httpClient.get<listResponseModel<Car>>(newPath);
  }

  getCarsByColor(colorId: number): Observable<listResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getbycolor?colorId=' + colorId;
    return this.httpClient.get<listResponseModel<Car>>(newPath);
  }

  getCarDetailsByCarId(carId: number): Observable<listResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcardetail?carId=' + carId;
    return this.httpClient.get<listResponseModel<Car>>(newPath);
  }

  add(car: Car): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'cars/add', car);
  }
  
  update(car:Car):Observable<listResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/update";
    return this.httpClient.post<listResponseModel<Car>>(newPath,car);
  }

  delete(car:Car):Observable<ItemResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/delete";
    return this.httpClient.post<ItemResponseModel<Car>>(newPath,car);
  
}
}