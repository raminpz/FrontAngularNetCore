import { Component } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  register: FormGroup;

  constructor(private fb: FormBuilder){
    this.register = this.fb.group({
      usuario: ['', Validators.required],
      password:['', Validators.required]
    })

  }

}
