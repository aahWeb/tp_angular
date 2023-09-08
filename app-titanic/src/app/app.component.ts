import { Component, OnInit } from '@angular/core';
import { Titanic } from './Data/titanic';
import { TitanicService } from './titanic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'app-titanic';


}
