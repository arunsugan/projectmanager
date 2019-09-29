import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskCreateComponent } from './components/task-create/task-create.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserViewComponent } from './components/user-view/user-view.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { TaskViewComponent } from './components/task-view/task-view.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { ProjectCreateComponent } from './components/project-create/project-create.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { ProjectViewComponent } from './components/project-view/project-view.component';
import { HttpClientModule } from '@angular/common/http';

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
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
