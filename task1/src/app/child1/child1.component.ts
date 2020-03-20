import { Component, Input, Output} from '@angular/core';
  // import { OnInit, OnChanges} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataFetchServiceService } from './../services/data-fetch-service.service';
import { EventEmitter } from 'events';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss'],
  providers: [DataFetchServiceService]
})
export class Child1Component{
//  export class Child1Component implements OnInit,OnChanges{
  @Input() childExample:string;
  work: any;
  
  // private loadComponent = false;
       
  // loadComponent:boolean;
  //work: any;
  constructor(private api: DataFetchServiceService) {
    // console.log(this.childExample);
    // this.api.getdata(this.childExample)
    // .subscribe(data=>{
    // console.log(data);
    // this.work=data;
    // alert(this.childExample);
    //})
  }

  // ngOnChanges(changes: import("@angular/core").SimpleChanges) {
  //   // console.log(this.childExample);
  //   // this.api.getdata(this.childExample)
  //   // .subscribe(data=>{
  //   // console.log(data);
  //   //  this.work=data;
  //   // // alert(this.childExample);
  //   // })
  // }
  showData(){
    // this.loadComponent = true;
    console.log(this.childExample);
    this.api.getdata(this.childExample)
    .subscribe(data=>{
    //console.log(data);
     this.work=data;
    // alert(this.childExample);
    })
  }

  // ngOnInit(): void {
  //   // console.log(this.childExample);
  //   // this.api.getdata(this.childExample)
  //   // .subscribe(data=>{
  //   // console.log(data);
  //   //  this.work=data;
  //   // // alert(this.childExample);
  //   //  })
  // }

}
