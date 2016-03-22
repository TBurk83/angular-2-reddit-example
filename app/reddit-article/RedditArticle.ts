/// <reference path="../../typings/angular2/angular2.d.ts" />

import {
    Component,
    View,
    NgFor,
} from "angular2/angular2";

import { Article } from "./Article";

// Reddit Article Component
@Component({
    selector: 'reddit-article',
    inputs: ['article']
})

@View({
    template: `
        <article>
            <div class="votes">{{ article.votes }}</div>
            <div class="main">
                <h2>
                    <a href="{{ article.link }}">{{ article.title }}</a>
                    <span>({{ article.domain() }})</span>
                </h2>
                <ul>
                    <li><a href (click)="voteUp()">upvote</a></li>
                    <li><a href (click)="voteDown()">downvote</a></li>
                </ul>
            </div>
        </article>
      `
})

export class RedditArticle {
    article: Article;

    voteUp() {
        this.article.voteUp();
        return false;
    }

    voteDown() {
        this.article.voteDown();
        return false;
    }
}
