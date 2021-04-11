import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { carImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarimageService {

  apiUrl ='https://localhost:44324/api/'
  constructor(private httpClient:HttpClient) { }

  getCar():Observable<ListResponseModel<carImage>>{
    return this.httpClient.get<ListResponseModel<carImage>>(this.apiUrl)
  }

  
  getCarImages(carId:number):Observable<ListResponseModel<carImage>>{
    let newPath = this.apiUrl + "carimages/getimagesbycarid?carId=" + carId
    return this.httpClient.get<ListResponseModel<carImage>>(newPath)
}

}