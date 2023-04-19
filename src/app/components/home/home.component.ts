import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  posts!: Post[];

  ngOnInit(): void {
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').subscribe(posts => {
      this.posts = posts;

    });
  }

}
