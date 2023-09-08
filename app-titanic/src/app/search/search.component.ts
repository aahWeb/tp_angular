import { Component} from '@angular/core';
import { TitanicService } from '../titanic.service';
import { Titanic, Status, Search } from '../Data/titanic';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  submitted = false;
  titanics? : Titanic[];
  // model c'est un objet de type Search pour le formulaire Angular
  search = new Search( Status.Undetermined, false );

  constructor(private sTitanic : TitanicService){}

  onSubmit() { 
    const { status } = this.search ;
    this.titanics  = this.sTitanic.survived(status);

    this.search.result = true ;
    console.log(this.titanics);
  }

  newSearch(){
    this.search.result = false;
  }
}
