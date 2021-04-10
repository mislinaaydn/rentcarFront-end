  
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ItemResponseModel } from '../models/ItemResponseModel';
import { listResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl ='https://localhost:44324/api/colors/getall'
  constructor(private httpClient:HttpClient  ) { }

  getColors():Observable<listResponseModel<Color>>{
    return this.httpClient.get<listResponseModel<Color>>(this.apiUrl)
  }
  add(color: Color): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "add", color);
  }
  
  update(color:Color):Observable<listResponseModel<Color>>{
    let newPath = this.apiUrl + "update";
    return this.httpClient.post<listResponseModel<Color>>(newPath,color);
  }

  delete(color:Color):Observable<listResponseModel<Color>>{
    let newPath = this.apiUrl + "delete";
    return this.httpClient.post<listResponseModel<Color>>(newPath,color);
  
}
getbyId(colorId:number):Observable<ItemResponseModel<Color>>{
  let newPath = this.apiUrl + "colorid?id=" + colorId;
  return this.httpClient.get<ItemResponseModel<Color>>(newPath);
}
}
