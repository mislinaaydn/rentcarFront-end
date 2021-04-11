import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { carImage } from 'src/app/models/carImage';
import { Rental } from 'src/app/models/rental';
import { User } from 'src/app/models/user';
import { CarService } from 'src/app/services/car.service';
import { PaymentService } from 'src/app/services/payment.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  car:Car;
  rental:Rental;
  rental2 : Rental[] = [];
  carImages : carImage[] = [];
  apiUrl="https://localhost:44324/"
  currentImage : carImage;
  rentDate:Date;
  returnDate:Date;
  amountPayment:number=0;
  user:User
 cardAddForm : FormGroup

  constructor(

    private activatedRoute:ActivatedRoute,
    private carService:CarService,
    private router:Router,
    private toastrService:ToastrService,
    private paymentService:PaymentService,
    private formBuilder:FormBuilder,
    private userService:UserService

  ) { }



  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>
      {
        this.createPaymentAddForm();
        
        if(params["rental"])
        {
          this.rental = JSON.parse(params['rental']);
        this.getRental();
   
        this.getCarDetail();
        }
      })

  } 

  getUserByEmail(){
    this.userService.getUserByEmail(localStorage.getItem("email")).subscribe((response)=>{
        this.user = response.data;
    })
  }




  createPaymentAddForm(){
    this.cardAddForm = this.formBuilder.group({
      customerId:["" ,Validators.required],
      cardOwnerName:["" ,Validators.required],
      cardNumber:["" ,Validators.required],
      expirationDate:["" ,Validators.required],
      cardCvv:["" ,Validators.required]
     })
  }

  creditPayment()
  {
    if(this.cardAddForm.valid ){
      let PaymentModel = Object.assign({},this.cardAddForm.value)
      this.paymentService.add(PaymentModel).subscribe(response =>{
        
        this.toastrService.success(response.message," Ödeme başarılı")
        this.router.navigate(["cars"])
        setTimeout(function () {
          location.reload();
        },600);
       
      }
      );
    } 
    else {
      this.toastrService.error(' Eksik Bilgiler var', 'Dikkat');
    }
  }


 

  getRental(){
    console.log(this.rental);
  }

  getCarDetail(){
    this.carService.getCarDetailsByCarId(this.rental.carId).subscribe(reponse=>
      {
        this.car=reponse.data;
        this.paymentCalculator();
      })
    }

    paymentCalculator()
  {
    
    if(this.rental.returnDate!=null)
    {
      var date1=new Date(this.rental.returnDate.toString());
      var date2=new Date(this.rental.rentDate.toString());
      var difference = date1.getTime() - date2.getTime();

      var numberOfDays = Math.ceil(difference / (1000 * 3600 * 24)); 

      this.amountPayment = numberOfDays;
      if(this.amountPayment <= 0){
        this.router.navigate(['/cars']);
        this.toastrService.error("Araç listesine yönlendiriliyorsunuz", "Hatalı işlem");
      }
    }
    
  }

}
