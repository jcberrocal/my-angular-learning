import { Component, Inject } from '@angular/core';

interface Task {
  description: string;
  completed: boolean;
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})

export class TaskListComponent {

  constructor(){
  this.loadTasks();
  console.log(this.tasks);
  console.log('Entró a cargar tasks');
  }

  tasks: Task[] = [
    {description: 'Buy milk', completed: false},
    {description: 'Clean my room', completed: false},
    {description: 'Do excercise', completed: false}
  ]

  newTask: string = '';
  inEdition: Task | null = null;

  loadTasks(){
    const storedTasks = localStorage.getItem('tasks');
    if(storedTasks){
      this.tasks = JSON.parse(storedTasks);
    }
    console.log(this.tasks);
  }

  saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  addTask(){
    if(this.newTask.trim() !== ''){
      this.tasks.push({description: this.newTask, completed: false});
      this.newTask = '';
    }
    this.saveTasks();
  }

  removeTask(index: number){
    this.tasks.splice(index, 1);
    this.saveTasks();
  }

  editTask(task: Task){
    this.inEdition = task;
  }

  saveChanges(){
    if(this.inEdition){
      const index = this.tasks.indexOf(this.inEdition);
      if(index !== -1){
        this.tasks[index].description = this.inEdition.description;
      }
      this.inEdition = null;
    }
    this.saveTasks();
  }

  cancelEdit(){
    this.inEdition = null;
  }
}
