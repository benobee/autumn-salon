import $ from 'jquery';

const SQS = {
    init() {
        this.loadAllImages();
    	this.events();
    },	
    fit ( image ) {
        $(image).wrap('<div class="content-fit"></div>');
    },
    fill ( image ) {
        $(image).wrap('<div class="content-fill"></div>');
    },
    loadAllImages() {
      const images = document.querySelectorAll('img[data-src]' );

      for (let i = 0; i < images.length; i++) {
        ImageLoader.load(images[ i ], { load: true });
      }
    },
    lifecycle() {
        window.Squarespace.AFTER_BODY_LOADED = false;
        window.Squarespace.afterBodyLoad();
    },
    events() {
        // The event subscription that loads images when the page is ready
        document.addEventListener('DOMContentLoaded', this.loadAllImages());

        // The event subscription that reloads images on resize
        window.addEventListener('resize', this.loadAllImages());
    }
};

export default SQS;