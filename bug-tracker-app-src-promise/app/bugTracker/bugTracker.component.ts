import { Component, OnInit } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperations.services';
import axios from 'axios';

window['axios'] = axios;

@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
/*export class BugTrackerComponent{
	bugs : Bug[] = [];
	
	sortAttr : string = 'name';
	sortDesc : boolean = false;

	constructor(private bugOperations : BugOperationsService){
		this.bugOperations
			.getAll()
			.then(bugs => this.bugs = bugs);
	}

	onNewBugCreated(newBug){
		this.bugs = [...this.bugs, newBug];
	}
	

	onBugNameClick(bugToToggle){
		this.bugOperations
			.toggle(bugToToggle)
			.then(toggledBug => this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug));
	}

	onRemoveClosedClick(){
		this.bugs
			.filter(bug => bug.isClosed)
			.forEach(closedBug => this.bugOperations.remove(closedBug));

		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}
}*/

export class BugTrackerComponent implements OnInit{
	bugs : Bug[] = [];
	
	sortAttr : string = 'name';
	sortDesc : boolean = false;

	constructor(private bugOperations : BugOperationsService){
		
		
			
	}

	async ngOnInit(){
		this.bugs = await this.bugOperations.getAll();
	}

	onNewBugCreated(newBug){
		this.bugs = [...this.bugs, newBug];
	}
	

	async onBugNameClick(bugToToggle){
		let toggledBug = await this.bugOperations.toggle(bugToToggle);
		this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug);
	}

	async onRemoveClosedClick(){
		this.bugs
			.filter(bug => bug.isClosed)
			.forEach(closedBug => this.bugOperations.remove(closedBug));

		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}
}