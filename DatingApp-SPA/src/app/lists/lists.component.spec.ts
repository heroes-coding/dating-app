import { TestBed, inject } from '@angular/core/testing';

import { ListsComponent } from './lists.component';

describe('a lists component', () => {
	let component: ListsComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ListsComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ListsComponent], (ListsComponent) => {
		component = ListsComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});