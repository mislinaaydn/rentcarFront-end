import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  rentals: Rental[] ;
  dataLoaded: boolean;

  constructor(private rentalService: RentalService,
    private router: Router ,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((param)=>{
      console
    })
  }
  getRentals() {
    this.rentalService.getRental().subscribe((response) => {
      console.log(response)
      this.rentals = response.data;
      this.dataLoaded = true;
    });
  }

}
