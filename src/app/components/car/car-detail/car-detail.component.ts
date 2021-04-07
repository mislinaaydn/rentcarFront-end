import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { carImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/car.service';
import { CarimageService } from 'src/app/services/carimages.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
 
  car:Car;
  carImages: carImage[] = [];
  apiUrl="https://localhost:44324/"
  currentImage: carImage;

  constructor(
    private carService: CarService,
    private carImageService: CarimageService,
    private activateRoute: ActivatedRoute,
    private toastrServive  :ToastrService,
    private router:Router
  

  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params=>{
    if(params["carId"]){
      this.getCarDetailsByCarId(params["carId"]);
      this.getCarImages(params["carId"]);
    }
  })}

getCarDetailsByCarId(carId: number) {
  this.carService.getCarDetailsByCarId(carId).subscribe((response) => {
    this.car = response.data[0];
   
  });
}
getCarImages(carId:number){
  this.carImageService.getCarImages(carId).subscribe((response)=>{
    this.carImages = response.data;
    
  })
}


getCurrentImageClass(image:carImage ){
  if(image==this.carImages[0]){
    return "carousel-item active"
  } else {
    return "carousel-item"
  }
}
addRental(carImage:carImage){
this.toastrServive.success("Araç kiralanmak için hazır ","BAŞARILI")
}
addRentals(id :number){
  this.router.navigate(["rentals/"]);
 
}
}