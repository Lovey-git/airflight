import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { ToasterService } from '../../services/toaster.service';
import { AuthService } from '../../services/auth.service';
import { AlertController, ToastController, LoadingController, MenuController, NavController, ModalController } from '@ionic/angular';
import * as moment from 'moment';
import { AppComponent } from '../app.component';
import { TermsPage } from '../terms/terms.page';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public registerForm: FormGroup;
  public minDate = moment().add(0, 'd').format().toString();
  public dob: string;
  today:any;
  mDate:any;
  

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
    private modalCtrl: ModalController
  ) {

    this.today =  moment().format("YYYY-MM-DD");
  
    let maxDate=  new Date((new Date().getFullYear() - 18),new Date().getMonth(), new Date().getDate());
           this.mDate=moment(maxDate).format("YYYY-MM-DD");
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

  async openTermsModal() {
    const modal = await this.modalCtrl.create({
      component: TermsPage,
      cssClass: 'my-custom-class'
    });

    return await modal.present();
  }


  ionViewWillEnter() {
    if (this.authService.isLoggedin()) {
      if (localStorage.getItem('ur') == 'admin') {
        this.router.navigateByUrl('report');
      } else {
        if (localStorage.getItem('current_page') == 'flight') {
          this.router.navigateByUrl('home');
        } else {
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

  async register() {
    let email = this.registerForm.get('email').value;
    let password = this.registerForm.get('password').value;
    let password1 = this.registerForm.get('password1').value;
    let names = this.registerForm.get('names').value;
    let surname = this.registerForm.get('surname').value;
    let cell = this.registerForm.get('cell').value;
    this.dob = this.registerForm.get('dob').value;

    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });

    if (email == null || password == '' || password1 == '' || names == '' || surname == '' || cell == '' || this.dob == '') {
      this.presentAlert('All fields are required! ⚠️');
    } else if (password != password1) {
      this.presentAlert('Passwords do not match ❌');
    } else if (isNaN(cell) || cell.length <= 9) {
      this.presentAlert('Phone number should consist of only numbers and atleast 10 digits long ❌');
    } else if (this.api.validateName(names) || this.api.validateName(surname)) {
      this.presentAlert('names and surname should consist of only characters and no special symbols ❌');
    } else if (!this.api.validateEmail(email)) {
      this.presentAlert('Invalid email entered ❌');
    } else if (this.dob.substr(0, 10) == this.minDate.substr(0, 10)) {
      this.presentAlert('You might just be a very smart 👶 infant to even use a computer!');
    } else if (parseInt(this.minDate.substr(0, 4)) - (parseInt(this.dob.substr(0, 4))) <= 17) {
      this.presentAlert('You must be atleast 18 years old to register! 🔞');
      console.log((parseInt(this.dob.substr(0, 4)) - parseInt(this.minDate.substr(0, 4))));
    } else if (!this.api.validateCell(cell)) {
      this.presentAlert('Invalid Phone number ❌');
    } else if (this.api.validatePass(password) < 4) {
      this.presentAlert('Weak Password detected 👎❌');
    } else {
   
      
      await loading.present();
      this.api.register(email, password, names,surname, cell, this.dob).subscribe(
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
          this.presentAlert("Could not connect to server 🖥️, check your internet connection!");
        }
      )
    }
  }


  revert() {
    this.registerForm.reset();
  }

}
