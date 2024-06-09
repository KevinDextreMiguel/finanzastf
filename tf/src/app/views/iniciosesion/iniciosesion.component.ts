import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-iniciosesion',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule,
    MatIconModule, CommonModule, RouterLink, FormsModule,
    ReactiveFormsModule,
    HeaderComponent, FooterComponent
  ],
  templateUrl: './iniciosesion.component.html',
  styleUrl: './iniciosesion.component.css'
})
  
  
  
  
  
export class IniciosesionComponent implements OnInit{

  userName:string="admin"
  password: string = "1234"

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  form: FormGroup = new FormGroup({});

  hide = true;
  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }



  ingresar(): void {
    if (this.form.value.userName == this.userName && this.form.value.password == this.password) {
      this.router.navigate(['home']);
    }
    else {
      this.router.navigate(['registrarcliente']);
    }
  }
}


