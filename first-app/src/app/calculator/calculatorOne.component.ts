import { Component } from '@angular/core';
import { CalculatorModel } from './calculatorModel';

@Component({
	selector : 'app-calculator-1',
	templateUrl : 'calculatorOne.component.html'
})
export class CalculatorOneComponent{
	n1 = 0;
	n2 = 0;
	result = 0 ;

	model : CalculatorModel = new CalculatorModel();

	onAddClick(){
		this.result = this.model.add(this.n1, this.n2);
	}
	onSubtractClick(){
		this.result = this.model.subtract(this.n1, this.n2);
	}
	onMultiplyClick(){
		this.result = this.model.multiply(this.n1, this.n2);
	}
	onDivideClick(){
		this.result = this.model.divide(this.n1, this.n2);
	}
}