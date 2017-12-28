class ViewModel {
	constructor() {
		this.clickCount = ko.observable(0);
		this.name = ko.observable('Tabby');
		this.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');
		this.imgAttribution = ko.observable('https?fadfdkwef');
		this.grade = ko.dependentObservable(() => {
			switch(true){
				case this.clickCount() < 10:
				return 'Newborn';
				break;
				case this.clickCount() <100:
				return 'Infant';
				break;
				case this.clickCount() <200:
				return 'Teen';
			}
		})
	}

	incrementCounter() {
		this.clickCount(this.clickCount() + 1);
	}
}

ko.applyBindings(new ViewModel());