import { Component } from '@angular/core';

@Component({
	selector : 'app-greeter',
	templateUrl : 'greeter.component.html',
	styleUrls : ['greeter.component.css']
})
export class GreeterComponent{

	greetMessage : string = '[A sample greet message]';

	onGreetClick(userName){
		//let userName = prompt('Enter the user name :');
		this.greetMessage = `Hi ${userName}, Have a nice day!`;
	}

}