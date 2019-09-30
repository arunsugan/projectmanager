
import { Component, OnInit } from '@angular/core';
import { project } from '../../project';
import { task } from '../../task';
import { TaskService } from '../../service/task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit {

  Tasks: any;
  SortKey: string;

  constructor(private taskService: TaskService) { 
    this.getTasks();
  }

  ngOnInit() {
  }

  getTasks() {
    this.taskService.getTasks()
      .subscribe(response => {
        this.Tasks = response;
        console.log('Response: ' + response);
      });
  }
}