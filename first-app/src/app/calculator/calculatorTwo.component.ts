import { Component } from '@angular/core';
import { CalculatorModel } from './calculatorModel';

@Component({
	selector : 'app-calculator-2',
	templateUrl : 'calculatorTwo.component.html'
})
export class CalculatorTwoComponent{
	n1 : number = 0;
	n2 : number = 0;
	result : number = 0;
	operator : string = 'add';
	model : CalculatorModel = new CalculatorModel();

	onCalculateClick(){
		this.result = this.model[this.operator](this.n1, this.n2);
	}
}