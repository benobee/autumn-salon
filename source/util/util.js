import $ from 'jquery';

const Util = {
	ajax(collection, options) {

        /* 
         * @desc retrieve data and return
        */
       
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
	},
	getQueryParameters(str) {

        /* 
         * @desc get the query paramers from search and convert to object
        */
       
		return (str || document.location.search).replace(/(^\?)/,'').split("&").map(function(n){
			return n = n.split("="),this[n[0]] = n[1],this
		}.bind({}))[0];
	},
    sort(array, dataAttribute) {

        /* 
         * @desc sort array by name looking through specified 
         * data attributes
        */
        
        array.sort((firstItem, nextItem) => {
			const firstItemName = this.slugify( $(firstItem).data(dataAttribute) );

			const nextItemName = this.slugify( $(nextItem).data(dataAttribute) );

            if (firstItemName < nextItemName ) {
				return -1;
            }

			if ( firstItemName > nextItemName ) {
				return 1;
			} 
            return 0;
        });
        return array;
    },
    slugify(filterName) {

		/*
		 * @desc turn string into slug
		*/
	
		return filterName.toLowerCase().replace(/ /g, "-").replace(/-&-/g, "-");
    }
};

export default Util;