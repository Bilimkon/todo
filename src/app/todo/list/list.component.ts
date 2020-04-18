import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

interface Todo {
  _id: string;
  title: string;
  done: boolean;
  date: string;
  content: string;
}

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private router: Router, private httpClient: HttpClient) {
  }
  todo: Todo[] = [];

  ngOnInit(): void {
    this.httpClient.get<any>('http://localhost:3000/api/todo/get')
      .subscribe(result => {
        this.todo = result;
      });
  }

  onDelete(id: string) {
    console.log(id);
    this.httpClient.delete('http://localhost:3000/api/todo/delete/' + id)
      .subscribe(result => {
        this.ngOnInit();
      });
  }

  addTodo() {
    this.router.navigate(['add']);
  }
}
