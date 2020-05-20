import { MobileService } from './../services/mobile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fruits: any = [];
  constructor(private mobileservice: MobileService) { }
  

  ngOnInit(): void {
  }
  getFruitData(){
    this.fruits = this.mobileservice.getFruitData();
    console.log(this.fruits);
  }


}
