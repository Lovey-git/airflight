import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { ToasterService } from '../../services/toaster.service';
import { AuthService } from '../../services/auth.service';
import { AlertController, ToastController, LoadingController, MenuController, NavController } from '@ionic/angular';
import { invalid } from '@angular/compiler/src/render3/view/util';

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
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {

  }

  ionViewWillEnter(){
    if(this.authService.isLoggedin()){
      if(localStorage.getItem('ur') == 'admin'){
        this.router.navigateByUrl('report');
      }else{
        if(localStorage.getItem('current_page') == 'flight'){
          this.router.navigateByUrl('home');
        }else {
          this.router.navigateByUrl('home');
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

    if( email == '' ){
      this.presentAlert('Email is required');
    }else if(password == ''){
      this.presentAlert('Password is required');
    }else{
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
            window.location.reload();
          } else {
            loading.dismiss();
            this.presentAlert(data.msg);
          }
        }, error => {
          //console.log(error);
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
            if(data.email.length < 3) {
              this.presentAlert('Email Required');
            }else {
              await loading.present();
              this.api.reset_password(
                email
              ).subscribe(
                data => {
                  if (data.status == 0) {
                    loading.dismiss();
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

  



  revert() {
    this.loginForm.reset();
  }

}
