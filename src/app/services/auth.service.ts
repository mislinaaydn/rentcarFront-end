import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/register';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'https://localhost:44324/api/auth/';
  constructor(private httpClient:HttpClient) { }
  
  login(loginModel:LoginComponent){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"login",loginModel)
  }
  register(RegisterModel:RegisterComponent):Observable<SingleResponseModel<RegisterModel>>{
    let newPath=this.apiUrl +"register";
    return this.httpClient.post<SingleResponseModel<RegisterModel>>(newPath,this.register)
    
  }
  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }
}
