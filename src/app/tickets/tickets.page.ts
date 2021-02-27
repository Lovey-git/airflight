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

  users: any[];
  searchText: any = '';
  count = 0;

  ngOnInit() {
    
  }

  downloadMyFile(t_id) {
    const link = document.createElement('a');
    link.setAttribute('target', '_self');
    link.setAttribute('href', 'https://kohaku-air.herokuapp.com/download/' + localStorage.getItem('uuid') + t_id + '.pdf');
    link.setAttribute('download', `Ticket.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  share(title, id) {
    console.log(id);
    if (window.navigator && window.navigator.share) {
      window.navigator['share']({
        title: title,
        text: 'description',
        'url': 'https://che.ac.za/new/#/moreitemdetails/?f_id=' + id
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    } else {
      alert('share not supported');
    }
  }

  async init(){

   
    console.log(this.searchText);
    this.api.get_user_tickets(this.searchText).subscribe(
      data => {
        if (data.status == 0) {
          console.log(data);
          this.users = data.data;
          this.count = data.data.length;
      
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
    }else{
      this.init();
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
