import { Component, OnInit } from '@angular/core';
import { Titanic } from './Data/titanic';
import { TitanicService } from './titanic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app-titanic';
  titanics?: Titanic[];
  selectedTitanic?: Titanic;

  constructor(private sTitanic: TitanicService) {}

  ngOnInit(): void {
    this.titanics = this.sTitanic.survived("1");
  }

  onSelect(titanic: Titanic): void {
    this.selectedTitanic = titanic;
  }
}
