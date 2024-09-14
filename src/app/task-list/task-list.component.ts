import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks = [
    {description: 'Buy milk', completed: 'false'},
    {description: 'Clean my room', completed: 'false'},
    {description: 'Do excercise', completed: 'false'}
  ]
}
