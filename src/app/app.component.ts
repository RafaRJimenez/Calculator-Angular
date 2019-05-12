import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public numberDisplay:any ='0';
  public operation: string = "";
  public firstNumber: string;
  public secondNumber: string;

  setNumberInDisplay(number){
  	this.numberDisplay += number;
  	if (this.numberDisplay.charAt(0) === '0'){
  		this.numberDisplay = this.numberDisplay.substr(1);
  	}
  }

  setOperation(operator){
  	this.operation = operator;
  	this.firstNumber = this.numberDisplay;
  	this.numberDisplay="0";
  }

  sum(){
  	this.numberDisplay = parseInt(this.firstNumber) + parseInt(this.numberDisplay);	
  	
  }

  multiply(){
  	this.numberDisplay = parseInt(this.firstNumber) * parseInt(this.numberDisplay);	
  }

  divide(){
  	this.numberDisplay = parseInt(this.firstNumber) / parseInt(this.numberDisplay);	
  }

  rest(){
  	this.numberDisplay = parseInt(this.firstNumber) - parseInt(this.numberDisplay);	
  }

  setDisplayToCero(){
  	this.numberDisplay = "0";
  }

}
