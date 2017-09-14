import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent{

  @Output() formu = new EventEmitter<FormGroup>();

  form: FormGroup;

  firstname = new FormControl("", Validators.required);

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      "firstname": this.firstname,
      "surname":["", Validators.required]
    });    
  } 

  onSubmit(){
    console.log(this.form);
    this.formu.emit(this.form);
  }

}
