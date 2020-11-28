import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { ToasterService } from '../../services/toaster.service';
import { AuthService } from '../../services/auth.service';
import { AlertController, PickerController, LoadingController, MenuController, NavController } from '@ionic/angular';
import * as moment from 'moment';
import { PickerOptions } from "@ionic/core";
import { DestinationList } from '../../providers/lists/destination'
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public flightForm: FormGroup;
  public mealsForm: FormGroup;
  public bookingForm: FormGroup;
  public paymentForm: FormGroup;
  public destination_list: any = ["Johannesburg JNB", "Cape Town CPT", "Bloemfontein BFN", "George GEO", "Port Elizabeth PLZ", "Durban DUR", "East London EAS"];

  public meals_prices: any[] = [50.00, 80.0, 60.0, 80.0, 50.0, 55.0, 30.0, 120, 80.0, 100, 70, 60.0, 82.0, 50.0, 20.0, 50.0, 40.0, 30.0, 30.0];
  public meals: any[] = ["Fruit Platter", "Tofu and salad", "Tomato/Butternut soup",  "Beef/Chicken Keebabs in sauce", "Assorted nuts and cheese", "Bacon and egg toast", "Chicken mayo sarmie",
    "Oatmeal + mik", " Beef lasgna + green salad", " Meatballs and pasta", "Pap/Rice, chicken +1 choice salad", "Nuggets", "Half cheesecake",
    "Malva pudding", "Wine by the glass", "440ml fizzy drink", "Hot drinks", "Fruit juice", "Water"];
  
  public selectedMeals: any[][] = new Array();
  public Destinations: any = this.d.destination_list;
  index = 0;
  booking_meals: any;
  isLogged;

  meal_tot = 0;
  flight_price = 0;

  public from;
  public to;
  public return;
  public depart;
  public children = 0;
  public adults = 1;
  public _class;
  public time_slot;
  public username;

  card_number: any;
  card_holder: any;
  card_expMonth: any;
  card_expYear: string;
  card_cvv: any;



  public minDate = moment().add(0, 'd').format().toString();
  public maxDate = moment().add(60, 'd').format().toString();
  public day = this.minDate;
  public current_page = localStorage.getItem('current_page');
  public current_page_type = localStorage.getItem('current_page_type');

  public mask = {
    guide: true,
    showMask: true,
    mask: [/\d/, /\d/, /\d/, /\d/, " ", /\d/, /\d/, /\d/, /\d/, " ", /\d/, /\d/, /\d/, /\d/, " ", /\d/, /\d/, /\d/, /\d/]
  };

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private api: ApiService,
    private toaster: ToasterService,
    private authService: AuthService,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    private pickerController: PickerController,
    private d: DestinationList,
    private app: AppComponent) {
      

    this.flightForm = this.fb.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
      depart: [this.minDate, Validators.required],
      return: ['One Way Trip', Validators.required],
      children: ['0', Validators.required],
      adults: ['1', Validators.required],
      _class: ['Economy Class', Validators.required],
      time_slot: ['', Validators.required]

    });
    this.mealsForm = this.fb.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
      depart: [this.minDate, Validators.required],
      return: ['One Way', Validators.required],
      children: ['0', Validators.required],
      adults: ['1', Validators.required],
    });
    this.bookingForm = this.fb.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
      depart: [this.minDate, Validators.required],
      return: ['One Way', Validators.required],
      children: ['0', Validators.required],
      adults: ['1', Validators.required],
    });
    this.paymentForm = this.fb.group({
      card_number: ['', Validators.required],
      card_holder: ['', Validators.required],
      card_expMonth: ['', Validators.required],
      card_expYear: ['', Validators.required],
      card_cvv: ['', Validators.required],
    });
  }



  ngOnInit() {
    this.isLogged = this.authService.isLoggedin();
    if (!localStorage.getItem('current_page')) {
      this.current_page = 'flight';
      localStorage.setItem('current_page', this.current_page);
    }
    if (!localStorage.getItem('current_page_type')) {
      this.current_page_type = 'flight';
      localStorage.setItem('current_page_type', this.current_page_type);
    }
    if (this.current_page_type == 'booking') {
      var meals = JSON.parse(localStorage.getItem('meals'));
      this.booking_meals = meals;
      this.to = localStorage.getItem('to');
      this.from = localStorage.getItem('from');
      this.depart = localStorage.getItem('depart').substr(0, 10);
      this.return = localStorage.getItem('return');
      this.adults = Number(localStorage.getItem('adults'));
      this.children = Number(localStorage.getItem('children'));
      this._class = localStorage.getItem('_class');
      this.time_slot = localStorage.getItem('time_slot');
      this.meal_tot = 0;
      for (let index = 0; index < meals.length; index++) {
        this.meal_tot += meals[index].meal.value * meals[index].qty.value;
      }
      //["Johannesburg JNB", "Cape Town CPT", "Bloemfontain BFN", "Windhoek WDH", "Port Elizabeth PLZ", "Durban DUR", "Dubai DUB"];

      if (this.to == "Cape Town CPT") {
        this.flight_price = 1418.00;
      }
      if (this.to == "Bloemfontein BFN") {
        this.flight_price = 1968.00;
      }
      if (this.to == "Windhoek WDH") {
        this.flight_price = 1438.00;
      }
      if (this.to == "Port Elizabeth PLZ") {
        this.flight_price = 1849.00;
      }
      if (this.to == "Durban DUR") {
        this.flight_price = 948.00;
      }
      if (this.to == "George GEO") {
        this.flight_price = 1529.00;
      }
      if (this.to == "East London EAS") {
        this.flight_price = 1948.00;
      }
      if (this.to == "Johannesburg JNB") {
        this.flight_price = 1348.00;
      }
      if (this._class == 'Business') {
        this.flight_price = (this.flight_price * this.adults) + this.flight_price * this.children * .8;
        this.flight_price *= this.flight_price;
      } else {
        this.flight_price = (this.flight_price * this.adults) + this.flight_price * this.children * .8;
      }

      
    }
  }

  async proceed() {
    var d1 = new Date(String(this.flightForm.get('depart').value).substr(0,10));
    var d2 = new Date(String(this.flightForm.get('return').value).substr(0,10));
    console.log(d2);


    if (this.current_page_type == 'flight')
      if (this.flightForm.get('from').value == '') {
        this.presentAlert('Destination from : cannot be empty');
      } else if (this.flightForm.get('to').value == '') {
        this.presentAlert('Destination to : cannot be empty');
      } else if (this.flightForm.get('from').value == this.flightForm.get('to').value) {
        this.presentAlert('Destinations cannot be the same');
      } else if (this.flightForm.get('_class').value == '') {
        this.presentAlert('Choose a class');
      } else if (this.flightForm.get('time_slot').value == '') {
        this.presentAlert('Choose a time slot');
      } else if (this.flightForm.get('time_slot').value == '08:00 am' && String(this.flightForm.get('depart').value).substr(0, 10) == this.day.substr(0, 10) && Number(this.day.substr(11, 2)) >= 8) {
        this.presentAlert('flight for 08:00 am is nolonger available, Choose another time slot');
      } else if (this.flightForm.get('time_slot').value == '12:00 am' && String(this.flightForm.get('depart').value).substr(0, 10) == this.day.substr(0, 10) && Number(this.day.substr(11, 2)) >= 12) {
        this.presentAlert('flight for 12H00 am is nolonger available, Choose another time slot');
      }
      else if (this.flightForm.get('time_slot').value == '16:00 pm' && String(this.flightForm.get('depart').value).substr(0, 10) == this.day.substr(0, 10) && Number(this.day.substr(11, 2)) >= 16) {
        this.presentAlert('All flights for today are nolonger available, Choose another Departure Date');
      }
      else if (this.flightForm.get('depart').value && d1 > d2) {
        this.presentAlert('Return date cannot be less than the depart date ');
      }
      else {
        localStorage.setItem('current_page_type', 'meals');
        localStorage.setItem('from', this.flightForm.get('from').value);
        localStorage.setItem('to', this.flightForm.get('to').value);
        localStorage.setItem('depart', this.flightForm.get('depart').value);
        localStorage.setItem('return', this.flightForm.get('return').value);
        localStorage.setItem('_class', this.flightForm.get('_class').value);
        localStorage.setItem('adults', this.flightForm.get('adults').value);
        localStorage.setItem('children', this.flightForm.get('children').value);
        localStorage.setItem('time_slot', this.flightForm.get('time_slot').value);
        window.location.reload();
      }
    if (this.current_page_type == 'meals') {
      localStorage.setItem('current_page_type', 'booking');
      localStorage.setItem('meals', JSON.stringify(this.selectedMeals));
      console.log(localStorage.getItem('meals'));
      window.location.reload();
    }
  }

  async presentAlert(msg) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Air Food ✈️',
      subHeader: 'Caution',
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
  }

  async showPicker() {
    let options: PickerOptions = {
      
      buttons: [
        {
          text: "Cancel",
          role: 'cancel'
        },
        {
          text: 'Ok',
          handler: (value: any) => {
            if (this.selectedMeals) {
              this.selectedMeals[this.index] = value;
              this.selectedMeals[this.index][0] = this.meals_prices[value.id];
              console.log(this.selectedMeals[this.index]);
              this.index++;
            } else {
              console.log(this.index);
              console.log(value.qty.value);
              this.selectedMeals[this.index] = value;
              console.log(this.selectedMeals[this.index]);
              this.index++;
            }
            //this.selectedMeals[this.selectedMeals.length]
          }
        }
      ],
      columns: [
        {
          name: 'meal',
          options: this.getMealsOptions()
        },
        {
          name: 'qty',
          options: this.getQuantityOptions()
        }
      ]
    };
    let picker = await this.pickerController.create(options);
    picker.present()
  }

  getMealsOptions() {
    let options = [];
    for (let x = 0; x < this.meals.length; x++) {
      options.push({ text: this.meals[x], value: this.meals_prices[x] });
    }
    return options;
  }

  getQuantityOptions() {
    let options = [];
    for (let index = 1; index < 10; index++) {
      options.push({ text: index, value: index });
    }
    return options;
  }

  removeItem(i) {
    console.log(i);
    let index: number = this.selectedMeals.indexOf(i, 0);
    this.selectedMeals.splice(index, 1);
    this.selectedMeals[i] = new Array();
    console.log(this.selectedMeals);
  }

  restMeals() {
    window.location.reload();
  }

  cancelOrder() {
    this.current_page_type = 'flight';
    localStorage.removeItem('current_page_type');
    localStorage.removeItem('to');
    localStorage.removeItem('from');
    localStorage.removeItem('depart');
    localStorage.removeItem('return');
    localStorage.removeItem('adults');
    localStorage.removeItem('children');
    localStorage.removeItem('meals');
    localStorage.removeItem('_class');
    localStorage.removeItem('time_slot');
    localStorage.removeItem('amount');
    this.app.openPage('Booking');
    window.location.reload();
  }

  ionViewWillEnter() {
    console.log(this.isLogged);
    this.isLogged = this.authService.isLoggedin();
    console.log(this.isLogged);
  }



  async paymentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Card Details',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Name on card',
          cssClass: 'specialClass',
          attributes: {
            inputmode: 'decimal'
          }
        },
        {
          name: 'cardNumber',
          type: 'number',
          max: 10,
          placeholder: 'Card Number',
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
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {

          }
        }
      ]
    });

    await alert.present();
  }

  async booking() {
    if (this.authService.isLoggedin()) {
      localStorage.setItem('current_page_type', 'payment');
      let amount = this.meal_tot + this.flight_price;
      localStorage.setItem('amount', amount + '');
      this.app.openPage('Payment');
      window.location.reload();
    } else {
      this.loginAlert();
    }
  }

  async loginAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Login!',
      message: '<strong>To proceed login to your account</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'login',
          handler: () => {
            this.router.navigateByUrl('login');
          }
        }
      ]
    });
    await alert.present();
  }

  async doBook() {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });

    await loading.present();
    console.log('do book');

    this.api.add_ticket(
      localStorage.getItem('from'),
      localStorage.getItem('to'),
      localStorage.getItem('depart'),
      localStorage.getItem('return'),
      localStorage.getItem('adults'),
      localStorage.getItem('children'),
      0,
      0,
      localStorage.getItem('meals'),
      localStorage.getItem('_class'),
      localStorage.getItem('amount'),
      String(localStorage.getItem('time_slot')).substr(0, 5),
      localStorage.getItem('username')
    ).subscribe(
      data => {
        if (data.status == 0) {
          loading.dismiss();
          this.toaster.successToast(data.msg);
          localStorage.setItem('t_id', data.t_id);

          this.doPay();
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

  pay() {
    console.log(String(this.card_cvv).length);
    this.card_number = this.paymentForm.get('card_number').value;
    this.card_holder = this.paymentForm.get('card_holder').value;
    this.card_expMonth = this.paymentForm.get('card_expMonth').value;
    this.card_expYear = this.paymentForm.get('card_expYear').value;
    this.card_cvv = this.paymentForm.get('card_cvv').value;
    console.log(String(this.card_number).length);
    if (
      this.card_number == '' ||
      this.card_holder == '' ||
      this.card_expMonth == '' ||
      this.card_expYear == '' ||
      this.card_cvv == ''
    ) {
      this.presentAlert('Fill in all required fields!');
    } else if (String(this.card_number).length < 16 || String(this.card_number).length > 16) {
      this.presentAlert('card number should be 16 digits long!');
    } else if (this.api.validateName(this.card_holder)) {
      this.presentAlert('Invalid card holders name!');
    } else if (String(this.card_cvv).length > 4 || String(this.card_cvv).length < 3) {
      this.presentAlert('CVV number should be atleast 3 digits long in length and not greater than 4!');
    } else if (String(this.card_expYear).substr(0,4) == '2020' && Number(String(this.card_expMonth).substr(5,2)) < Number(this.minDate.substr(5,2))) {
      this.presentAlert('card already expired!')
    } else {
      this.doBook();
    }
  }


  downloadMyFile() {
    const link = document.createElement('a');
    link.setAttribute('target', '_self');
    link.setAttribute('href', 'https://kohaku-b.herokuapp.com/download/' + localStorage.getItem('uuid') + localStorage.getItem('t_id') + '.pdf');
    link.setAttribute('download', `Ticket.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }


  async doPay() {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });

    await loading.present();
    console.log('do pay');
    this.api.add_user_payment(
      localStorage.getItem('t_id'),
      localStorage.getItem('amount'),
      this.card_number,
      this.card_cvv,
      this.card_expYear + '-' + this.card_expMonth
    ).subscribe(
      data => {
        if (data.status == 0) {
          loading.dismiss();
          this.toaster.successToast(data.msg);
          localStorage.setItem('current_page_type', 'payment');

          localStorage.removeItem('current_page_type');
          localStorage.removeItem('current_page_type');
          localStorage.removeItem('to');
          localStorage.removeItem('from');
          localStorage.removeItem('depart');
          localStorage.removeItem('return');
          localStorage.removeItem('adults');
          localStorage.removeItem('children');
          localStorage.removeItem('meals');
          localStorage.removeItem('_class');
          localStorage.removeItem('time_slot');
          localStorage.removeItem('amount');

          this.downloadMyFile();
          this.router.navigateByUrl('tickets');
          this.app.openPage('Tickets');
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


