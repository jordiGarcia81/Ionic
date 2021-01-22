import { Component, OnInit } from '@angular/core';
import { IInmobiliaria, IMotor, Iproducto, ITecnologia, Iventas } from '../home/interfaces';
import { ToastController } from '@ionic/angular';
import { VentasService } from '../services/ventas.service';


@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.page.html',
  styleUrls: ['./ventas.page.scss'],
})
export class VentasPage  {
    oculto: boolean = false;
 
 
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
  
    ventas: (Iventas)[]=[]
     
    constructor(private _toastCtrl : ToastController,private _ventasService:VentasService) {}
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
  
    ngOnInit(){
      //this.productos=this._productoService.getProductos();
      }
    insertar(){
      this.ventas.push({"id":this.ventas.length+1,
      "Nombre": this.nombre,
      "Descripcion": this.descripcion,
      "Precio":this.precio,
      "estado":this.estado,
       
      
    });
    this.presentToast();
  
  console.log("se ha introducido un nuevo producto");
    }
}

