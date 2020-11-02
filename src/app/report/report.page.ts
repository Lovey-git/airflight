import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { AlertController, PickerController, LoadingController, MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {

  constructor(
    private api: ApiService,
    private alertCtrl: AlertController,

  ) { }

  user: any;

  ngOnInit() {
    this.api.get_all_users().subscribe(
      data => {
        if (data.status == 0) {
          console.log(data.data);
          this.user = data.data;
        } else {
          this.presentAlert(data.msg);
        }
      }, error => {
        this.presentAlert(error.message);
      }
    );
  }

  async presentAlert(msg) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Air Food ✈️',
      subHeader: 'Warning',
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
  }

}
