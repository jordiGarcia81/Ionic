import { Injectable } from "@angular/core";

import { Iproducto } from "../home/interfaces";

@Injectable()
export class ProductoService{
    productos : Iproducto[]=[
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
          "Precio": 699
        }
    
      ];
    

    getProductos(): Iproducto[]{
        return this.productos;

    }

    getProducto(id:number): Iproducto{
      return  this.productos.find(x=>x.id==id);
    }

    
}