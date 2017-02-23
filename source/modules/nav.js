import $ from 'jquery';

const nav = {
	init() {
		this.injectSocialIcons();
		this.events();
	},
	injectSocialIcons() {
		const icons = $('.socialaccountlinks-v2-block');

		$('.main-nav .right.nav .content').append(icons);
	},
	events() {
		$('.menu-toggle').on("click", (e) => {
			e.preventDefault();

			$('.sub-hover-nav').toggleClass("active");
		});

		//scroll down to trigger scrolling nav
		$(window).bind('scroll load', () => {
			const top = $('body').scrollTop();

			const target = $('#scroll-nav');

			if (top <= 600) {
				$(target).removeClass('scrolling-active');
			} else {
				$(target).addClass('scrolling-active');
			}
		});
	}
};

export default nav;