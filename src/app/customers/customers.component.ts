import { Component, OnInit } from '@angular/core';
import { AvailablityService } from '../services/availablity.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(private as : AvailablityService) { }
  avno;
  ngOnInit() {
    this.as.avaliblity.subscribe(user=>{this.avno=user; console.log(this.avno)});
  }

}
