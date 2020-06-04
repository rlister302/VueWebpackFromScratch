"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __importDefault(require("vue"));
var HelloWorld_1 = require("./HelloWorld");
var h = new HelloWorld_1.HelloWorld();
HelloWorld_1.HelloWorld.DoLog();
new vue_1.default({
    el: '#app',
    components: {
        "hello-world": HelloWorld_1.HelloWorld
    }
});
//# sourceMappingURL=main.js.map