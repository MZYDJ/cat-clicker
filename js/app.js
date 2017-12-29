let model = {
	moves: [0, 0, 0, 0, 0],
	catName: ['cat1', 'cat2', 'cat3', 'cat4', 'cat5'],
	catImgList: ['img/22252709_010df3379e_z.jpg',
		'img/434164568_fea0ad4013_z.jpg',
		'img/1413379559_412a540d29_z.jpg',
		'img/4154543904_6e2428c421_z.jpg',
		'img/9648464288_2516b35537_z.jpg'
	],
	nameList: [
		['test1', 'cat2'],
		['cat21'],
		['cat31'],
		['cat41'],
		['cat51']
	]
}

class Cat {
	constructor(data) {
		this.clickCount = ko.observable(data.clickCount);
		this.name = ko.observable(data.name);
		this.imgSrc = ko.observable(data.imgSrc);
		this.nameList = ko.observableArray(data.nameList);
		this.grade = ko.dependentObservable(() => {
			switch (true) {
				case this.clickCount() < 10:
					return 'Newborn';
					break;
				case this.clickCount() < 100:
					return 'Infant';
					break;
				case this.clickCount() < 200:
					return 'Teen';
			}
		});
	}
}
let that;
class ViewModel {
	constructor() {
		that = this;
		this.catList = ko.observableArray([]);
		model.catName.forEach((name, inedx) => {
			this.catList.push(new Cat({
				clickCount: model.moves[inedx],
				name: name,
				imgSrc: model.catImgList[inedx],
				nameList: model.nameList[inedx]
			}));
		});

		//$('.catlist').on('click', 'li', this.chooseCat);

		this.currentCat = ko.observable(this.catList()[0]);
	}

	incrementCounter() {
		// console.log(this)
		this.clickCount(this.clickCount() + 1);
	}

	chooseCat(clickedCat) {
		// console.log(this)
		// console.log(that)
		// console.log($.inArray(this.name(), model.catName))
		// that.cat($.inArray(this.name(), model.catName));
		that.currentCat(clickedCat);
	}
}

ko.applyBindings(new ViewModel());