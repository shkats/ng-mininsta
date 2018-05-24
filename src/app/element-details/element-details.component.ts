import { Component, OnInit } from '@angular/core';
import { ElementsService } from '../elements.service';

// Use the @angular/router to grab the objects needed to GET the 
// :number from the url
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-element-details',
  templateUrl: './element-details.component.html',
  styleUrls: ['./element-details.component.css']
})
export class ElementDetailsComponent implements OnInit {

  constructor(
    private elementsService: ElementsService,
    private activatedRoute: ActivatedRoute 
  ) { }
  
  public element; 
  public elementTest;
    
  public name;
  public image;
  public lname;
  public age;
  public hero_name;  
 id: number;
  private sub: any;
    
  ngOnInit() {
    
    this.sub = this.activatedRoute.queryParams
    .subscribe(params => {
        this.elementTest = +params['name']||0;
        this.name=params['name'];
        this.image=params['image'];
        this.age=params['age'];
        this.lname=params['lname'];
        this.hero_name=params['hero_name'];
        //console.log(params['name']);
        //console.log(params['image']);
    });    

}
}