/// <reference path="../typings/angular2/angular2.d.ts" />

import {
    Component,
    View,
    NgFor,
    bootstrap,
} from "angular2/angular2";

import { Article } from './reddit-article/Article';
import { RedditArticle } from './reddit-article/RedditArticle';

// Reddit App Component
@Component({
    selector: 'reddit'
})

@View({
    directives: [RedditArticle, NgFor],
    template: `
        <section class="new-link">
            <div class="control-group">
                <div><label for="title">Title:</label></div>
                <div><input name="title" #newtitle></div>
            </div>
            <div class="control-group">
                <div><label for="link">Link:</label></div>
                <div><input name="link" #newlink></div>
            </div>

            <button (click)="addArticle(newtitle, newlink)">Submit link</button>
        </section>

        <reddit-article
            *ng-for="#article of articles"
            [article]="article">
        </reddit-article>
    `
})

class RedditApp {
    articles: Array<Article>;

    constructor() {
        this.articles = [
            new Article('Angular 2', 'http://angular.io'),
            new Article('Fullstack', 'http://fullstack.io'),
        ];
    }

    addArticle(title, link) {
        this.articles.push(new Article(title.value, link.value))
        title.value = '';
        link.value = '';
    }
}

bootstrap(RedditApp);
