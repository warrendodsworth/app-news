import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  currentArticle: any;

  constructor(private http: HttpClient) { }

  getData(url) {
    return this.http.get(`${environment.newsApiUrl}/${url}&apiKey=${environment.newsApiKey}`).toPromise()
  }
}
