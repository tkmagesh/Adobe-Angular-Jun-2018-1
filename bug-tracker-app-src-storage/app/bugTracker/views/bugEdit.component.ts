import { Component, Output, EventEmitter} from '@angular/core';
import { BugOperationsService } from '../services/bugOperations.services';
import { Bug } from '../models/Bug';

@Component({
	selector : 'app-bug-edit',
	template : `
		<section class="edit">
			<label for="">Bug Name :</label>
			<input type="text" [(ngModel)]="newBugName">
			<span> [ {{newBugName.length}} ] </span>
			<input type="button" value="Add New" (click)="onAddNewClick()">
		</section>
	`
})
export class BugEditComponent{
	newBugName : string = '';

	@Output()
	newBugCreated : EventEmitter<Bug> = new EventEmitter<Bug>();

	constructor(private bugOperations : BugOperationsService){

	}
	onAddNewClick(){
		let newBug = this.bugOperations.createNew(this.newBugName);
		this.newBugCreated.emit(newBug);
		this.newBugName = '';
	}

}