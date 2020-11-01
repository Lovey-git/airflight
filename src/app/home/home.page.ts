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


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private flightForm: FormGroup;
  private mealsForm: FormGroup;
  private bookingForm: FormGroup;
  private meals: any[] = ["fish and chips"];
  private selectedMeals: any[][] = new Array();
  private Destinations :any = this.d.destination_list;
  index = 0;
  booking_meals :any;

  private from;
  private to;
  private return;
  private depart;
  private children;
  private adults;


  public minDate = moment().add(1, 'd').format().toString();
  public maxDate = moment().add(60, 'd').format().toString();
  private current_page = localStorage.getItem('current_page');
  private current_page_type = localStorage.getItem('current_page_type');

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
    private d: DestinationList
  ) {
    this.flightForm = this.fb.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
      depart: [this.minDate, Validators.required],
      return: ['One Way', Validators.required],
      children: ['0', Validators.required],
      adults: ['1', Validators.required],
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
  }

  ngOnInit() {
    if (!localStorage.getItem('current_page')) {
      this.current_page = 'flight';
      localStorage.setItem('current_page', this.current_page);
    }
    if (!localStorage.getItem('current_page_type')) {
      this.current_page_type = 'flight';
      localStorage.setItem('current_page_type', this.current_page_type);
    }
    if(this.current_page_type=='booking'){
      var meals = JSON.parse(localStorage.getItem('meals'));
      console.log(meals[0].meal)
      this.booking_meals = meals;
      this.to     = localStorage.getItem('to');
      this.from   = localStorage.getItem('from');
      this.depart = localStorage.getItem('depart');
      this.return = localStorage.getItem('return');
      this.adults = localStorage.getItem('adults');
      this.children = localStorage.getItem('children');
      console.log(this.booking_meals);
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
      } else {
        localStorage.setItem('current_page_type', 'meals');
        localStorage.setItem('from', this.flightForm.get('from').value);
        localStorage.setItem('to', this.flightForm.get('to').value);
        localStorage.setItem('depart', this.flightForm.get('depart').value);
        localStorage.setItem('return', this.flightForm.get('return').value);
        localStorage.setItem('adults', this.flightForm.get('adults').value);
        localStorage.setItem('children', this.flightForm.get('children').value);
        window.location.reload();
      }
      if(this.current_page_type=='meals'){
        localStorage.setItem('current_page_type', 'booking');
        localStorage.setItem('meals', JSON.stringify(this.selectedMeals ) );
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
    this.meals.forEach(x => {
      options.push({ text: x, value: x });
    });
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

  revert() {

  }

  restMeals() {
    window.location.reload();
  }

  cancelOrder(){
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



}


