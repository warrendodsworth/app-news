import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NewsService } from '../news.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {
  article: any;

  constructor(public router: Router, public _news: NewsService) { }

  ngOnInit() {
    this.article = this._news.currentArticle;
    if (!this.article)
      this.router.navigate(['/home'])
  }

}
