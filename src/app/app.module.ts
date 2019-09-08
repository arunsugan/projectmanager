import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { TaskViewComponent } from './task-view/task-view.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectViewComponent } from './project-view/project-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskCreateComponent,
    UserCreateComponent,
    UserViewComponent,
    UserDetailComponent,
    TaskViewComponent,
    TaskDetailComponent,
    ProjectCreateComponent,
    ProjectDetailComponent,
    ProjectViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
