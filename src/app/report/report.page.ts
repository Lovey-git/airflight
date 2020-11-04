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

  ) { }

  verifiedUsers: any[];
  nonVerifiedUsers: any[];
  searchUsers: any[];
  all_users: any[];
  users: any[];
  searchText: any;

  ngOnInit() {
    
  }

  ionViewWillEnter() {
    if (this.authService.isLoggedin() == false || localStorage.getItem('ur') != 'admin') {
      this.router.navigateByUrl('home');
      
    }else{
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
      this.api.get_all_users().subscribe(
        data => {
          if (data.status == 0) {
            console.log(data.data);
            this.all_users = data.data;
            this.users = data.data;
          } else {
            this.presentAlert(data.msg);
          }
        }, error => {
          this.presentAlert(error.message);
        }
      );
      console.log(this.users);
    }
  }

  async searcher() {
    console.log(this.searchText);
    this.api.get_all_users_by_search(this.searchText).subscribe(
      data => {
        if (data.status == 0) {
          console.log(data.data);
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
    } else if (ev == 'n') {
      this.users = this.nonVerifiedUsers;
    } else if (ev == 'a') {
      this.users = this.all_users;
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
