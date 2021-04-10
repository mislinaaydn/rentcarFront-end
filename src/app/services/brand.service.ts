  
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';
import { ResponseModel } from '../models/responseModel';
import { ItemResponseModel } from '../models/ItemResponseModel';
@Injectable({
  providedIn: 'root'
})
export class BrandService {
 
  apiUrl = "https://localhost:44324/api/brands/getall"
  constructor(private httpClient:HttpClient) { }


  getBrands():Observable< listResponseModel<Brand>>{
   return this.httpClient.get<listResponseModel<Brand>>(this.apiUrl);
  }
  add(brand: Brand): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "add", brand);
  }
  
  update(brand: Brand):Observable<listResponseModel<Brand>>{
    let newPath = this.apiUrl + "update";
    return this.httpClient.post<listResponseModel<Brand>>(newPath,brand);
  }

  delete(brand: Brand):Observable<listResponseModel<Brand>>{
    let newPath = this.apiUrl + "delete";
    return this.httpClient.post<listResponseModel<Brand>>(newPath,brand);
  
}
getbyId(brandId:number):Observable<ItemResponseModel<Brand>>{
  let newPath = this.apiUrl + "brandid?id=" + brandId;
  return this.httpClient.get<ItemResponseModel<Brand>>(newPath);
  }
}