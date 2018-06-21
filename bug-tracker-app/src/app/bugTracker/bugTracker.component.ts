import { Component } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperations.services';

@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
	bugs : Bug[] = [];
	
	newBugName : string = '';

	sortAttr : string = 'name';
	sortDesc : boolean = false;

	/*bugOperations : BugOperationsService = null;

	constructor(_bugOperations : BugOperationsService){
		this.bugOperations = _bugOperations;
	}*/

	constructor(private bugOperations : BugOperationsService){
		this.bugs.push(this.bugOperations.createNew('Server communication failure'));
		this.bugs.push(this.bugOperations.createNew('User actions not recognised'));
		this.bugs.push(this.bugOperations.createNew('Data integrity checks failed'));
		this.bugs.push(this.bugOperations.createNew('Application is not responsive'));
	}

	/*constructor(){
		this.bugs.push(this.bugOperations.createNew('Server communication failure'));
		this.bugs.push(this.bugOperations.createNew('User actions not recognised'));
		this.bugs.push(this.bugOperations.createNew('Data integrity checks failed'));
		this.bugs.push(this.bugOperations.createNew('Application is not responsive'));
	}*/

	onAddNewClick(){
		let newBug = this.bugOperations.createNew(this.newBugName);
		//this.bugs.push(newBug);
		this.bugs = [...this.bugs, newBug];
		this.newBugName = '';
	}

	onBugNameClick(bugToToggle){
		this.bugOperations.toggle(bugToToggle);
	}

	onRemoveClosedClick(){
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}

	//Convert the following into 'closedCount' pipe (input : bugs)
	getClosedCount(){
		return this.bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
	}
}