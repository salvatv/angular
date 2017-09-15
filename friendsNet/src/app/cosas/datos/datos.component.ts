import { Component, OnInit } from '@angular/core';
import { Person } from '../../historietas/historieta/person-model';
import { HistorietasService } from '../../historietas/mis-historietas/historietas-service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  person: Person;

  constructor(private historietaService: HistorietasService) { }

  ngOnInit() {
    this.historietaService.getPerson().subscribe(person => this.person = person);
  }

}
