/**
 *
 * @public
 * @namespace App
 * @description constructs and initializes all core modules
 *
 */

import * as core from "./source/core/index.js";
import $ from "jquery";

class App_Build {
    constructor() {
    	this.core = core;
    	this.sqs = SQS;
    	this.init();

    	console.log(this);
    }
    init() {
        core.controller.init();
    }
};

const App = new App_Build();


