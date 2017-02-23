/**
 *
 * @public
 * @namespace App
 * @description constructs and initializes all core modules
 *
 */

import * as core from "./source/core/index.js";
import * as api from "./source/api/index.js";

class App_Build {
    constructor() {
    	//expose
    	this.core = core;
    	this.sqs = SQS;
    	this.api = api;

    	//initialize modules
    	this.init();

    	console.log(this);
    }
    init() {
    	//general scripts
        core.nav.init();

        //scripts relating to any collection
        api.blog.init();
    }
};

const App = new App_Build();


