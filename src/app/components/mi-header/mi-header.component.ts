import { Component } from '@angular/core';

@Component({
  selector: 'mi-header',
  templateUrl: './mi-header.component.html',
  styleUrls: ['./mi-header.component.css']
})
export class MiHeaderComponent {

  // propiedades
  texto: string = "Mi nombres es ";
  numero: number = 14;
  arreglo: any = [1,3,"hola","pepe"];
  objeto: any = {"clave": "valor"};
  logico: boolean = true;

  // Evento del componente
  // Se ejecuta automáticamente durante la construcción del componente
  constructor() {
    this.mostrarTextEnAlert("Miguel");
    this.sumarNumeros();
  }

  // metdos
  mostrarTextEnAlert(nombre) {
    alert(this.texto + nombre);
    // Mi nombre es Miguel
  }

  sumarNumeros() {
    let num1: number = parseInt(prompt("Ingresa un numero"));
    let num2: number = parseInt(prompt("Ingresa otro numero"));

    this.logico = (num1 + num2) > 18;

    alert("La suma de los numeros da " + (num1 + num2));

    if (this.logico) {
      alert("Sos un viejo");
    } else {
      alert("Sos un pibe");
    }

  }

}