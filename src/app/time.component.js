"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TimeComponent = (function () {
    function TimeComponent() {
        this.name = 'Angular';
    }
    return TimeComponent;
}());
TimeComponent = __decorate([
    core_1.Component({
        selector: 'time',
        template: "\n        <div id=\"cont_time\">\n            <h1>Hello times {{name}}</h1>\n        </div>\n    ",
        styleUrls: ['src/app/layout.css']
    })
], TimeComponent);
exports.TimeComponent = TimeComponent;
//# sourceMappingURL=time.component.js.map