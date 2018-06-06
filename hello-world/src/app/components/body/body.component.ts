import { Component } from '@angular/core';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent{
  mostrar=true;
  frase:any = {
    mensaje: 'im Batman',
    autor: 'batman'
  };
  personajes:string[] = ['batman','superman','joker' ];
}
