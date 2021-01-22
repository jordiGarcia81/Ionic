import { Injectable } from "@angular/core";

import { Iventas } from "../home/interfaces";

import {AngularFireDatabase} from '@angular/fire/database'

@Injectable()
export class VentasService{
  

   

    
constructor (private _db : AngularFireDatabase){

}

setVentas(ventas :Iventas){
let ref=this._db.database.ref("ventas");
let res=ref.push(ventas);
console.log("He insertado "+res.key);
}

}
