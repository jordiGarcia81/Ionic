import { Injectable } from "@angular/core";

import { Iproducto } from "../home/interfaces";
//import {IMotor} from "../home/interfaces";
import {AngularFireDatabase} from '@angular/fire/database'

@Injectable()
export class ProductoService{
    /*productos : Iproducto[]=[
        {
          "id": 1,
          "Nombre": "iPhone 12 pro",
          "Descripcion" : "Tecnología 5G. Chip A14 Bionic, el más veloz en un smartphone. Pantalla OLED de borde a borde. Ceramic Shield, cuatro veces más resistente a las caídas",
          "Precio": 1100,
          
    
          
        },
        {
          "id": 2,
          "Nombre": "TV LED 65 Samsung" ,
          "Descripcion" : "Smart TV, 4K Real y HDR10+, Compatible Asistentes de Voz, Tap View",
          "Precio": 699,
        }
    
      ];
    */

    getProductos(): firebase.default.database.Reference{
      let ref=this._db.database.ref("productos");
      return ref;

    }

    /*getProducto(Nombre : String): Iproducto{
      return  this.productos.find(x=>x.Nombre==Nombre);
    }*/
constructor (private _db : AngularFireDatabase){

}

setProducto(producto :Iproducto){
let ref=this._db.database.ref("productos");
let res=ref.push(producto);
console.log("He insertado "+res.key);
}
/*setMotor(motor :IMotor){
  let ref=this._db.database.ref("motor");
  let res=ref.push(motor);
  console.log("He insertado "+res.key);
  }*/


    
}