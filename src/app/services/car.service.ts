import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { carImage } from '../models/carImage';



@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44324/api/" 


  constructor(private httpClient:HttpClient ) { }

 getCars():Observable<listResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getcardetails";
   return this.httpClient.get<listResponseModel<Car>>(newPath); 
    }

    getCarsByBrand(brandId:number):Observable<listResponseModel<Car>>{
      let newPath = this.apiUrl + "cars/getbybrand?brandId="+brandId
      return this.httpClient.get<listResponseModel<Car>>(newPath); 
       }
    
       getCarsByColor(colorId:number):Observable<listResponseModel<Car>>{
        let newPath = this.apiUrl + "cars/getbycolor?colorId="+colorId
        return this.httpClient.get<listResponseModel<Car>>(newPath); 
         }

         getCarDetailsByCarId(carId:number):Observable<listResponseModel<Car>>{
          let newPath =this.apiUrl + "cars/getcardetail?carId="+carId;
          return this.httpClient.get<listResponseModel<Car>>(newPath);
}


}