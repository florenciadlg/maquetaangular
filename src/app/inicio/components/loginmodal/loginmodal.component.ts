import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-loginmodal',
  templateUrl: './loginmodal.component.html',
  styleUrls: ['./loginmodal.component.css']
})

export class LoginmodalComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
  })
}

ngOnInit() {}

get Password() {
return this.form.get ("password");
}

get Mail() {
  return this.form.get ("email");
  }


    onEnviar(event: Event){
      event.preventDefault;
      if (this.form.valid) {
        // llamar al servicio para mandar datos al servidor
      } else {
        this.form.markAllAsTouched();
      }  
}

}
