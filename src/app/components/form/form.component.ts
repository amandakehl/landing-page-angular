import { FormService } from './../../services/form.service';
import { FormModel } from './form.model';
import { Component, OnInit, Input } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formulario!: FormGroup;
  info: FormModel = new FormModel();

  @Input() labelSend?: string = 'dsdsd';

  constructor(
    private formBuilder: FormBuilder,
    private http: Http,
    private FormService: FormService
  ) { }

  ngOnInit(): void {
    // this.formulario = new FormGroup({
    //   name: new FormControl(null),
    //   email: new FormControl(null),
    //   subject: new FormControl(null),
    //   message: new FormControl(null)
    // });

    this.formulario = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      subject: [null, Validators.required],
      message: [null, [Validators.required, Validators.maxLength(100)]]
    })
  }

  onSubmit() {
    this.FormService.saveInfos(this.formulario.value).subscribe(info => {
      this.info = new FormModel();
    }, err => {
      console.log('Erro ao salvar', err)
    });
    this.formulario.reset()
  }

  validator() {
    if (!this.formulario.valid) {
      console.log("Formulário inválido");
    } else {
      console.log("Formulário válido", this.formulario.value)
    }
  }
}