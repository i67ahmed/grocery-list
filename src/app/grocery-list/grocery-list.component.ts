import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['../../assets/bootstrap-5.0.2-dist/css/bootstrap.min.css']
})
export class GroceryListComponent implements OnInit {

  task = " ";
  tasks : string[] = [];
  
  onClick(){
    this.tasks.push(this.task);
    this.task = " ";
}

  ngOnInit(): void {
  }

}
