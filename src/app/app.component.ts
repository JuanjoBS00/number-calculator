import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora básica';
  text1="1";
  text2="2";
  result=0;

  add():void{
    var operator1 = Number(this.text1);
    var operator2 = Number(this.text2);
    this.result=operator1+operator2;
  }
  
  substraction():void{
    var operator1 = Number(this.text1);
    var operator2 = Number(this.text2);
    this.result=operator1-operator2;
  }

  multiply():void{
    var operator1 = Number(this.text1);
    var operator2 = Number(this.text2);
    this.result=operator1*operator2;
  }

  divide():void{
    var operator1 = Number(this.text1);
    var operator2 = Number(this.text2);
    this.result=operator1/operator2;
  }

  potency_squared():void{
    var operator1 = Number(this.text1);
    this.result=operator1*operator1;
  }

  potency():void{
    var operator1 = Number(this.text1);
    var operator2 = Number(this.text2);
    this.result=operator1**operator2;
  }

  sqrt():void{
    var operator1 = Number(this.text1);
    this.result=Math.sqrt(operator1);
  }

  module():void{
    var operator1 = Number(this.text1);
    var operator2 = Number(this.text2);
    this.result=operator1%operator2;
  }

  reset():void{
    this.text1 = "0";
    this.text2 = "0";
    this.result = 0;
  }

}
