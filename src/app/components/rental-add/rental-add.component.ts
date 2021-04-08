import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { carImage } from 'src/app/models/carImage';
import { Rental } from 'src/app/models/rental';
import { CarService } from 'src/app/services/car.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental-add',
  templateUrl: './rental-add.component.html',
  styleUrls: ['./rental-add.component.css'],
})
export class RentalAddComponent implements OnInit {
  rentalAddForm: FormGroup;
  rental: Rental[];
  car: Car;
  carImage: carImage[];

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private router: Router,
    private rentalService:RentalService
  ) {}

  ngOnInit(): void {
    this.createRentalAddForm();
  }

  createRentalAddForm() {
    this.rentalAddForm = this.formBuilder.group({
      carId: ['', Validators.required],
      customerId: ['', Validators.required],
      rentDate: ['', Validators.required],
      returnDate: ['', Validators.required],
    });
  }
  add() {
    if(this.rentalAddForm.valid){
      let rentalModel = Object.assign({},this.rentalAddForm.value)
      this.rentalService.add(rentalModel).subscribe(response =>{
        
        this.toastrService.success(response.message,"Başarılı Eklendi")
        
        this.router.navigate(["payment"]);
       
      },responseError=>{
        if(responseError.error.Errors.length>0){
          for (let i = 0; i <responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage
              ,"Doğrulama hatası"
              );
            }
          }
        }
      );
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }
  }



}