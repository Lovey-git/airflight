import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { ToasterService } from '../../services/toaster.service';
import { AuthService } from '../../services/auth.service';
import { AlertController, ToastController, LoadingController, MenuController, NavController } from '@ionic/angular';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private api: ApiService,
    private toaster: ToasterService,
    private authService: AuthService,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public app: AppComponent,
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {

  }

  ionViewWillEnter() {
    if (this.authService.isLoggedin()) {
      if (localStorage.getItem('ur') == 'admin') {
        this.router.navigateByUrl('report');
        this.app.openPage('Users');
      } else {
        if (localStorage.getItem('current_page_type') == 'flight') {
          this.router.navigateByUrl('home');
          this.app.openPage('Booking');
        } else {
          this.router.navigateByUrl('tickets');
          this.app.openPage('Tickets');
        }
      }
    }
  }


  async login() {
    let email = this.loginForm.get('email').value;
    let password = this.loginForm.get('password').value;
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });

    if (email == '') {
      this.presentAlert('Email is required ⚠️');
    } else if (password == '') {
      this.presentAlert('Password is required ⚠️');
    } else if (!this.api.validateEmail(email)) {
      this.presentAlert('Invalid email entered ❌');
    }
    else {
      await loading.present();
      this.authService.login(
        email,
        password
      ).subscribe(
        data => {
          if (data.status == 0) {
            loading.dismiss();
            localStorage.setItem('uuid', data.data[0].uuid);
            localStorage.setItem('ur', data.data[0].role);
            this.app.isLoggedIn = true;
            // this.app.openPage('Users');
            window.location.reload();
          } else if (data.status == 1) {
            loading.dismiss();
            this.do_activate_user(data.msg);
          } else {
            loading.dismiss();
            this.presentAlert(data.msg);
          }
        }, error => {
          loading.dismiss();
          this.presentAlert("Could not connect to server 🖥️, check your internet connection!");
        }
      )
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

  async resetPass() {
    let email = this.loginForm.get('email').value;
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Reset Password!',
      inputs: [
        {
          name: 'email',
          type: 'text',
          placeholder: 'Enter your Email',
          cssClass: 'specialClass',
          attributes: {
            inputmode: 'decimal',
            value: ''
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Ok',
          handler: async (data) => {
            const loading = await this.loadingCtrl.create({
              cssClass: 'my-custom-class',
              message: 'Please wait...',
            });
            if (data.email.length < 3) {
              this.presentAlert('Email Required');
            } else {
              await loading.present();
              this.api.reset_password(
                email
              ).subscribe(
                data => {
                  if (data.status == 0) {
                    loading.dismiss();
                    this.toaster.successToast(data.msg);
                    this.presentAlert('Password reseted check your emails for further instructions!')
                    console.log(data);
                  } else {
                    loading.dismiss();
                    this.presentAlert(data.msg);
                  }
                }, error => {
                  loading.dismiss();
                  this.presentAlert(error.message);
                }
              )
            }
          }
        }
      ]
    });
    await alert.present();
  }

  async do_activate_user(msg) {
    let email = this.loginForm.get('email').value;
    console.log(email);
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Re-activate',
      message:msg,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Re-activate',
          handler: async (data) => {
            const loading = await this.loadingCtrl.create({
              cssClass: 'my-custom-class',
              message: 'Please wait...',
            });

            await loading.present();
            this.api.activate_user(
              email
            ).subscribe(
              data => {
                if (data.status == 0) {
                  loading.dismiss();
                  this.toaster.successToast(data.msg);
                  this.presentAlert('Re-activation in process, check your emails for further instructions!')
                  console.log(data);
                } else {
                  loading.dismiss();
                  this.presentAlert(data.msg);
                }
              }, error => {
                loading.dismiss();
                this.presentAlert(error.message);
              }
            )

          }
        }
      ]
    });
    await alert.present();
  }





  revert() {
    this.loginForm.reset();
  }

}
