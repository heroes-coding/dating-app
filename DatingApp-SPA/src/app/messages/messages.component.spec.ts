import { TestBed, inject } from '@angular/core/testing';

import { MessagesComponent } from './messages.component';

describe('a messages component', () => {
	let component: MessagesComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				MessagesComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([MessagesComponent], (MessagesComponent) => {
		component = MessagesComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});