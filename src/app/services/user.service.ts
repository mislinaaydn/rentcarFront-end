import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ResponseModel } from "../models/responseModel";
import { SingleResponseModel } from "../models/singleResponseModel";
import { User } from "../models/user";

@Injectable({
    providedIn: 'root',
  })
  export class UserService {
    constructor(private httpClient:HttpClient){}
    

      addFindexPoint(userId:number):Observable<ResponseModel>{
        return this.httpClient.post<ResponseModel>(environment.apiUrl+"users/addfindexpoint",userId)
      }

      getUserByEmail(email:string){
        return this.httpClient.get<SingleResponseModel<User>>(environment.apiUrl + "users/getbyemail?email="+email)
      }
  }  