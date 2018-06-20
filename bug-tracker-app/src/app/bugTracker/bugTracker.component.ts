import { Component } from '@angular/core';
import { Bug } from './models/Bug';


@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
	bugs : Bug[] = [];

	onAddNewClick(bugName){
		let newBug = {
			name : bugName,
			isClosed : false
		};
		this.bugs.push(newBug);
	}

	onBugNameClick(bugToToggle){
		bugToToggle.isClosed = !bugToToggle.isClosed;
	}

	onRemoveClosedClick(){
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}
}