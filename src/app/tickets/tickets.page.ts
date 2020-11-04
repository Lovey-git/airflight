import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { AlertController, PickerController, LoadingController, MenuController, NavController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.page.html',
  styleUrls: ['./tickets.page.scss'],
})
export class TicketsPage implements OnInit {

  constructor(
    private api: ApiService,
    private authService: AuthService,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    private router: Router,
  ) { }

  verifiedUsers: any[];
  nonVerifiedUsers: any[];
  searchUsers: any[];
  users: any[];

  ngOnInit() {
    this.api.get_all_verrified_users().subscribe(
      data => {
        if (data.status == 0) {
          console.log(data.data);
          this.verifiedUsers = data.data;
        } else {
          this.presentAlert(data.msg);
        }
      }, error => {
        this.presentAlert(error.message);
      }
    );

    this.api.get_all_nonverrified_users().subscribe(
      data => {
        if (data.status == 0) {
          console.log(data.data);
          this.nonVerifiedUsers = data.data;
        } else {
          this.presentAlert(data.msg);
        }
      }, error => {
        this.presentAlert(error.message);
      }
    );

    this.api.get_all_users_by_search('').subscribe(
      data => {
        if (data.status == 0) {
          console.log(data.data);
          this.searchUsers = data.data;
        } else {
          this.presentAlert(data.msg);
        }
      }, error => {
        this.presentAlert(error.message);
      }
    );



  }

  ionViewWillEnter() {
    if (this.authService.isLoggedin() == false) {
      this.router.navigateByUrl('home');
    }
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
