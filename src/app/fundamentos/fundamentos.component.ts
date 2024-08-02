import { Component } from '@angular/core';

@Component({
  selector: 'app-fundamentos',
  standalone: true,
  imports: [],
  templateUrl: './fundamentos.component.html',
  styleUrl: './fundamentos.component.css'
})
export class FundamentosComponent {
  titulo = "Bienvenido al curso de Angular!!"
  contandor = 0
  imagen = "https://dummyimage.com/300"


  constructor(){
    setInterval(() => {
      this.contandor++
    }, 2000)
  }

  resetearContador(){
    this.contandor = 0
  }

}
