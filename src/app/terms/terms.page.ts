import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ModalController} from '@ionic/angular'

@Component({
  selector: 'app-terms',
  templateUrl: './terms.page.html',
  styleUrls: ['./terms.page.scss'],
})
export class TermsPage implements OnInit {

  constructor(
    private _location: Location,
    private modal: ModalController
    ) 
  {}

  backClicked() {
    this._location.back();
  }

  dismiss(){
    this.modal.dismiss();
  }
  
  ngOnInit() {
  }

}
