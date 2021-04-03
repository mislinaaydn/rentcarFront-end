import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { carImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/car.service';
import { CarimageService } from 'src/app/services/carimages.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
 
  car:Car;
  carImages: carImage[] = [];
  apiUrl="https://localhost:44324/"
  currentImage: carImage;//BU NEİŞ YAPIYOR başkasının kodunu deniyorduk bizde anlamaık

  constructor(
    private carService: CarService,
    private carImageService: CarimageService,
    private activateRoute: ActivatedRoute
  

  ) {}
//böylemi olması gerekiyord evet ama mesela 1 araca 2 resim eklesemde ayrı gösteriyor onu nasıl yapabiliriz göst
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
    console.log(response.data)
  });
}
getCarImages(carId:number){
  this.carImageService.getCarImages(carId).subscribe((response)=>{
    this.carImages = response.data;
    console.log(response.data)
  })
}


getCurrentImageClass(image:carImage ){
  if(image==this.carImages[0]){
    return "carousel-item active"
  } else {
    return "carousel-item"
  }
}
}