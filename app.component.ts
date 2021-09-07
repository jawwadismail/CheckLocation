import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  principal: number = 0;
  rate: number = 0;
  years: number = 0;
  title = 'airline';
  lamda = 5;
  selectedValue1 = "";
  selectedValue2 = "";
  flag = false;
  si: number = (this.principal * this.rate * this.years)/100;

  calc1()
  {
    this.flag =this.selectedValue1 === this.selectedValue2 ? false : true;
    console.log(this.flag);
  }

  calculate(){
    this.si = (this.principal * this.rate * this.years)/100;
    console.log(" Calcualted SI : " + this.si);
  }
}
