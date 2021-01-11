import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { ToastController } from '@ionic/angular';
import { ProductoService } from '../services/producto.service';
import { IInmobiliaria, IMotor, Iproducto, ITecnologia } from '../home/interfaces';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
 
  oculto: boolean = false;
  categoria1 : string = "Motor";
  categoria2 : string = "Inmobiliaria";
  categoria3 : string = "Tecnologia";
  ruta : string = "https://plazbuy.com/dist/img_app/productos-plazbuy.png";
  width=400;
 
  info : string = "Guardar";
  producto : string;
  nombre: string;
  descripcion: string;
  precio : number;
  tipo:string;
  km:number;
  fecha:Date;
  m2:number;
  banyos:number;
  habitaciones:number;
  localidad:string;
  estado:string;
  productos: (Iproducto | IMotor| IInmobiliaria| ITecnologia)[]=[
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

  
  Nombre : String;

  constructor(private _activatedRoute : ActivatedRoute,private _productoService:ProductoService ) { }

  ngOnInit() {
    this.Nombre= this._activatedRoute.snapshot.paramMap.get('Nombre');
    console.log("he recibido un "+this.Nombre);
    
    /*let res=this._productoService.getProducto(this.Nombre);
    console.log("el nombre es "+res.Nombre);*/
  }

}
