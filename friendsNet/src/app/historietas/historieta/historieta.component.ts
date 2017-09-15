import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-historieta',
  templateUrl: './historieta.component.html',
  styleUrls: ['./historieta.component.css']
})
export class HistorietaComponent {

  @Output() formu = new EventEmitter<FormGroup>();

  form: FormGroup;

  historieta = new FormControl('', Validators.required);

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      'historieta': this.historieta,
    });
  }

  submitHistorieta() {
    this.formu.emit(this.form);
  }

}
