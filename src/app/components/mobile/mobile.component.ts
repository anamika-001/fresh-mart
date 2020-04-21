import { MobileService } from './../../services/mobile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  fruits: any = [];
  constructor(private mobileservice: MobileService) { }

  ngOnInit(): void {
  }
  getFruitData(){
    this.fruits = this.mobileservice.getFruitData();
    console.log(this.fruits);
  }

}
