import { Component, OnInit } from '@angular/core';
import { Person } from '../../historietas/historieta/person-model';
import { HistorietasService } from '../../historietas/mis-historietas/historietas-service';

@Component({
  selector: 'app-coleguillas',
  templateUrl: './coleguillas.component.html',
  styleUrls: ['./coleguillas.component.css']
})
export class ColeguillasComponent implements OnInit {

  coleguillas: Person[];

  constructor(private historietaService: HistorietasService) { }

  ngOnInit() {
    this.historietaService.getFriends().subscribe(coleguillas => this.coleguillas = coleguillas);
  }

}
