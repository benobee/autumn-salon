class Collection {
	constructor(name) {
		this.className = '.collection-type-' + name;
		this.list = {
			className: '.view-list' + this.className
		};
		this.item = {
			className: '.view-item' + this.className
		};
		this.elements = document.querySelectorAll('.hentry');
	}
	isActive() {
		/* test if class name is found within body */
		
	}
}

export default Collection;