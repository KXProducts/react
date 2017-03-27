
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.html',
  styles: [`ul li {
    list-style: none;
    color: blue;
    cursor: pointer;
    padding: 0 5px;
    display: inline-block;
  }`]
})
export class AppComponent {
  public center = 'Brampton, Canada';
  public positions = [ ];
}