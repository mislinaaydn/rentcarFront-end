import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental';
import { HttpClient } from '@angular/common/http';
import { RentalService } from 'src/app/services/rental.service';
import { Customer } from 'src/app/models/customer';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css'],
})
export class RentalComponent implements OnInit {
  rentals: Rental[] = [];

  dataLoaded = false;
  customers: Customer[];
  customerId: number;
  rentDate: Date;
  returnDate: Date;

  minDate: string | any;
  maxDate: string | null;
  maxMinDate: string | null;
  firstDateSelected: boolean = false;

  constructor(private rentalService: RentalService, private router: Router) {}

  ngOnInit(): void {
    this.getRentals();
  }
  getRentals() {
    this.rentalService.getRental().subscribe((response) => {
      this.rentals = response.data;
      this.dataLoaded = true;
    });
  }

  setRentalValue(){

  }
}