import { Component, OnInit } from '@angular/core';
import { Status, Titanic } from '../Data/titanic';
import { TitanicService } from '../titanic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  titanics?: Titanic[];
  selectedTitanic?: Titanic;

  constructor(private sTitanic: TitanicService) {}

  ngOnInit(): void {
    this.titanics = this.sTitanic.survived(Status.Survived);
  }

  onSelect(titanic: Titanic): void {
    this.selectedTitanic = titanic;
  }
}
