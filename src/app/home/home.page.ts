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
  public destination_list: any =
    [
      "OR Tambo", "PE International", "Cape Town International", "King Shaka"
    ];

  public destionation_list_abb: any =
    [
      { name: "OR Tambo", abb: "JNB" },
      { name: "PE International", abb: "PLZ" },
      { name: "Cape Town International", abb: "CPT" },
      { name: "King Shaka", abb: "DUR" },
      // "JNB","PLZ","CPT","DUR"
    ];

  oneWayAvailableFlights: any = []
  oneWayFlights = [
    { flight_no: 'A100', depart: "2021-02-28", from: 'OR Tambo', from_abbr: 'JNB', to: 'PE International', to_abbr: 'PLZ', time_slot: '22:00 pm', time_slot_land: '23:40 pm' },
    { flight_no: 'A101', depart: "2021-03-01", from: 'PE International', from_abbr: 'PLZ', to: 'Cape Town International', to_abbr: 'CPT', time_slot: '16:00 pm', time_slot_land: '17:20 pm' },
    { flight_no: 'A102', depart: "2021-03-01", from: 'King Shaka', from_abbr: 'DUR', to: 'OR Tambo', to_abbr: 'JNB', time_slot: '20:00 pm', time_slot_land: '21:10 pm' },
    { flight_no: 'A103', depart: "2021-03-02", from: 'Cape Town International', from_abbr: 'CPT', to: 'PE International', to_abbr: 'PLZ', time_slot: '06:00 am', time_slot_land: '07:20 am' },
    { flight_no: 'A104', depart: "2021-03-03", from: 'OR Tambo', from_abbr: 'JNB', to: 'Cape Town International', to_abbr: 'CPT', time_slot: '16:00 pm', time_slot_land: '18:10 pm' },
    { flight_no: 'A105', depart: "2021-03-04", from: 'Cape Town International', from_abbr: 'CPT', to: 'King Shaka', to_abbr: 'DUR', time_slot: '20:00 pm', time_slot_land: '22:00 pm' },
    { flight_no: 'A106', depart: "2021-03-04", from: 'King Shaka', from_abbr: 'DUR', to: 'PE International', to_abbr: 'PLZ', time_slot: '06:00 am', time_slot_land: '07:40 am' },
    { flight_no: 'A107', depart: "2021-03-05", from: 'OR Tambo', from_abbr: 'JNB', to: 'King Shaka', to_abbr: 'DUR', time_slot: '16:00 pm', time_slot_land: '17:10 pm' },
    { flight_no: 'A108', depart: "2021-03-06", from: 'OR Tambo', from_abbr: 'JNB', to: 'Cape Town International', to_abbr: 'CPT', time_slot: '20:00 pm', time_slot_land: '22:10 pm' },
    { flight_no: 'A109', depart: "2021-03-07", from: 'OR Tambo', from_abbr: 'JNB', to: 'PE International', to_abbr: 'PLZ', time_slot: '06:00 am', time_slot_land: '07:40 am' },
    { flight_no: 'A110', depart: "2021-03-08", from: 'Cape Town International', from_abbr: 'CPT', to: 'OR Tambo', to_abbr: 'JNB', time_slot: '16:00 pm', time_slot_land: '18:40 pm' },
    { flight_no: 'A111', depart: "2021-03-08", from: 'PE International', from_abbr: 'PLZ', to: 'Cape Town International', to_abbr: 'CPT', time_slot: '20:00 pm', time_slot_land: '21:20 pm' },
    { flight_no: 'A112', depart: "2021-03-09", from: 'King Shaka', from_abbr: 'DUR', to: 'PE International', to_abbr: 'PLZ', time_slot: '06:00 am', time_slot_land: '07:40 am' },
    { flight_no: 'A113', depart: "2021-03-10", from: 'OR Tambo', from_abbr: 'JNB', to: 'Cape Town International', to_abbr: 'CPT', time_slot: '16:00 pm', time_slot_land: '18:10 pm' },
    { flight_no: 'A114', depart: "2021-03-10", from: 'PE International', from_abbr: 'PLZ', to: 'Cape Town International', to_abbr: 'CPT', time_slot: '20:00 pm', time_slot_land: '21:20 pm' },
    { flight_no: 'A115', depart: "2021-03-11", from: 'Cape Town International', from_abbr: 'CPT', to: 'PE International', to_abbr: 'PLZ', time_slot: '06:00 am', time_slot_land: '07:20 am' },
    { flight_no: 'A116', depart: "2021-03-12", from: 'OR Tambo', from_abbr: 'JNB', to: 'Cape Town International', to_abbr: 'CPT', time_slot: '16:00 pm', time_slot_land: '18:10 pm' },
    { flight_no: 'A117', depart: "2021-03-12", from: 'OR Tambo', from_abbr: 'JNB', to: 'Cape Town International', to_abbr: 'CPT', time_slot: '20:00 pm', time_slot_land: '22:10 pm' },
    { flight_no: 'A118', depart: "2021-03-14", from: 'PE International', from_abbr: 'PLZ', to: 'Cape Town International', to_abbr: 'CPT', time_slot: '06:00 am', time_slot_land: '07:20 am' },
    { flight_no: 'A119', depart: "2021-03-15", from: 'OR Tambo', from_abbr: 'JNB', to: 'Cape Town International', to_abbr: 'CPT', time_slot: '16:00 pm', time_slot_land: '18:10 pm' },
    { flight_no: 'A120', depart: "2021-03-15", from: 'OR Tambo', from_abbr: 'JNB', to: 'Cape Town International', to_abbr: 'CPT', time_slot: '20:00 pm', time_slot_land: '22:10 pm' },
     { flight_no: 'A121', depart: "2021-03-16", from: 'OR Tambo', from_abbr: 'JNB', to: 'PE International', to_abbr: 'PLZ', time_slot: '06:00 am', time_slot_land: '07:40 am' },
    { flight_no: 'A122', depart: "2021-03-16", from: 'OR Tambo', from_abbr: 'JNB', to: 'Cape Town International', to_abbr: 'CPT', time_slot: '16:00 pm', time_slot_land: '18:10 pm' },
    { flight_no: 'A123', depart: "2021-03-17", from: 'OR Tambo', from_abbr: 'JNB', to: 'Cape Town International', to_abbr: 'CPT', time_slot: '20:00 pm', time_slot_land: '22:10 pm' },
    { flight_no: 'A124', depart: "2021-03-18", from: 'Cape Town International', from_abbr: 'CPT', to: 'PE International', to_abbr: 'PLZ', time_slot: '06:00 am', time_slot_land: '07:20 am' },
    { flight_no: 'A125', depart: "2021-03-19", from: 'OR Tambo', from_abbr: 'JNB', to: 'Cape Town International', to_abbr: 'CPT', time_slot: '16:00 pm', time_slot_land: '18:10 pm' },
    { flight_no: 'A126', depart: "2021-03-19", from: 'OR Tambo', from_abbr: 'JNB', to: 'Cape Town International', to_abbr: 'CPT', time_slot: '20:00 pm', time_slot_land: '22:10 pm' },
    { flight_no: 'A127', depart: "2021-03-19", from: 'OR Tambo', from_abbr: 'JNB', to: 'PE International', to_abbr: 'PLZ', time_slot: '06:00 am', time_slot_land: '07:40 am' },
    { flight_no: 'A128', depart: "2021-03-20", from: 'OR Tambo', from_abbr: 'JNB', to: 'Cape Town International', to_abbr: 'CPT', time_slot: '16:00 pm', time_slot_land: '18:40 pm' },
    { flight_no: 'A129', depart: "2021-03-20", from: 'OR Tambo', from_abbr: 'JNB', to: 'Cape Town International', to_abbr: 'CPT', time_slot: '20:00 pm', time_slot_land: '22:40 pm' },
    { flight_no: 'A130', depart: "2021-03-20", from: 'OR Tambo', from_abbr: 'JNB', to: 'PE International', to_abbr: 'PLZ', time_slot: '06:00 am', time_slot_land: '07:40 am' },
    { flight_no: 'A131', depart: "2021-03-20", from: 'OR Tambo', from_abbr: 'JNB', to: 'Cape Town International', to_abbr: 'CPT', time_slot: '16:00 pm', time_slot_land: '18:10 pm' },
    { flight_no: 'A132', depart: "2021-03-21", from: 'OR Tambo', from_abbr: 'JNB', to: 'Cape Town International', to_abbr: 'CPT', time_slot: '20:00 pm', time_slot_land: '22:10 pm' },
    { flight_no: 'A133', depart: "2021-03-21", from: 'OR Tambo', from_abbr: 'JNB', to: 'PE International', to_abbr: 'PLZ', time_slot: '06:00 am', time_slot_land: '07:40 am' },
    { flight_no: 'A134', depart: "2021-03-21", from: 'OR Tambo', from_abbr: 'JNB', to: 'Cape Town International', to_abbr: 'CPT', time_slot: '16:00 pm', time_slot_land: '18:10 pm' },
    { flight_no: 'A135', depart: "2021-03-22", from: 'PE International', from_abbr: 'PLZ', to: 'Cape Town International', to_abbr: 'CPT', time_slot: '20:00 pm', time_slot_land: '21:20 pm' },
    { flight_no: 'A136', depart: "2021-03-22", from: 'Cape Town International', from_abbr: 'CPT', to: 'PE International', to_abbr: 'PLZ', time_slot: '06:00 am', time_slot_land: '07:20 am' },
    { flight_no: 'A137', depart: "2021-03-23", from: 'OR Tambo', from_abbr: 'JNB', to: 'Cape Town International', to_abbr: 'CPT', time_slot: '16:00 pm', time_slot_land: '18:10 pm' },
    { flight_no: 'A138', depart: "2021-03-24", from: 'OR Tambo', from_abbr: 'JNB', to: 'Cape Town International', to_abbr: 'CPT', time_slot: '20:00 pm', time_slot_land: '22:10 pm' },
    { flight_no: 'A139', depart: "2021-03-24", from: 'OR Tambo', from_abbr: 'JNB', to: 'PE International', to_abbr: 'PLZ', time_slot: '06:00 am', time_slot_land: '10:00 am' },
    { flight_no: 'A140', depart: "2021-03-24", from: 'King Shaka', from_abbr: 'DUR', to: 'Cape Town International', to_abbr: 'CPT', time_slot: '16:00 pm', time_slot_land: '18:00 pm' },
    { flight_no: 'A141', depart: "2021-03-25", from: 'OR Tambo', from_abbr: 'JNB', to: 'Cape Town International', to_abbr: 'CPT', time_slot: '20:00 pm', time_slot_land: '22:10 pm' },
     { flight_no: 'A142', depart: "2021-03-25", from: 'OR Tambo', from_abbr: 'JNB', to: 'PE International', to_abbr: 'PLZ', time_slot: '06:00 am', time_slot_land: '07:40 am' },
    { flight_no: 'A143', depart: "2021-03-25", from: 'OR Tambo', from_abbr: 'JNB', to: 'Cape Town International', to_abbr: 'CPT', time_slot: '16:00 pm', time_slot_land: '19:10 pm' },
    { flight_no: 'A144', depart: "2021-03-26", from: 'King Shaka', from_abbr: 'DUR', to: 'Cape Town International', to_abbr: 'CPT', time_slot: '20:00 pm', time_slot_land: '22:00 pm' },
    { flight_no: 'A145', depart: "2021-03-26", from: 'OR Tambo', from_abbr: 'JNB', to: 'PE International', to_abbr: 'PLZ', time_slot: '06:00 am', time_slot_land: '07:40 am' },
    { flight_no: 'A146', depart: "2021-03-26", from: 'OR Tambo', from_abbr: 'JNB', to: 'Cape Town International', to_abbr: 'CPT', time_slot: '16:00 pm', time_slot_land: '18:10 pm' },
    { flight_no: 'A147', depart: "2021-03-27", from: 'OR Tambo', from_abbr: 'JNB', to: 'Cape Town International', to_abbr: 'CPT', time_slot: '20:00 pm', time_slot_land: '22:10 pm' },
    { flight_no: 'A148', depart: "2021-03-27", from: 'OR Tambo', from_abbr: 'JNB', to: 'PE International', to_abbr: 'PLZ', time_slot: '06:00 am', time_slot_land: '07:40 am' },
    { flight_no: 'A149', depart: "2021-03-27", from: 'Cape Town International', from_abbr: 'CPT', to: 'OR Tambo', to_abbr: 'JNB', time_slot: '16:00 pm', time_slot_land: '18:10 pm' },
    { flight_no: 'A150', depart: "2021-03-28", from: 'OR Tambo', from_abbr: 'JNB', to: 'Cape Town International', to_abbr: 'CPT', time_slot: '20:00 pm', time_slot_land: '22:10 pm' },
    { flight_no: 'A151', depart: "2021-03-28", from: 'OR Tambo', from_abbr: 'JNB', to: 'PE International', to_abbr: 'PLZ', time_slot: '06:00 am', time_slot_land: '07:40 am' },
    { flight_no: 'A152', depart: "2021-03-28", from: 'OR Tambo', from_abbr: 'JNB', to: 'Cape Town International', to_abbr: 'CPT', time_slot: '16:00 pm', time_slot_land: '18:10 pm' },
    { flight_no: 'A153', depart: "2021-03-29", from: 'Cape Town International', from_abbr: 'CPT', to: 'OR Tambo', to_abbr: 'JNB', time_slot: '20:00 pm', time_slot_land: '22:10 pm' },
    { flight_no: 'A154', depart: "2021-03-29", from: 'OR Tambo', from_abbr: 'JNB', to: 'PE International', to_abbr: 'PLZ', time_slot: '06:00 am', time_slot_land: '07:40 am' },
    { flight_no: 'A155', depart: "2021-03-29", from: 'OR Tambo', from_abbr: 'JNB', to: 'King Shaka', to_abbr: 'DUR', time_slot: '16:00 pm', time_slot_land: '17:10 pm' },
    { flight_no: 'A156', depart: "2021-03-30", from: 'OR Tambo', from_abbr: 'JNB', to: 'Cape Town International', to_abbr: 'CPT', time_slot: '20:00 pm', time_slot_land: '22:10 pm' },
    { flight_no: 'A157', depart: "2021-03-30", from: 'OR Tambo', from_abbr: 'JNB', to: 'PE International', to_abbr: 'PLZ', time_slot: '06:00 am', time_slot_land: '07:40 am' },
    { flight_no: 'A158', depart: "2021-03-30", from: 'PE International', from_abbr: 'PLZ', to: 'Cape Town International', to_abbr: 'CPT', time_slot: '16:00 pm', time_slot_land: '17:20 pm' },
    { flight_no: 'A159', depart: "2021-03-31", from: 'King Shaka', from_abbr: 'DUR', to: 'Cape Town International', to_abbr: 'CPT', time_slot: '20:00 pm', time_slot_land: '22:00 pm' },
    { flight_no: 'A160', depart: "2021-03-31", from: 'OR Tambo', from_abbr: 'JNB', to: 'PE International', to_abbr: 'PLZ', time_slot: '06:00 am', time_slot_land: '07:40 am' },
    { flight_no: 'A161', depart: "2021-03-31", from: 'OR Tambo', from_abbr: 'JNB', to: 'Cape Town International', to_abbr: 'CPT', time_slot: '16:00 pm', time_slot_land: '18:10 pm' },
    { flight_no: 'A162', depart: "2021-03-31", from: 'Cape Town International', from_abbr: 'CPT', to: 'OR Tambo', to_abbr: 'JNB', time_slot: '20:00 pm', time_slot_land: '22:10 pm' },
      { flight_no: 'A163', depart: "2021-04-01", from: 'OR Tambo', from_abbr: 'JNB', to: 'King Shaka', to_abbr: 'DUR', time_slot: '16:00 pm', time_slot_land: '17:10 pm' },
    { flight_no: 'A164', depart: "2021-04-01", from: 'OR Tambo', from_abbr: 'JNB', to: 'Cape Town International', to_abbr: 'CPT', time_slot: '20:00 pm', time_slot_land: '22:10 pm' },
    { flight_no: 'A165', depart: "2021-04-01", from: 'OR Tambo', from_abbr: 'JNB', to: 'PE International', to_abbr: 'PLZ', time_slot: '06:00 am', time_slot_land: '07:40 am' },
    { flight_no: 'A166', depart: "2021-04-02", from: 'PE International', from_abbr: 'PLZ', to: 'Cape Town International', to_abbr: 'CPT', time_slot: '16:00 pm', time_slot_land: '17:20 pm' },
    { flight_no: 'A167', depart: "2021-04-10", from: 'King Shaka', from_abbr: 'DUR', to: 'Cape Town International', to_abbr: 'CPT', time_slot: '20:00 pm', time_slot_land: '22:00 pm' },
    { flight_no: 'A168', depart: "2021-04-15", from: 'OR Tambo', from_abbr: 'JNB', to: 'PE International', to_abbr: 'PLZ', time_slot: '06:00 am', time_slot_land: '07:40 am' },
    { flight_no: 'A169', depart: "2021-04-25", from: 'OR Tambo', from_abbr: 'JNB', to: 'Cape Town International', to_abbr: 'CPT', time_slot: '16:00 pm', time_slot_land: '18:10 pm' },
    { flight_no: 'A170', depart: "2021-04-30", from: 'Cape Town International', from_abbr: 'CPT', to: 'OR Tambo', to_abbr: 'JNB', time_slot: '20:00 pm', time_slot_land: '22:10 pm' },
  
  ]
  returnAvailableFlights: any = []
  returnFilghts = [
    { flight_no: 'A200', depart: "2021-03-01", return: '2021-03-01', from: 'OR Tambo', from_abbr: 'JNB', to: 'PE International', to_abbr: 'PLZ', time_slot: '12:00 pm', time_slot_land: '13:40 pm', return_time_slot: "14:00 pm", return_time_slot_land: "15:40 pm" },
    { flight_no: 'A201', depart: "2021-03-01", return: '2021-03-01', from: 'OR Tambo', from_abbr: 'JNB', to: 'PE International', to_abbr: 'PLZ', time_slot: '14:00 pm', time_slot_land: '15:40 pm', return_time_slot: "22:00 pm", return_time_slot_land: "23:40 pm" },
    { flight_no: 'A202', depart: "2021-03-01", return: '2021-03-02', from: 'Cape Town International', from_abbr: 'CPT', to: 'OR Tambo', to_abbr: 'JNB', time_slot: '16:00 pm', time_slot_land: '18:10 pm', return_time_slot: "20:00 pm", return_time_slot_land: "22:10 pm" },
     { flight_no: 'A203', depart: "2021-03-01", return: '2021-03-02', from: 'King Shaka', from_abbr: 'DUR', to: 'PE International', to_abbr: 'PLZ', time_slot: '22:00 pm', time_slot_land: '23:10 pm', return_time_slot: "14:00 pm", return_time_slot_land: "15:10 pm" },
    { flight_no: 'A204', depart: "2021-03-01", return: '2021-03-02', from: 'OR Tambo', from_abbr: 'JNB', to: 'Cape Town International', to_abbr: 'CPT', time_slot: '14:00 pm', time_slot_land: '16:10 pm', return_time_slot: "14:00 pm", return_time_slot_land: "16:10 pm" },
    { flight_no: 'A205', depart: "2021-03-01", return: '2021-03-02', from: 'PE International', from_abbr: 'PLZ', to: 'OR Tambo', to_abbr: 'JNB', time_slot: '16:00 pm', time_slot_land: '18:00 pm', return_time_slot: "20:40 pm", return_time_slot_land: "22:20 pm" },
    { flight_no: 'A206', depart: "2021-03-02", return: '2021-03-03', from: 'King Shaka', from_abbr: 'DUR', to: 'PE International', to_abbr: 'PLZ', time_slot: '22:00 pm', time_slot_land: '23:20 am', return_time_slot: "14:00 pm", return_time_slot_land: "16:20 pm" },
    { flight_no: 'A207', depart: "2021-03-02", return: '2021-03-04', from: 'OR Tambo', from_abbr: 'JNB', to: 'King Shaka', to_abbr: 'DUR', time_slot: '14:00 pm', time_slot_land: '15:10 pm', return_time_slot: "14:00 pm", return_time_slot_land: "15:10 pm" },
    { flight_no: 'A208', depart: "2021-03-02", return: '2021-03-05', from: 'PE International', from_abbr: 'PLZ', to: 'OR Tambo', to_abbr: 'JNB', time_slot: '16:00 pm', time_slot_land: '18:00 pm', return_time_slot: "20:40 pm", return_time_slot_land: "22:20 pm" },
     { flight_no: 'A209', depart: "2021-03-02", return: '2021-03-05', from: 'OR Tambo', from_abbr: 'JNB', to: 'Cape Town International', to_abbr: 'CPT', time_slot: '22:00 pm', time_slot_land: '00:10 am', return_time_slot: "14:50 pm", return_time_slot_land: "16:00" },
    { flight_no: 'A210', depart: "2021-03-02", return: '2021-03-06', from: 'OR Tambo', from_abbr: 'JNB', to: 'PE International', to_abbr: 'PLZ', time_slot: '14:00 pm', time_slot_land: '15:40 pm', return_time_slot: "14:00 pm", return_time_slot_land: "15:40 pm" },
    { flight_no: 'A211', depart: "2021-03-02", return: '2021-03-06', from: 'PE International', from_abbr: 'PLZ', to: 'OR Tambo', to_abbr: 'JNB', time_slot: '16:00 pm', time_slot_land: '17:40 pm', return_time_slot: "20:00 pm", return_time_slot_land: "21:40 pm" },
     { flight_no: 'A212', depart: "2021-03-03", return: '2021-03-03', from: 'OR Tambo', from_abbr: 'JNB', to: 'PE International', to_abbr: 'PLZ', time_slot: '12:00 pm', time_slot_land: '13:40 pm', return_time_slot: "14:00 pm", return_time_slot_land: "15:40 pm" },
    { flight_no: 'A213', depart: "2021-03-05", return: '2021-03-05', from: 'OR Tambo', from_abbr: 'JNB', to: 'PE International', to_abbr: 'PLZ', time_slot: '14:00 pm', time_slot_land: '15:40 pm', return_time_slot: "22:00 pm", return_time_slot_land: "23:40 pm" },
    { flight_no: 'A214', depart: "2021-03-11", return: '2021-03-12', from: 'Cape Town International', from_abbr: 'CPT', to: 'OR Tambo', to_abbr: 'JNB', time_slot: '16:00 pm', time_slot_land: '18:10 pm', return_time_slot: "20:00 pm", return_time_slot_land: "22:10 pm" },
     { flight_no: 'A215', depart: "2021-03-21", return: '2021-03-22', from: 'King Shaka', from_abbr: 'DUR', to: 'PE International', to_abbr: 'PLZ', time_slot: '22:00 pm', time_slot_land: '23:10 pm', return_time_slot: "14:00 pm", return_time_slot_land: "15:10 pm" },
    { flight_no: 'A216', depart: "2021-03-25", return: '2021-03-25', from: 'OR Tambo', from_abbr: 'JNB', to: 'Cape Town International', to_abbr: 'CPT', time_slot: '14:00 pm', time_slot_land: '16:10 pm', return_time_slot: "14:00 pm", return_time_slot_land: "16:10 pm" },
    { flight_no: 'A217', depart: "2021-03-30", return: '2021-03-30', from: 'PE International', from_abbr: 'PLZ', to: 'OR Tambo', to_abbr: 'JNB', time_slot: '16:00 pm', time_slot_land: '18:00 pm', return_time_slot: "20:40 pm", return_time_slot_land: "22:20 pm" },
    { flight_no: 'A218', depart: "2021-04-01", return: '2021-04-01', from: 'King Shaka', from_abbr: 'DUR', to: 'PE International', to_abbr: 'PLZ', time_slot: '22:00 pm', time_slot_land: '23:20 am', return_time_slot: "14:00 pm", return_time_slot_land: "16:20 pm" },
    { flight_no: 'A219', depart: "2021-04-01", return: '2021-04-01', from: 'OR Tambo', from_abbr: 'JNB', to: 'King Shaka', to_abbr: 'DUR', time_slot: '14:00 pm', time_slot_land: '15:10 pm', return_time_slot: "14:00 pm", return_time_slot_land: "15:10 pm" },
    { flight_no: 'A220', depart: "2021-04-01", return: '2021-04-01', from: 'PE International', from_abbr: 'PLZ', to: 'OR Tambo', to_abbr: 'JNB', time_slot: '16:00 pm', time_slot_land: '18:00 pm', return_time_slot: "20:40 pm", return_time_slot_land: "22:20 pm" },
     { flight_no: 'A221', depart: "2021-04-02", return: '2021-04-02', from: 'OR Tambo', from_abbr: 'JNB', to: 'Cape Town International', to_abbr: 'CPT', time_slot: '22:00 pm', time_slot_land: '00:10 am', return_time_slot: "14:50 pm", return_time_slot_land: "16:00" },
    { flight_no: 'A222', depart: "2021-04-05", return: '2021-04-06', from: 'OR Tambo', from_abbr: 'JNB', to: 'PE International', to_abbr: 'PLZ', time_slot: '14:00 pm', time_slot_land: '15:40 pm', return_time_slot: "14:00 pm", return_time_slot_land: "15:40 pm" },
    { flight_no: 'A223', depart: "2021-04-10", return: '2021-04-12', from: 'PE International', from_abbr: 'PLZ', to: 'OR Tambo', to_abbr: 'JNB', time_slot: '16:00 pm', time_slot_land: '17:40 pm', return_time_slot: "20:00 pm", return_time_slot_land: "21:40 pm" },
  ]


  public flight_no: any;
  public meals_prices: any[] = [50.00, 80.0, 60.0, 80.0, 50.0, 55.0, 30.0, 120, 80.0, 100, 70, 60.0, 82.0, 50.0, 20.0, 50.0, 40.0, 30.0, 30.0];
  public meals: any[] = ["Fruit Platter", "Tofu and salad", "Tomato/Butternut soup", "Beef/Chicken Keebabs in sauce", "Assorted nuts and cheese", "Bacon and egg toast", "Chicken mayo sarmie",
    "Oatmeal + mik", " Beef lasgna + green salad", " Meatballs and pasta", "Pap/Rice, chicken +1 choice salad", "Nuggets", "Half cheesecake",
    "Malva pudding", "Wine by the glass", "440ml fizzy drink", "Hot drinks", "Fruit juice", "Water"];

  public selectedMealsDepart: any[][] = new Array();
  public selectedMealsReturn: any[][] = new Array();
  public Destinations: any = this.d.destination_list;
  indexDepart = 0;
  indexReturn = 0;
  booking_Depart_Meals: any;
  booking_Return_Meals: any;
  isLogged;

  meal_tot = 0;
  flight_price = 0;

  public from;
  public to;
  public return;
  //flight type
  public flight_type = "One Way Trip";
  public return_time_slot;

  public depart;
  public children = 0;
  public adults = 1;
  public _class;
  public time_slot;
  public username;
  public hours;

  card_number: any;
  card_holder: any;
  card_expMonth: any;
  card_expYear: string;
  card_cvv: any;
  minDate2: string = new Date().toISOString();
  minDate3: string;
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

    var now = new Date();
    var n = now.setMonth(now.getMonth() + 1, 1);
    this.minDate3 = new Date(n).toISOString();




    //check if time slot is available
   


    this.flightForm = this.fb.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
      depart: [this.minDate, Validators.required],
      return: ["", Validators.required],
      children: ['0', Validators.required],
      adults: ['1', Validators.required],
      _class: ['Economy Class', Validators.required],
      time_slot: ['', Validators.required],
      flight_type: ['', Validators.required],
      return_time_slot: (this.flight_type == 'Round Trip') ? ['-', Validators.required] : ['One Way Trip', Validators.required]
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

    this.hours = new Date().getHours();

    this.isLogged = this.authService.isLoggedin();
    this.flight_type = localStorage.getItem('flight_type');
    if (!localStorage.getItem('current_page')) {
      this.current_page = 'flight';
      localStorage.setItem('current_page', this.current_page);
    }
    if (!localStorage.getItem('current_page_type')) {
      this.current_page_type = 'flight';
      localStorage.setItem('current_page_type', this.current_page_type);
    }
    if (this.current_page_type == 'availableFlights') {
      this.current_page_type = 'availableFlights';

      this.oneWayAvailableFlights = JSON.parse(localStorage.getItem('oneWayAvailableFlights'));

      console.log(this.oneWayAvailableFlights);

      this.returnAvailableFlights = JSON.parse(localStorage.getItem('returnAvailableFlights'));
      console.log(this.returnAvailableFlights);
    }

    if (this.current_page_type == 'booking') {
      var DepartMeals = JSON.parse(localStorage.getItem('DepartMeals'));
      var ReturnMeals = JSON.parse(localStorage.getItem('ReturnMeals'));
      this.booking_Depart_Meals = DepartMeals;
      this.booking_Return_Meals = ReturnMeals
      this.to = localStorage.getItem('to');
      this.from = localStorage.getItem('from');
      this.depart = localStorage.getItem('depart').substr(0, 10);
      this.return = localStorage.getItem('return').substr(0, 10);
      this.adults = Number(localStorage.getItem('adults'));
      this.children = Number(localStorage.getItem('children'));
      this._class = localStorage.getItem('_class');
      this.time_slot = localStorage.getItem('time_slot');
      this.flight_type = localStorage.getItem('flight_type');
      this.return_time_slot = localStorage.getItem('return_time_slot');
      this.flight_no = localStorage.getItem('flight_no');


      this.meal_tot = 0;
      for (let index = 0; index < DepartMeals.length; index++) {
        this.meal_tot += DepartMeals[index].meal.value * DepartMeals[index].qty.value;
      }
      for (let index = 0; index < ReturnMeals.length; index++) {
        this.meal_tot += ReturnMeals[index].meal.value * ReturnMeals[index].qty.value;
      }

      //["Johannesburg JNB", "Cape Town CPT", "Bloemfontain BFN", "Windhoek WDH", "Port Elizabeth PLZ", "Durban DUR", "Dubai DUB"];

      if (this.to == "Cape Town International") {
        this.flight_price = 1418.00;
      }
      if (this.to == "PE International") {
        this.flight_price = 1849.00;
      }
      if (this.to == "King Shaka") {
        this.flight_price = 948.00;
      }
      if (this.to == "OR Tambo") {
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
  ionViewWillEnter() {
    console.log(this.isLogged);
    this.isLogged = this.authService.isLoggedin();
    console.log(this.isLogged);
    this.flight_type = localStorage.getItem('flight_type');
    if (this.flight_type == null) {
      this.flight_type = "One Way Trip";
    } else {
      this.flight_type = localStorage.getItem('flight_type');
    }

  }
  selectedDepatDate(ev) {
    if ((new Date().toLocaleDateString() != new Date(ev.detail.value).toLocaleDateString())) {
      this.hours = ev.detail.value
    }
    if ((new Date().toLocaleDateString() == new Date(ev.detail.value).toLocaleDateString())) {
      this.hours = new Date().getHours()
    }
  }

  search() {
    this.returnAvailableFlights = []
    this.oneWayAvailableFlights = []
    localStorage.removeItem('oneWayAvailableFlights');
    localStorage.removeItem('returnAvailableFlights');
    localStorage.setItem('current_page_type', 'flight');
    this.current_page_type = "flight";

  }
  checkAvailableFlights() {
    var departDate = this.flightForm.get('depart').value.substr(0, 10)
    var returnDate = this.flightForm.get('return').value.substr(0, 10)
    var time = Number(this.flightForm.get('depart').value.substr(11, 2))
    var from = this.flightForm.get('from').value
    var to = this.flightForm.get('to').value



    if (new Date().toLocaleDateString() != new Date(this.flightForm.get('depart').value).toLocaleDateString()) {
      if (this.flight_type == "One Way Trip") {
        for (let i = 0; i < this.oneWayFlights.length; i++) {
          if (this.oneWayFlights[i].depart == departDate && this.oneWayFlights[i].from == from && this.oneWayFlights[i].to == to) {
            this.oneWayAvailableFlights.push(this.oneWayFlights[i]);
          }
        }
      }

      if (this.flight_type == "Round Trip") {
        for (let i = 0; i < this.returnFilghts.length; i++) {
          if (this.returnFilghts[i].depart == departDate && this.returnFilghts[i].return == returnDate && this.returnFilghts[i].from == from) {
            this.returnAvailableFlights.push(this.returnFilghts[i]);
          }
        }

      }
    }
    if (new Date().toLocaleDateString() == new Date(this.flightForm.get('depart').value).toLocaleDateString()) {
      if (this.flight_type == "Round Trip") {
        for (let i = 0; i < this.returnFilghts.length; i++) {
          if (this.returnFilghts[i].depart == departDate && this.returnFilghts[i].return == returnDate && this.returnFilghts[i].from == from && this.returnFilghts[i].to == to && Number(this.returnFilghts[i].time_slot.substr(0, 2)) > time) {
            this.returnAvailableFlights.push(this.returnFilghts[i]);
          }
        }

      }

      if (this.flight_type == "One Way Trip") {
        for (let i = 0; i < this.oneWayFlights.length; i++) {
          if (this.oneWayFlights[i].depart == departDate && this.oneWayFlights[i].from == from && this.oneWayFlights[i].to == to && Number(this.oneWayFlights[i].time_slot.substr(0, 2)) > time) {
            this.oneWayAvailableFlights.push(this.oneWayFlights[i]);
          }
        }
      }
    }


  }

  selectedFromFunction(ev) {
    this.selectedFrom = ev.detail.value;
  }

  selectedToFunction(ev) {
    this.selectedTo = ev.detail.value;
  }

  selectedFlightType(ev: any) {
    this.flight_type = ev.detail.value;

    if (this.flight_type == 'One Way Trip') {
      this.flightForm.get('return').setValue('');
      this.flightForm.get('return_time_slot').setValue('')
    } else {

    }
  }



  selectedDepatTime(ev) {
    console.log(ev.detail.value);
    if (ev.detail.value == undefined) {
      if (new Date().getHours() > 20) {
        this.hours = ev.detail.value;
      }
    }

  }


  addAdult() {
    if (this.adults < 10) {
      this.adults += 1;
    }
  }
  removeAdult() {
    if (this.adults > 1) {
      this.adults -= 1;
    }
  }

  addChildren() {
    if (this.children < 10) {
      this.children += 1;
    }
  }
  removeChildren() {
    if (this.children > 0) {
      this.children -= 1;
    }
  }
  async proceed(item) {
    var d1 = new Date(String(this.flightForm.get('depart').value).substr(0, 10));
    var d2 = new Date(String(this.flightForm.get('return').value).substr(0, 10));

    console.log(this.flightForm.get('time_slot').value)
    var person = (Number(this.flightForm.get('adults').value) + Number(this.flightForm.get('children').value));

    if (this.current_page_type == 'flight')
      if (this.flightForm.get('from').value == '') {
        this.presentAlert('Destination from : cannot be empty');
      } else if (this.flightForm.get('to').value == '') {
        this.presentAlert('Destination to : cannot be empty');
      } else if (this.flightForm.get('from').value == this.flightForm.get('to').value) {
        this.presentAlert('Destinations cannot be the same');
      } else if (this.flightForm.get('flight_type').value == '') {
        this.presentAlert('Choose flight type');
      } else if (this.flightForm.get('_class').value == '') {
        this.presentAlert('Choose a class');
      }
      else if (this.flightForm.get('return').value == '' && this.flightForm.get('flight_type').value != 'One Way Trip') {
        this.presentAlert('Choose return date');
      }
      // else if (this.flightForm.get('time_slot').value == '' || this.flightForm.get('time_slot').value == undefined) {
      //   this.presentAlert('Choose depart time slot');
      // } else if (this.flightForm.get('return_time_slot').value == '' && this.flightForm.get('flight_type').value != 'One Way Trip') {
      //   this.presentAlert('Choose return time slot');
      // } 
      else if (person > 10) {
        this.presentAlert('Both adults and children combine must not exceed 10');
      }
      // else if (this.flightForm.get('time_slot').value == '06:00 am' && String(this.flightForm.get('depart').value).substr(0, 10) == this.day.substr(0, 10) && Number(this.day.substr(11, 2)) >= 6) {
      //   this.presentAlert('flight for 06:00 am is nolonger available, Choose another time slot');
      // }
      // else if (this.flightForm.get('time_slot').value == '08:00 am' && String(this.flightForm.get('depart').value).substr(0, 10) == this.day.substr(0, 10) && Number(this.day.substr(11, 2)) >= 8) {
      //   this.presentAlert('flight for 08:00 am is nolonger available, Choose another time slot');
      // } else if (this.flightForm.get('time_slot').value == '12:00 am' && String(this.flightForm.get('depart').value).substr(0, 10) == this.day.substr(0, 10) && Number(this.day.substr(11, 2)) >= 12) {
      //   this.presentAlert('flight for 12H00 am is nolonger available, Choose another time slot');
      // }
      // else if (this.flightForm.get('time_slot').value == '16:00 am' && String(this.flightForm.get('depart').value).substr(0, 10) == this.day.substr(0, 10) && Number(this.day.substr(11, 2)) >= 16) {
      //   this.presentAlert('flight for 16H00 am is nolonger available, Choose another time slot');
      // }
      // else if (this.flightForm.get('time_slot').value == '18:00 am' && String(this.flightForm.get('depart').value).substr(0, 10) == this.day.substr(0, 10) && Number(this.day.substr(11, 2)) >= 18) {
      //   this.presentAlert('flight for 18H00 am is nolonger available, Choose another time slot');
      // }
      // else if (this.flightForm.get('time_slot').value == '20:00 pm' && String(this.flightForm.get('depart').value).substr(0, 10) == this.day.substr(0, 10) && Number(this.day.substr(11, 2)) >= 20) {
      //   this.presentAlert('All flights for today are nolonger available, Choose another Departure Date');
      // }
      else if (this.flightForm.get('depart').value && (d1 > d2)) {
        this.presentAlert('Return date cannot be less than the depart date ');
      }
      // else if (((this.flightForm.get('depart').value).substr(0, 10) == (this.flightForm.get('return').value).substr(0, 10)) && (this.flightForm.get('return_time_slot').value <= this.flightForm.get('time_slot').value)) {
      //   this.presentAlert('Depart time must be less than the Return time ');
      // }

      else {
        this.checkAvailableFlights();
        localStorage.setItem('current_page_type', 'availableFlights');


        if (this.flight_type == 'One Way Trip') {
          localStorage.setItem('return', "One Way");
          localStorage.setItem('return_time_slot', "One Way")


          localStorage.setItem('oneWayAvailableFlights', JSON.stringify(this.oneWayAvailableFlights));
        } else {
          localStorage.setItem('returnAvailableFlights', JSON.stringify(this.returnAvailableFlights));
          localStorage.setItem('return', this.flightForm.get('return').value);
          localStorage.setItem('return_time_slot', this.flightForm.get('return_time_slot').value);
        }


        localStorage.setItem('from', this.flightForm.get('from').value);
        localStorage.setItem('to', this.flightForm.get('to').value);
        localStorage.setItem('depart', this.flightForm.get('depart').value);
        localStorage.setItem('_class', this.flightForm.get('_class').value);
        localStorage.setItem('adults', this.flightForm.get('adults').value);
        localStorage.setItem('children', this.flightForm.get('children').value);
        localStorage.setItem('time_slot', this.flightForm.get('time_slot').value);
        localStorage.setItem('flight_type', this.flightForm.get('flight_type').value);
        localStorage.setItem('flight_type', this.flightForm.get('flight_type').value);
        window.location.reload();
      }

    if (this.current_page_type == 'availableFlights') {
      localStorage.setItem('flight_no', item.flight_no);
      localStorage.setItem('current_page_type', 'meals');
      localStorage.setItem('time_slot', item.time_slot);
      if (this.flight_type == 'One Way Trip') {
        localStorage.setItem('return_time_slot', "One Way");
      } else {
        localStorage.setItem('return_time_slot', item.return_time_slot)
      }
      window.location.reload();
    }
    if (this.current_page_type == 'meals') {
      localStorage.setItem('current_page_type', 'booking');
      localStorage.setItem('DepartMeals', JSON.stringify(this.selectedMealsDepart));
      localStorage.setItem('ReturnMeals', JSON.stringify(this.selectedMealsReturn));

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

  async showPickerDepart() {
    let options: PickerOptions = {

      buttons: [
        {
          text: "Cancel",
          role: 'cancel'
        },
        {
          text: 'Ok',
          handler: (value: any) => {
            if (this.selectedMealsDepart) {
              this.selectedMealsDepart[this.indexDepart] = value;
              this.selectedMealsDepart[this.indexDepart][0] = this.meals_prices[value.id];
              console.log(this.selectedMealsDepart);
              this.indexDepart++;
              console.log(this.indexDepart)
            } else {
              console.log(this.indexDepart);
              console.log(value.qty.value);
              this.selectedMealsDepart[this.indexDepart] = value;
              console.log(this.selectedMealsDepart[this.indexDepart]);
              this.indexDepart++;
              console.log(this.indexDepart)
            }
            //this.selectedMealsDepart[this.selectedMealsDepart.length]
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

  async showPickerReturn() {
    let options: PickerOptions = {

      buttons: [
        {
          text: "Cancel",
          role: 'cancel'
        },
        {
          text: 'Ok',
          handler: (value: any) => {
            if (this.selectedMealsReturn) {
              this.selectedMealsReturn[this.indexReturn] = value;
              this.selectedMealsReturn[this.indexReturn][0] = this.meals_prices[value.id];
              console.log(this.selectedMealsReturn[this.indexReturn]);
              this.indexReturn++;

            } else {
              console.log(this.indexReturn);
              console.log(value.qty.value);
              this.selectedMealsReturn[this.indexReturn] = value;
              console.log(this.selectedMealsReturn[this.indexReturn]);
              this.indexReturn++;
            }
            //this.selectedMealsReturn[this.selectedMealsReturn.length]
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

  public selectedTo;
  public selectedFrom;

  getSelectedFromLocation(dest) {
    //return localStorage.getItem('from');
    //return 'PE International';
    this.selectedFrom = dest;
    console.log(this.selectedFrom);
  }

  getSelectedToDestination(dest) {
    //return localStorage.getItem('to');
    this.selectedTo = dest;
    console.log(this.selectedTo);
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



  removeMealsDepart(i) {
    if (i !== -1) {
      this.selectedMealsDepart.splice(i, 1);
      this.indexDepart--;
    }
  }

  removeMealsReturn(i) {
    if (i !== -1) {
      this.selectedMealsReturn.splice(i, 1);
      this.indexReturn--;
    }
  }
  restMeals() {
    window.location.reload();
  }

  cancelOrder() {
    this.current_page_type = 'flight';
    localStorage.removeItem('current_page_type');
    localStorage.removeItem('to');
    localStorage.removeItem('from');
    localStorage.removeItem('flight_type');
    localStorage.removeItem('depart');
    localStorage.removeItem('return');
    localStorage.removeItem('adults');
    localStorage.removeItem('children');
    localStorage.removeItem('meals');
    localStorage.removeItem('_class');
    localStorage.removeItem('time_slot');
    localStorage.removeItem('return_time_slot')
    localStorage.removeItem('amount');
    localStorage.removeItem('oneWayAvailableFlights');
    localStorage.removeItem('returnAvailableFlights');
    localStorage.removeItem('flight_no');

    this.app.openPage('Booking');
    window.location.reload();
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


    this.api.add_ticket2(
      localStorage.getItem('flight_no'),
      localStorage.getItem('from'),
      localStorage.getItem('to'),
      localStorage.getItem('flight_type'),
      localStorage.getItem('depart'),
      localStorage.getItem('return'),
      localStorage.getItem('adults'),
      localStorage.getItem('children'),
      0,
      0,
      localStorage.getItem('DepartMeals'),
      localStorage.getItem('ReturnMeals'),
      localStorage.getItem('_class'),
      localStorage.getItem('amount'),
      String(localStorage.getItem('time_slot')),
      String(localStorage.getItem('return_time_slot')),
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
          console.log(data.err);
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
    } else if (String(this.card_expYear).substr(0, 4) == '2020' && Number(String(this.card_expMonth).substr(5, 2)) < Number(this.minDate.substr(5, 2))) {
      this.presentAlert('card already expired!')
    } else {
      this.doBook();
    }
  }


  downloadMyFile() {
    const link = document.createElement('a');
    link.setAttribute('target', '_self');
    link.setAttribute('href', 'https://kohaku-air.herokuapp.com/download/' + localStorage.getItem('uuid') + localStorage.getItem('t_id') + '.pdf');
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
          localStorage.setItem('current_page_type', 'flight');
          localStorage.removeItem('current_page_type');
          localStorage.removeItem('to');
          localStorage.removeItem('from');
          localStorage.removeItem('depart');
          localStorage.removeItem('return');
          localStorage.removeItem('flight_type');
          localStorage.removeItem('adults');
          localStorage.removeItem('children');
          localStorage.removeItem('DepartMeals')
          localStorage.removeItem('ReturnMeals'),
            localStorage.removeItem('_class');
          localStorage.removeItem('time_slot');
          localStorage.removeItem('return_time_slot')
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


