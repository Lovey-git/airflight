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
// import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';


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
  public destination_list: any = ["Johannesburg JNB", "Cape Town CPT", "Bloemfontain BFN", "Windhoek WDH", "Port Elizabeth PLZ", "Durban DUR", "Dubai DUB"];

  public meals_prices: any[] = [25.00, 89.9, 164.99, 40.99, 60.00, 250.00, 46.90, 12.99];
  public meals: any[] = ["fish and chips", "chicken", "beef", "fish", "pasta", "halal", "cocktail", 'cola'];
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
  public children;
  public adults;
  public _class;

  card_number: any;
  card_holder: any;
  card_expMonth: any;
  card_expYear: any;
  card_cvv: any;


  public minDate = moment().add(0, 'd').format().toString();
  public maxDate = moment().add(60, 'd').format().toString();
  public current_page = localStorage.getItem('current_page');
  public current_page_type = localStorage.getItem('current_page_type');

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
    //private payPal: PayPal
  ) {
    this.flightForm = this.fb.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
      depart: [this.minDate, Validators.required],
      return: ['One Way', Validators.required],
      children: ['0', Validators.required],
      adults: ['1', Validators.required],
      _class: ['Economy', Validators.required]
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
      this.depart = localStorage.getItem('depart');
      this.return = localStorage.getItem('return');
      this.adults = localStorage.getItem('adults');
      this.children = localStorage.getItem('children');
      this._class = localStorage.getItem('_class');
      this.meal_tot = 0;
      for (let index = 0; index < meals.length; index++) {
        this.meal_tot += meals[index].meal.value * meals[index].qty.value;
      }
      //["Johannesburg JNB", "Cape Town CPT", "Bloemfontain BFN", "Windhoek WDH", "Port Elizabeth PLZ", "Durban DUR", "Dubai DUB"];

      if (this.to == "Cape Town CPT") {
        this.flight_price = 1418;
      }
      if (this.to == "Bloemfontain BFN") {
        this.flight_price = 1968;
      }
      if (this.to == "Windhoek WDH") {
        this.flight_price = 1438;
      }
      if (this.to == "Port Elizabeth PLZ") {
        this.flight_price = 1849;
      }
      if (this.to == "Durban DUR") {
        this.flight_price = 948;
      }
      if (this.to == "Dubai DUB") {
        this.flight_price = 6529;
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
    if (this.current_page_type == 'flight')
      if (this.flightForm.get('from').value == '') {
        this.presentAlert('Destination from : cannot be empty');
      } else if (this.flightForm.get('to').value == '') {
        this.presentAlert('Destination to : cannot be empty');
      } else if (this.flightForm.get('from').value == this.flightForm.get('to').value) {
        this.presentAlert('Destinations cannot be the same');
      } else if (this.flightForm.get('_class').value == '') {
        this.presentAlert('Choose a class');
      } else {
        localStorage.setItem('current_page_type', 'meals');
        localStorage.setItem('from', this.flightForm.get('from').value);
        localStorage.setItem('to', this.flightForm.get('to').value);
        localStorage.setItem('depart', this.flightForm.get('depart').value);
        localStorage.setItem('return', this.flightForm.get('return').value);
        localStorage.setItem('_class', this.flightForm.get('_class').value);
        localStorage.setItem('adults', this.flightForm.get('adults').value);
        localStorage.setItem('children', this.flightForm.get('children').value);
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
      header: 'Caution',
      subHeader: 'Fill requred field',
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
      //this.paymentAlert();
      this.doBook();
    } else {
      this.loginAlert()
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
      this.meal_tot + this.flight_price
    ).subscribe(
      data => {
        if (data.status == 0) {
          loading.dismiss();
          this.toaster.successToast(data.msg);
          localStorage.setItem('t_id', data.t_id);
          let amount = this.meal_tot + this.flight_price;
          localStorage.setItem('amount', amount+'');
          localStorage.setItem('current_page_type', 'payment');
          window.location.reload();
        } else {
          loading.dismiss();
          this.presentAlert(data.msg);

        }
      }, error => {
        loading.dismiss();
        this.presentAlert(error);
      }
    );
  }

  pay() {
    this.card_number = this.paymentForm.get('card_number').value;
    this.card_holder = this.paymentForm.get('card_holder').value;
    this.card_expMonth = this.paymentForm.get('card_expMonth').value;
    this.card_expYear = this.paymentForm.get('card_expYear').value;
    this.card_cvv = this.paymentForm.get('card_cvv').value;
    console.log(this.card_cvv.length);
    if (
      this.card_number == '' ||
      this.card_holder == '' ||
      this.card_expMonth == '' ||
      this.card_expYear == '' ||
      this.card_cvv == ''
    ) {
      this.presentAlert('Fill in all required fields!');
    } else {
      this.doPay();

    }
  }


  async doPay() {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });

    await loading.present();

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
          this.router.navigateByUrl('tickets');
        } else {
          loading.dismiss();
          this.presentAlert(data.msg);

        }
      }, error => {
        loading.dismiss();
        this.presentAlert(error);
      }
    );
  }


  // pay( amount ){
  //   this.payPal.init({
  //     PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
  //     PayPalEnvironmentSandbox: 'YOUR_SANDBOX_CLIENT_ID'
  //   }).then(() => {
  //     // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
  //     this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
  //       // Only needed if you get an "Internal Service Error" after PayPal login!
  //       //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
  //     })).then(() => {
  //       let payment = new PayPalPayment('amount', 'ZAR', 'Air-Food flight', 'sale');
  //       this.payPal.renderSinglePaymentUI(payment).then(() => {
  //         // Successfully paid

  //         // Example sandbox response
  //         //
  //         // {
  //         //   "client": {
  //         //     "environment": "sandbox",
  //         //     "product_name": "PayPal iOS SDK",
  //         //     "paypal_sdk_version": "2.16.0",
  //         //     "platform": "iOS"
  //         //   },
  //         //   "response_type": "payment",
  //         //   "response": {
  //         //     "id": "PAY-1AB23456CD789012EF34GHIJ",
  //         //     "state": "approved",
  //         //     "create_time": "2016-10-03T13:33:33Z",
  //         //     "intent": "sale"
  //         //   }
  //         // }
  //       }, () => {
  //         // Error or render dialog closed without being successful
  //       });
  //     }, () => {
  //       // Error in configuration
  //     });
  //   }, () => {
  //     // Error in initialization, maybe PayPal isn't supported or something else
  //   });
  // }

}


