import { Pipe, PipeTransform } from '@angular/core';

interface Comparer{
	(p1 : any, p2 : any) : number
}
@Pipe({
	name : 'sort'
})
export class SortPipe{

	private getComparer(attr : string) : Comparer{
		return function(p1 : any, p2 : any) : number {
	        if (p1[attr] < p2[attr]) return -1;
	        if (p1[attr] > p2[attr]) return 1;
	        return 0;
	    }
	}
	
	transform(data : any[], attr : string) : any[]{
		if (!data || !data.length) return data;
		if (!attr) return data.sort();
		let comparer = this.getComparer(attr);
		return data.sort(comparer);

	}
}