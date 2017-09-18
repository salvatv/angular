import { Component, OnInit } from '@angular/core';
import { Person } from '../../historietas/historieta/person-model';
import { HistorietasService } from '../../historietas/mis-historietas/historietas-service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  persons: Person[];
  friends: Person[];

  constructor(private personService: HistorietasService ) { }

  ngOnInit() {
    this.personService.getPersons()
      .subscribe(persons => this.persons = persons);
      this.personService.getFriends()
      .subscribe(friends => this.friends = friends);
  }

}
