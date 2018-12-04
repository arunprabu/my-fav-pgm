import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {

  birthday = new Date(1988, 3, 15); // April 15, 1988

  lipsum: string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit odio illo maxime harum minima, fuga cupiditate ut corrupti placeat eaque alias, nobis deserunt officiis ipsam facere ad, amet autem totam?";

  constructor() { }

  ngOnInit() {

  }
  
}
