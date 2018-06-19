import { Component } from '@angular/core';

@Component({
	selector : 'app-calculator-1',
	templateUrl : 'calculatorOne.component.html'
})
export class CalculatorOneComponent{
	n1 = 0;
	n2 = 0;
	result = 0 ;
	
	onAddClick(){
		this.result = this.n1 + this.n2;
	}
	onSubtractClick(){
		this.result = this.n1 - this.n2;
	}
	onMultiplyClick(){
		this.result = this.n1 * this.n2;
	}
	onDivideClick(){
		this.result = this.n1 / this.n2;
	}
}