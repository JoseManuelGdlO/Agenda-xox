import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, AlertController } from '@ionic/angular';
import * as moment from 'moment';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-MX';
import { DateModel } from 'src/app/classes/date.model';
registerLocaleData(localeEs);

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  dummyObject: Array<DateModel> = 
  [
    { name: 'Jose Manuel', lastName: 'Garcia', secondLastName: 'de la O', hidden: false, isAvaliable: false, age: '12', phone: '6181020927', patient: 'Amelia', hourDate: '8:00', hoursNeed: '1', firstTime: true, haveExtras: true},
    { name: 'Xochitl', lastName: 'Garcia', secondLastName: 'de la O', hidden: true, isAvaliable: true, age: '7', phone: '6181020927', patient: 'Chenito', hourDate: '9:00', hoursNeed: '2', firstTime: true, haveExtras: true},
    { name: 'Delsy', lastName: 'Felix', secondLastName: 'Ortiz', hidden: true, isAvaliable: true, age: '15', phone: '6181020927', patient: 'Amelia', hourDate: '11:00', hoursNeed: '2', firstTime: true, haveExtras: true},
    { name: 'Jose Manuel', lastName: 'Garcia', secondLastName: 'de la O', hidden: true, isAvaliable: false, age: '12', phone: '6181020927', patient: 'Amelia', hourDate: '1:00', hoursNeed: '3', firstTime: true, haveExtras: true},
    { name: 'Jose Manuel', lastName: 'Garcia', secondLastName: 'de la O', hidden: true, isAvaliable: true, age: '12', phone: '6181020927', patient: 'Amelia', hourDate: '4:00', hoursNeed: '2', firstTime: true, haveExtras: true},
  ]

  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();

  calendar = {
    mode: 'month',
    currentDate: new Date()
  };

  constructor(
    public navCtrl: NavController,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController
    ) { }


  ngOnInit(): void {
   
  }
 
  addEvent() {
  }
 
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
 
  onEventSelected(event) {
    let start = moment(event.startTime).format('LLLL');
    let end = moment(event.endTime).format('LLLL');
    
    console.log(start, end);
    
  }
 
  onTimeSelected(ev) {
    this.selectedDay = ev.selectedTime;
  }
}
