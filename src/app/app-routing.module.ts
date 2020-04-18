import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {ListComponent} from './todo/list/list.component';
import {SignInComponent} from './todo/sign-in/sign-in.component';
import {AddComponent} from './todo/todo-add/add.component';

const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'list', component: ListComponent },
  { path: 'add', component: AddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
