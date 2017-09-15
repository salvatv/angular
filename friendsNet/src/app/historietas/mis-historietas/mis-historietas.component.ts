import { Component, OnInit } from '@angular/core';
import { Historieta } from '../historieta/historieta-model';
import { HistorietasService } from './historietas-service';

@Component({
  selector: 'app-mis-historietas',
  templateUrl: './mis-historietas.component.html',
  styleUrls: ['./mis-historietas.component.css']
})
export class MisHistorietasComponent implements OnInit {

  historietas: Historieta[];

  constructor(private historietaService: HistorietasService) { }

  ngOnInit() {
    this.historietaService.getHistorietas().subscribe(historietas => this.historietas = historietas);
   }

}
