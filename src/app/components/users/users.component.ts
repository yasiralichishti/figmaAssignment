import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    }
  }
}



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {

  constructor(private http: HttpClient) { }

  users!: User[];

  ngOnInit(): void {
    this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe(users => {
      this.users = users;

    });
  }

}
