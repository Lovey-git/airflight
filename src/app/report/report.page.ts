import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ToasterService } from '../../services/toaster.service';
import { AuthService } from '../../services/auth.service';
import { AlertController, PickerController, LoadingController, MenuController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {

  constructor(
    private api: ApiService,
    private authService: AuthService,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    private router: Router,
    private toaster: ToasterService

  ) { }

  verifiedUsers: any[];
  nonVerifiedUsers: any[];
  searchUsers: any[];
  all_users: any[];
  users: any[];
  searchText: any = '';
  count = 0;

  ngOnInit() {

  }

  ionViewWillEnter() {
    if (this.authService.isLoggedin() == false || localStorage.getItem('ur') != 'admin') {
      this.router.navigateByUrl('home');

    } else {
      this.init();
      this.api.get_all_users().subscribe(
        data => {
          if (data.status == 0) {
            this.users = data.data;
            this.count = this.users.length;

          } else {
            this.presentAlert(data.msg);
          }
        }, error => {
          this.presentAlert(error.message);
        }
      );
    }
  }

  init() {
    this.api.get_all_verrified_users().subscribe(
      data => {
        if (data.status == 0) {
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
          this.nonVerifiedUsers = data.data;
        } else {
          this.presentAlert(data.msg);
        }
      }, error => {
        this.presentAlert(error.message);
      }
    );
    this.api.get_all_users().subscribe(
      data => {
        if (data.status == 0) {
          this.all_users = data.data;
        } else {
          this.presentAlert(data.msg);
        }
      }, error => {
        this.presentAlert(error.message);
      }
    );
    this.searcher();
  }


  async searcher() {
    console.log(this.searchText);
    this.api.get_all_users_by_search(this.searchText).subscribe(
      data => {
        if (data.status == 0) {
          this.users = data.data;
        } else {
          this.presentAlert(data.msg);
        }
      }, error => {
        this.presentAlert(error.message);
      }
    );
  }

  filterBy(ev) {
    if (ev == 'v') {
      this.users = this.verifiedUsers;
      this.count = this.verifiedUsers.length;
    } else if (ev == 'n') {
      this.users = this.nonVerifiedUsers;
      this.count = this.nonVerifiedUsers.length;

    } else if (ev == 'a') {
      this.users = this.all_users;
      this.count = this.all_users.length;

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

  async userAlert(email: string, uuid: string) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Air Food ✈️',
      subHeader: 'User :' + email,
      message: '',
      buttons: [
        {
          text: 'Register as Normal User',
          role: 'Danger',
          cssClass: 'secondary',
          handler: () => {
            this.register_admin(uuid, 'normal');
          }
        }, {
          text: 'Register as Admin',
          handler: () => {
            this.register_admin(uuid, 'admin');
          }
        },
        {
          text: 'Delete user',
          handler: () => {
            this.delete_user(uuid);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
        }
      ]
    });
    await alert.present();
  }

  register_admin(uuid, ur) {
    this.api.register_as_admin(uuid, ur).subscribe(
      data => {
        if (data.status == 0) {
          this.toaster.successToast(data.msg);
          this.init();
        } else {
          this.presentAlert(data.msg);
        }
      }, error => {
        this.presentAlert(error.message);
      }
    );
  }


  delete_user(uuid) {
    this.api.remove_user(uuid).subscribe(
      data => {
        if (data.status == 0) {
          this.toaster.successToast(data.msg);
          this.init();
          this.count-=1;
        } else {
          this.presentAlert(data.msg);
        }
      }, error => {
        this.presentAlert(error.message);
      }
    );
  }
}



