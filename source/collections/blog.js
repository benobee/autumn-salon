import $ from 'jquery';
import Util from '../util/util.js';
import { Router } from '../core/index.js';

const blog = {
	init() {
		const blog = $('#blog');

		if (blog.length !== 0) {
			this.socialSharing();
		}

		//if on the blog list collection url execute script
        Router.route('/aswritings', () => {
			const queryParams = Util.getQueryParameters();

			queryParams.format = "json";

			const initialData = Util.ajax('/aswritings', queryParams);

			this.getData(initialData);
        });
	},
	socialSharing() {
		$(window).bind("scroll top", () => {
			const top = $(window).scrollTop();

			if (top >= 1200) {
				$('.social-share').addClass('scrolling');
			} else {
				$('.social-share').removeClass('scrolling');
			}
		});
	},
	appendPosts() {
		if (!this.data.pagination) {
			return false;
		}

		const url = this.data.pagination.nextPageUrl;

		const categoryFilter = this.data.categoryFilter;

		const queryParams = Util.getQueryParameters();

		queryParams.format = "json";

		if (url !== undefined) {
			const appendedData = Util.ajax(url, queryParams);

			$.when(appendedData).done((response) => {
				$.each(response.items, (i, item) => {

					//main container returning elemnt
					const container = document.createElement('div');

					$(container).addClass('collection-item hentry');

					const content = document.createElement('div');

					$(content).addClass('content');

					const mediaWrapper = '<a href="'+ item.fullUrl +'" class="media-wrapper"><div class="image" style="background-image:url(' + item.assetUrl + ');"></div></a>';
					const meta = '<div class="meta"><div class="title"><a href="'+ item.fullUrl +'">' + item.title + '</a></div><div class="excerpt">' + item.excerpt + '</div></div>';

					$(content).append(mediaWrapper);
					$(content).append(meta);
					
					$(container).append(content);

					$('#blog-list').append(container);

				});

				this.data = response;
				this.activeScroll = true;
			});
		}
	},
	getData(data) {
		$.when(data).done((response) => {
			this.data = response;

			this.inifinteScroll();
		});
	},
	inifinteScroll() {
		const $collectionList = $('.collection-list');

		this.activeScroll = true;

		$(window).bind("load scroll", (e) => {
			const elementBottom = $collectionList.position().top + $collectionList.outerHeight(true);

			const top = $(window).scrollTop() + 900;

			if (elementBottom <= top) {
				if (this.activeScroll) {

					this.activeScroll = false;
					this.appendPosts();
				}
			}
		});
	}
};

export default blog;