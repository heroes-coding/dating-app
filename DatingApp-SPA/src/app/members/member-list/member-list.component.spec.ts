import { TestBed, inject } from '@angular/core/testing';

import { MemberListComponent } from './member-list.component';

describe('a member-list component', () => {
	let component: MemberListComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				MemberListComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([MemberListComponent], (MemberListComponent) => {
		component = MemberListComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});