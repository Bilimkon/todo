import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  todoForm: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder, private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.todoForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  onSubmit() {
    const todo = {
      title: this.todoForm.value.title,
      content: this.todoForm.value.content
    };
    this.httpClient.post('http://localhost:3000/api/todo/post', todo)
      .subscribe(result => {
        this.router.navigate(['list']);
      });
  }
}
