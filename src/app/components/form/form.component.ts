import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: Http
  ) { }

  ngOnInit(): void {
    // this.formulario = new FormGroup({
    //   name: new FormControl(null),
    //   email: new FormControl(null),
    //   subject: new FormControl(null),
    //   message: new FormControl(null)
    // });

    this.formulario = this.formBuilder.group({
      name: [null],
      email: [null],
      subject: [null],
      message: [null]
    })
    console.log(this.formulario.value)
  }

  onSubmit() {
    this.http.post('http://localhost:3000/contact-us', JSON.stringify(this.formulario.value))
  }
}