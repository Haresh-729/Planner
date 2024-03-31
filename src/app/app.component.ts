import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Planner By Haresh';
  todos:any[]=[];

  addTask(tasktitle:string,desc:string){
    this.todos.push({id:this.todos.length,tasktitle:tasktitle,desc:desc});
    console.log(this.todos);
  }

  removeTask(todo:any){
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    console.log(this.todos);
  }
}