import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NewsService } from '../news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  articles: any;

  constructor(public router: Router, public _news: NewsService) { }

  async ngOnInit() {
    let data: any = await this._news.getData('everything?q=bitcoin&from=2019-02-03&sortBy=publishedAt')
    this.articles = data.articles;
  }

  goArticle(article) {
    this._news.currentArticle = article;
    this.router.navigate(['/article'])
  }
}
