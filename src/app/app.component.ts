import { Component, ViewChild } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PopoverController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {
  role = '';
  isLoggedIn ;
  email = "email@mail.com";
  title = "Air Food ✈️";
  header = localStorage.getItem('page');


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public auth: AuthService,
    route: ActivatedRoute,
    public popoverController: PopoverController,
    private menu: MenuController,
    public actionSheetController: ActionSheetController,
    private router: Router
  ) {
    this.initializeApp();
    this.role = localStorage.getItem('ur');
    this.isLoggedIn = auth.isLoggedin();
    this.header = localStorage.getItem('page');
  }

  ionViewWillEnter() {
    this.closeMenu();
    this.role = localStorage.getItem('ur');
    this.isLoggedIn = this.auth.isLoggedin();
  }

  ionViewDidEnter(){
    
  }

  async openMenu() {
    await this.menu.open();
  }

  async closeMenu() {
    await this.menu.close();
  }


  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  openPage(title) {
    this.header = title;
    localStorage.setItem('page', title);
  }

  async adminOptions() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Options',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Profile',
        icon: 'person-outline',
        handler: () => {
          this.router.navigateByUrl('profile');
        }
      },
      {
        text: 'Reports',
        icon: 'document-text-outline',
        handler: () => {

          this.router.navigateByUrl('report');
        }
      },
      {
        text: 'Logout',
        icon: 'log-out-outline',
        handler: () => {
          this.auth.logout();
          window.location.reload();
        }
      }
        , {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async userOptions() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Options',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Profile',
        icon: 'person-outline',
        handler: () => {
          this.router.navigateByUrl('profile');
        }
      },
      {
        text: 'Tickets',
        icon: 'document-text-outline',
        handler: () => {
          this.router.navigateByUrl('tickets');
        }
      }, {
        text: 'Flights',
        icon: 'airplane-outline',
        handler: () => {
          this.router.navigateByUrl('home');
        }
      }
        ,
      {
        text: 'Logout',
        icon: 'log-out-outline',
        handler: () => {
          localStorage.clear();
          window.location.reload();
        }
      }
        , {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async guestOptions() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Options',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Login',
          icon: 'log-out-outline',
          handler: () => {
            localStorage.clear();
            this.router.navigateByUrl('login');
          }
        },
        {
          text: 'Register',
          icon: 'log-in-outline',
          handler: () => {
            localStorage.clear();
            this.router.navigateByUrl('register');
          }
        }
        , {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
    });
    await actionSheet.present();
  }

  logout() {
    this.auth.logout();
    window.location.reload();
  }

  ngAfterViewInit() {
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.backgroundColorByHexString('#3880ff'); this.splashScreen.hide();
    });
  }
}
