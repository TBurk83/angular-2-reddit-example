"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require("angular2/angular2");
var RedditArticle = (function () {
    function RedditArticle() {
    }
    RedditArticle.prototype.voteUp = function () {
        this.article.voteUp();
        return false;
    };
    RedditArticle.prototype.voteDown = function () {
        this.article.voteDown();
        return false;
    };
    RedditArticle = __decorate([
        angular2_1.Component({
            selector: 'reddit-article',
            inputs: ['article']
        }),
        angular2_1.View({
            template: "\n        <article>\n            <div class=\"votes\">{{ article.votes }}</div>\n            <div class=\"main\">\n                <h2>\n                    <a href=\"{{ article.link }}\">{{ article.title }}</a>\n                    <span>({{ article.domain() }})</span>\n                </h2>\n                <ul>\n                    <li><a href (click)=\"voteUp()\">upvote</a></li>\n                    <li><a href (click)=\"voteDown()\">downvote</a></li>\n                </ul>\n            </div>\n        </article>\n      "
        }), 
        __metadata('design:paramtypes', [])
    ], RedditArticle);
    return RedditArticle;
}());
exports.RedditArticle = RedditArticle;
