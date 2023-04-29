import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RentoService } from 'src/app/service/rento.service';
import { from } from 'rxjs';
import { Rento } from 'src/app/model/rento';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{

  constructor(
    private rentoService : RentoService,
  ){}

  ngOnInit(): void {

    this.form = new FormGroup({
      id : new FormControl(),
      user : new FormControl(),
      passaword : new FormControl(),

    });
  }

  form : FormGroup = new FormGroup({});
  rento : Rento = new Rento();
  id : number = 0;
  user : string = " ";
  passaword : number = 0;

  errorMessage : string = " ";

  onSubmit() {
    this.rentoService.login(this.user, this.passaword)
      .subscribe((user: any) => {
        if (user.length === 1) {
          console.log('Logged in successfully');
          // TODO: Redirect to home page
        } else {
          this.errorMessage = 'ERRO 505';

        }
  });
  }
  register(){}



}
