import $ from 'jquery';

const Util = {
	ajax(collection, options) {
		return $.ajax({
			url: "https://christos-vayenas-yrso.squarespace.com" + collection,
			dataType: "jsonp",
			data: options,
			success: (result) => {
				return result;
			},
			error: (error) => {
				console.log(error);
			}
		});
	}
}

export default Util;