import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Arrendador } from 'src/app/model/arrendador';
import { RegisterServiceArrendador } from 'src/app/service/serviceArrendador';

@Component({
  selector: 'app-register-lessor',
  templateUrl: './register-lessor.component.html',
  styleUrls: ['./register-lessor.component.css']
})
export class RegisterLessorComponent {

  objectArrendador: Arrendador = new Arrendador();

  arrendador: FormGroup = this.builder.group(
    {
      id: '',
      nombre: '',
      apellido: '',
    }
  )

  get id(){return this.arrendador.controls['id'];}
  get nombre(){return this.arrendador.controls['nombre'];}
  get apellido(){return this.arrendador.controls['apellido'];}

  constructor(public builder: FormBuilder, public service:RegisterServiceArrendador){}

  loadData(){
    this.objectArrendador.id = this.arrendador.value.id;
    this.objectArrendador.nombre = this.arrendador.value.nombre;
    this.objectArrendador.apellido = this.arrendador.value.apellido;
    this.service.createArrendador(this.objectArrendador).subscribe(()=>{
        this.arrendador.reset();
        alert('se grabo con exito');
      }
    )
  }

}
