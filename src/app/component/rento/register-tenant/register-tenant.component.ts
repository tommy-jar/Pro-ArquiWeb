import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Arrendatario } from 'src/app/model/arrendatario';
import { RegisterServiceArrendatario } from 'src/app/service/serviceArrendatario';

@Component({
  selector: 'app-register-tenant',
  templateUrl: './register-tenant.component.html',
  styleUrls: ['./register-tenant.component.css']
})
export class RegisterTenantComponent {

  objectArrendatario: Arrendatario = new Arrendatario();

  arrendatario: FormGroup = this.builder.group(
    {
      id: '',
      nombre: '',
      correo: '',
      apellido: '',
      cuentabancaria: '',
    }
  )

  get id(){return this.arrendatario.controls['id'];}
  get nombre(){return this.arrendatario.controls['nombre'];}
  get correo(){return this.arrendatario.controls['correo'];}
  get cuentabancaria(){return this.arrendatario.controls['cuentabancaria'];}
  get apellido(){return this.arrendatario.controls['apellido'];}


  constructor(public builder: FormBuilder, public service:RegisterServiceArrendatario){}

  loadData(){
    this.objectArrendatario.id = this.arrendatario.value.id;
    this.objectArrendatario.nombre = this.arrendatario.value.nombre;
    this.objectArrendatario.correo = this.arrendatario.value.correo;
    this.objectArrendatario.cuentabancaria = this.arrendatario.value.cuentabancaria;
    this.objectArrendatario.apellido = this.arrendatario.value.apellido;
    this.service.createArrendatario(this.objectArrendatario).subscribe(()=>{
        this.arrendatario.reset();
        alert('se grabo con exito');
      }
    )
  }

}
