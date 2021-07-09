import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['../../assets/bootstrap-5.0.2-dist/css/bootstrap.min.css']
})
export class GroceryListComponent implements OnInit {

  task = " ";
  tasks : string[] = [];
  index: number = this.tasks.indexOf(this.task);
  
  onClick(){
    this.tasks.push(this.task);
    this.task = " ";
}

  onDelete(task : string){
    for(var i = 0;i < this.tasks.length; i++){
      if(task == this.tasks[i]){
          this.tasks.splice(i,1);
          break;
      }
  }    
  }

  onEdit(task : string){
    for (var i = 0; i < this.tasks.length; i++){
      if (task == this.tasks[i]){
      this.tasks[i].strike;
      }
    }
  }

  ngOnInit(): void {
    
  }
}
