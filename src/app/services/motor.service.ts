import { Injectable } from "@angular/core";

import { IMotor } from "../home/interfaces";
import {AngularFireDatabase} from '@angular/fire/database'

@Injectable()
export class MotorService{
   
constructor (private _db : AngularFireDatabase){

}
getMotor(): firebase.default.database.Reference{
    let ref=this._db.database.ref("motor");
    return ref;

  }

setMotor(motor :IMotor){
let ref=this._db.database.ref("motor");
let res=ref.push(motor);
console.log("He insertado "+res.key);
}


    
}