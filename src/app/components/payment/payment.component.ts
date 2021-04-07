import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  rentals: Rental[]=[] ;
  dataLoaded: boolean;

  constructor(private rentalService: RentalService,
    private router: Router ) { }

  ngOnInit(): void {
  }
  getRentals() {
    this.rentalService.getRental().subscribe((response) => {
      this.rentals = response.data;
      this.dataLoaded = true;
    });
  }

}
