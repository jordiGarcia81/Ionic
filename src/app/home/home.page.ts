import { Component } from '@angular/core';
import { IInmobiliaria, IMotor, Iproducto, ITecnologia } from './interfaces';
import { ToastController } from '@ionic/angular';

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

  constructor(private _toastCtrl : ToastController) {}
  cambiar_oculto():void{
    this.oculto = !this.oculto;
    if(this.oculto==true){
      this.info="Editar";
    }else{
      this.info="Guardar";
    }
  }

  async presentToast() {
    const toast = await this. _toastCtrl.create({
      message: 'El producto se ha insertado correctamente.',
      duration: 1000,
      position:'bottom'
    });
    toast.present();
  }


  insertar(){
    this.productos.push({"id":this.productos.length+1,
    "Nombre": this.nombre,
    "Descripcion": this.descripcion,
    "Precio":this.precio,
    "Tipo":this.tipo,
    "Km":this.km,
    "Fecha":this.fecha,
    "M2":this.m2,
    "Banyos":this.banyos,
    "Habitaciones":this.habitaciones,
    "Localidad":this.localidad,
    "Estado":this.estado
    
  });
  this.presentToast();

console.log("se ha introducido un nuevo producto");
  }
}
