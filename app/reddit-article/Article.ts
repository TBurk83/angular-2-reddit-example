/// <reference path="../../typings/angular2/angular2.d.ts" />

// Article Class
export class Article {
    title: string;
    link: string;
    votes: number;

    constructor(title, link) {
        this.title = title;
        this.link = link;
        this.votes = 0;
    }

    domain() {
        var link = this.link.split('//')[1];
        return link.split('/')[0];
    }

    voteUp() {
        this.votes += 1;
    }

    voteDown() {
        this.votes -= 1;
    }
}
