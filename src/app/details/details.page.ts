import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  id : number;

  constructor(private _activatedRoute : ActivatedRoute ) { }

  ngOnInit() {
    this.id= +this._activatedRoute.snapshot.paramMap.get('id');
    console.log("he recibido un "+this.id);
  }

}
