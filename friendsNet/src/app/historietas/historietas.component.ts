import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HistorietasService } from './mis-historietas/historietas-service';
import { Historieta } from './historieta/historieta-model';
import { Person } from './historieta/person-model';

@Component({
  selector: 'app-historietas',
  templateUrl: './historietas.component.html',
  styleUrls: ['./historietas.component.css']
})
export class HistorietasComponent implements OnInit {

  historieta: Historieta = new Historieta();
  person: Person;


  constructor(private historietaService: HistorietasService) { }

  ngOnInit() {
    this.historietaService.getPerson().subscribe(person => this.person = person);
  }

  test(event: FormGroup) {
    this.historieta.person = this.person;
    this.historieta.text = event.value.historieta;
    this.historietaService.addHistorieta(this.historieta).subscribe(historieta => this.historieta = historieta);
  }

}
