/**
 *
 * @public
 * @namespace App
 * @description constructs and initializes all core modules
 *
 */

import { Router, Template, Events } from "./source/core/index.js";
import { nav } from "./source/modules/index.js";
import * as collections from "./source/collections/index.js";

class App_Build {
    constructor() {
    	this.collections();
        this.core();
        this.router();
        this.modules();
    }
    collections() {
        this.collections = collections;

        collections.blog.init();
    }
    core() {
        this.events = Events;
        this.template = Template;
    }
    router() {
        Router.checkRoute();
    }
    modules() {
        nav.init();
    }
};

const App = new App_Build();


