class Fish {
	constructor(id, habitat, months, clock, size, price, catchDesc, desc) {
		this.id = id;
		this.habitat = habitat;
		this.months = months;
		this.clock = clock;
		this.size = size;
		this.price = price;
		this.catchDesc = catchDesc;
		this.desc = desc;
	}

	fish_type = [
		[...new Array(12).keys()].map(i=>i+1)
	]
}
