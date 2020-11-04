import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { ToasterService } from '../../services/toaster.service';
import { AuthService } from '../../services/auth.service';
import { AlertController, ToastController, LoadingController, MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public registerForm: FormGroup;

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
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      password1: ['', Validators.required],
      names: ['', Validators.required],
      surname: ['', Validators.required],
      cell: ['', Validators.required],
      dob: ['', Validators.required],
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

  async login() {
    let email = this.registerForm.get('email').value;
    let password = this.registerForm.get('password').value;
    let password1 = this.registerForm.get('password1').value;
    let names = this.registerForm.get('names').value;
    let surname = this.registerForm.get('surname').value;
    let cell = this.registerForm.get('cell').value;

    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    var format = /^[!@#$%^&*()_+\=\[\]{};:"\\|,.<>\/?]*$/;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email == null || password == '' || password1 == '' || names == '' || surname == '' || cell == '') {
      this.presentAlert('All fields are required!');
    } else if (password != password1) {
      this.presentAlert('Passwords do not match');
    } else if (isNaN(cell) || cell.length <= 9) {
      this.presentAlert('Phone number should consist of only numbers and atleast 10 digits long');
    } else if (names.match(format) || surname.match(format) || isNaN(names) == false || isNaN(surname) == false) {
      this.presentAlert('names and surname should consist of only characters and no special symbols');
    } else if (!this.validateEmail(email)) {
      this.presentAlert('Invalid email entered');
    }
    else {
      await loading.present();
      this.api.register(email, password, names, surname).subscribe(
        data => {
          if (data.status == 0) {
            loading.dismiss();
            console.log(data);
            this.toaster.successToast(data.msg);
            this.router.navigateByUrl('login');
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

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  revert() {
    this.registerForm.reset();
  }

}
