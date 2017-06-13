"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.email = '';
        this.password = '';
    }
    AppComponent.prototype.submitForm = function () {
        alert('email : ' + this.email + '\npass : ' + this.password);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        moduleId: module.id,
        template: "\n  <div class=\"container\">\n  <div class=\"row\">\n  <form #myForm=\"ngForm\" (ngSubmit)=\"submitForm()\">\n\n    <div class=\"row\">\n      <div class=\"col-md-4 col-md-offset-4\">\n        <h1>Form Validations</h1>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-4 col-md-offset-4\">\n        <input type=\"text\" name=\"email\" [(ngModel)]=\"email\" class=\"form-control\" placeholder=\"email\"/>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-4 col-md-offset-4\">\n        <input type=\"text\" name=\"password\" [(ngModel)]=\"password\" class=\"form-control\" placeholder=\"password\"/>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-4 col-md-offset-4\">\n        <button class=\"btn btn-primary\" type=\"submit\">Submit</button>\n      </div>\n    </div>\n\n  </form>\n  </div>\n  </div>\n  ",
        styles: ['form{ margin : 100px}', '.row{ margin-bottom : 10px}', 'button{width: 100%}']
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map