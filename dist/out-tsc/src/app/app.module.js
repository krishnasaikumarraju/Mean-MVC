"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//angular core
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
//material
var animations_1 = require("@angular/platform-browser/animations");
var animations_2 = require("@angular/platform-browser/animations");
var material_1 = require("@angular/material");
// form Module
var forms_1 = require("@angular/forms");
// form Module
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var create_form_component_1 = require("./create-form/create-form.component");
var posts_component_1 = require("./posts/posts.component");
var userlist_component_1 = require("./userlist/userlist.component");
//services
var posts_service_1 = require("./posts.service");
//Routing paths
var ROUTES = [
    {
        path: 'post',
        redirectTo: 'posts',
        pathMatch: 'full'
    },
    {
        path: 'posts',
        component: posts_component_1.PostsComponent
    },
    {
        path: 'form',
        component: create_form_component_1.CreateFormComponent
    },
    {
        path: '',
        component: userlist_component_1.TableFilteringExample
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                create_form_component_1.CreateFormComponent,
                posts_component_1.PostsComponent,
                userlist_component_1.TableFilteringExample
            ],
            imports: [
                platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, router_1.RouterModule.forRoot(ROUTES),
                //material
                animations_1.BrowserAnimationsModule,
                animations_2.NoopAnimationsModule,
                //material used fields 
                material_1.MatInputModule,
                material_1.MatSelectModule,
                material_1.MatDatepickerModule,
                material_1.MatNativeDateModule,
                material_1.MatCheckboxModule,
                material_1.MatButtonModule,
                material_1.MatRadioModule,
                material_1.MatTableModule
            ],
            providers: [posts_service_1.PostsService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map