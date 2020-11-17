import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { ToasterService } from '../../services/toaster.service';
import { AuthService } from '../../services/auth.service';
import { AlertController, ToastController, LoadingController, MenuController, NavController } from '@ionic/angular';
import { ProvinceList } from '../../providers/lists/province';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public profileForm: FormGroup;
  public Province: any = this.p.Province_list;
  private User: any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private api: ApiService,
    private toaster: ToasterService,
    private authService: AuthService,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    private p: ProvinceList,
  ) {
    this.profileForm = this.fb.group({
      email: ['', Validators.required],
      names: ['', Validators.required],
      surname: ['', Validators.required],
      cell: ['', Validators.required],
      dob: ['', Validators.required],
      province: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }

  ngOnInit() {

  }

  ionViewWillEnter() {
    if (this.authService.isLoggedin() == false) {
      this.router.navigateByUrl('home');
    } else {
      this.doGetUser();
    }
  }

  async deregister() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: '<strong>Delete account?  ⚠️</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.doDeleteUser();
          }
        }
      ]
    });

    await alert.present();
  }

  async deactivate() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: '<strong>Deactivate account?  ⚠️</strong>!!!\nYou can always re-activate your account again at a later stage',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.doDeactivateUser();
          }
        }
      ]
    });

    await alert.present();
  }

  async changePass() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Change Password!',
      inputs: [
        {
          name: 'pass',
          type: 'password',
          placeholder: 'New Password',
          cssClass: 'specialClass',
          attributes: {
            inputmode: 'decimal'
          }
        },
        {
          name: 'pass1',
          type: 'password',
          placeholder: 'Confirm Password',
          cssClass: 'specialClass',
          attributes: {
            inputmode: 'decimal'
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
          handler: (data) => {
            this.doChangePassword(data.pass, data.pass1);
          }
        }
      ]
    });

    await alert.present();
  }

  async doChangePassword(password, password1) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });

    if (password == '' || password1 == '') {
      this.presentAlert('Password fields required ⚠️');
    } else if (password1 != password) {
      this.presentAlert('Passwords do not match! ❌');
    }else if (this.api.validatePass(password)) {
      this.presentAlert('Weak Password detected 👎❌');
    }
    else {
      await loading.present();
      this.api.update_password(password).subscribe(
        data => {
          if (data.status == 0) {
            loading.dismiss();
            this.toaster.successToast(data.msg);
          } else {
            loading.dismiss();
            this.presentAlert(data.msg);
          }
        }, error => {
          loading.dismiss();
          this.presentAlert(error.message);
        }
      );
    }
  }

  async doDeleteUser() {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });

    await loading.present();
    this.api.remove_user(localStorage.getItem('uuid')).subscribe(
      data => {
        if (data.status == 0) {
          loading.dismiss();
          this.toaster.successToast(data.msg);
          this.authService.logout();
        } else {
          loading.dismiss();
          this.presentAlert(data.msg);
        }
      }, error => {
        loading.dismiss();
        this.presentAlert(error.message);
      }
    );
  }

  async doDeactivateUser() {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });

    await loading.present();
    this.api.deactivate_user().subscribe(
      data => {
        if (data.status == 0) {
          loading.dismiss();
          this.toaster.successToast(data.msg);
          this.authService.logout();
        } else {
          loading.dismiss();
          this.presentAlert(data.msg);
        }
      }, error => {
        loading.dismiss();
        this.presentAlert(error.message);
      }
    );
  }

  async doGetUser() {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });

    await loading.present();
    this.authService.get_user().subscribe(
      data => {
        if (data.status == 0) {
          this.profileForm.setValue({
            'email': data.data[0].email,
            'names': data.data[0].name,
            'surname': data.data[0].surname,
            'cell': data.data[0].cell,
            'province': data.data[0].province,
            'gender': data.data[0].gender,
            'dob': data.data[0].date_of_birth,
          });
          this.profileForm.controls['email'].disable();
          loading.dismiss();
        } else {
          loading.dismiss();
          this.presentAlert(data.msg);
        }
      }, error => {
        loading.dismiss();
        this.presentAlert(error.message);
      }
    );
  }

  async doUpdatetUser() {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });

    let names = this.profileForm.get('names').value;
    let surname = this.profileForm.get('surname').value;
    let cell = this.profileForm.get('cell').value;
    let gender = this.profileForm.get('gender').value;
    let province = this.profileForm.get('province').value;
    let email = this.profileForm.get('email').value;

    if (email == null || gender == '' || province == '' || names == '' || surname == '' || cell == '') {
      this.presentAlert('All fields are required! ⚠️');
    } else if (isNaN(cell) || cell.length <= 9) {
      this.presentAlert('Phone number should consist of only numbers and atleast 10 digits long ❌');
    } else if (this.api.validateName(names) || this.api.validateName(surname)) {
      this.presentAlert('names and surname should consist of only characters and no special symbols ❌');
    } else if (!this.api.validateEmail(email)) {
      this.presentAlert('Invalid email entered ❌');
    } else if (!this.api.validateCell(cell)) {
      this.presentAlert('Invalid Phone number ❌');
    } else {
      await loading.present();
      this.api.update_user(names, surname, email, cell, gender, province).subscribe(
        data => {
          if (data.status == 0) {
            loading.dismiss();
            this.toaster.successToast(data.msg);
          } else {
            loading.dismiss();
            this.presentAlert(data.msg);
          }
        }, error => {
          loading.dismiss();
          this.presentAlert("Could not connect to server 🖥️, check your internet connection!");
        }
      );
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

  revert() {
    this.profileForm.reset();
  }

}
