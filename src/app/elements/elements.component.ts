import { Component, OnInit } from '@angular/core';
import { ElementsService } from '../elements.service';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.css']
})
export class ElementsComponent implements OnInit {

  constructor(private elementsService: ElementsService) { }
  
  // elements: Elements - time permitting, you want to typescript everything
  elements;
  
  // ngOnInit is a lifecycle function
  // It will run when the Component is called (When you load /elements)
  ngOnInit() {
    this.elementsService.getElements().then(response => {
    //  console.log(<any>response.Avengers[20]);
    //  this.elements = <any>response.Avengers;
        
      console.log(<any>response);
      this.elements = <any>response;
    });
  }

}
