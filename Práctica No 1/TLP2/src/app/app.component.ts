import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'TLP2';
  
  age!: number;
  showAge!: number;
  boton: boolean = true;
  usuarioSeleccionado: string = "Usuario 1";
  imagen: boolean = true;
  date1 = new Date();

  annoActual = this.date1.getUTCFullYear();
  mesActual = this.date1.getMonth() + 1;
  diaActual = this.date1.getDay() + 1;
  
  mesFinal!: any;
  diaFinal!: any;
  fechaDeHoy = "";

  ngOnInit():void {
    if(this.mesActual < 10)
    {
      this.mesFinal = "0" + this.mesActual; 
    }
    else {
      this.mesFinal = this.mesActual;
    }

    if(this.diaActual < 10)
    {
      this.diaFinal = "0" + this.diaActual; 
    }
    else {
      this.diaFinal = this.diaActual; 
    }
    this.fechaDeHoy = this.annoActual +"-"+ this.mesFinal +"-"+ this.diaFinal;
  }  

  public calculadoraEdad(){
    if(this.age){
      const convertAge = new Date(this.age);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
    }
  }

  public activarBoton() {
    if(this.showAge >= 18){
      this.boton = false;
    }
    else if(this.showAge < 18){
      this.boton = true;
      this.imagen = true;
    }
    return this.boton;
  }

  public selectorUsuario (event: any) {
    this.usuarioSeleccionado = event.target.value;
  }

  public ponerImagen() {
    this.imagen = false;
  }

}
