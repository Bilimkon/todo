import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private router: Router) {
  }
  ngOnInit(): void {
  }
  onSubmit() {
    this.router.navigate(['list']);
  }
}
