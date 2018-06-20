import { Component } from '@angular/core';
import { Bug } from './models/Bug';

@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
	bugs : Bug[] = [];
	
	newBugName : string = '';

	sortAttr : string = 'name';
	
	constructor(){
		this.bugs.push({name : 'Server communication failure', isClosed : false});
		this.bugs.push({name : 'User actions not recognised', isClosed : false});
		this.bugs.push({name : 'Data integrity checks failed', isClosed : false});
		this.bugs.push({name : 'Application is not responsive', isClosed : false});
	}

	onAddNewClick(){
		let newBug = {
			name : this.newBugName,
			isClosed : false
		};
		this.bugs.push(newBug);
		this.newBugName = '';
	}

	onBugNameClick(bugToToggle){
		bugToToggle.isClosed = !bugToToggle.isClosed;
	}

	onRemoveClosedClick(){
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}

	getClosedCount(){
		return this.bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
	}
}