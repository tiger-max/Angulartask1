import { Component } from '@angular/core';
 import { OnInit } from '@angular/core'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// export class AppComponent{
   export class AppComponent implements OnInit{
  parentExample:string="Data from parent";
  username:string;
  uname:string;
  ngOnInit() {
    }
    
}


