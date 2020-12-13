import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  oculto: boolean = false;
  categoria1 : string = "Motor";
  categoria2 : string = "Inmobiliaria";
  categoria3 : string = "Tecnologia";
  ruta : string = "https://plazbuy.com/dist/img_app/productos-plazbuy.png";
  width=400;
 
  info : string = "Guardar";

  constructor() {}
  cambiar_oculto():void{
    this.oculto = !this.oculto;
    if(this.oculto==true){
      this.info="Editar";
    }else{
      this.info="Guardar";
    }
  }


}
