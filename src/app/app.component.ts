import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  cards = [{
    url:'../../assets/image/tree.jpeg',
    title:'Neat Tree',
    subTitle:'nature',
    text:'I saw this neat tree today.'
  },
  {
    url:'../../assets/image/mountain.jpeg',
    title:'Snowy Mountain',
    subTitle:'maountianlover',
    text:'Here is a picture of a snowy mountian.'
  },
  {
    url:'../../assets/image/cycling.jpeg',
    title:'Mountain Biking',
    subTitle:'biking12222',
    text:'I did some biking today.'
  },
  {
    url:'../../assets/image/cycling.jpeg',
    title:'Mountain Biking',
    subTitle:'biking12222',
    text:'I did some biking today.'
  }
  ]
}
