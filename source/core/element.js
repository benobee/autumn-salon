import $ from 'jquery';

const Element = {
	render(div, attributes) {
		const el = document.createElement(div);

		$(el).attr(attributes);

		return el;
	}	
};

export default Element;