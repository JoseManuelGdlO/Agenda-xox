import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, AlertController } from '@ionic/angular';
import * as moment from 'moment';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-MX';
import { DateModel } from 'src/app/classes/date.model';
import { EventService } from 'src/app/services/events-service/event-service.service';
import { getMonthString } from 'src/app/utils/functions.utils';
registerLocaleData(localeEs);

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  dummyObject: Array<DateModel> =
    [
      { name: 'Jose Manuel', lastName: 'Garcia', secondLastName: 'de la O', hidden: false, isAvaliable: false, age: '12', phone: '6181020927', patient: 'Amelia', hourDate: '8:00', hoursNeed: '1', firstTime: true, haveExtras: true },
      { name: 'Xochitl', lastName: 'Garcia', secondLastName: 'de la O', hidden: true, isAvaliable: true, age: '7', phone: '6181020927', patient: 'Chenito', hourDate: '9:00', hoursNeed: '2', firstTime: true, haveExtras: true },
      { name: 'Delsy', lastName: 'Felix', secondLastName: 'Ortiz', hidden: true, isAvaliable: true, age: '15', phone: '6181020927', patient: 'Amelia', hourDate: '11:00', hoursNeed: '2', firstTime: true, haveExtras: true },
      { name: 'Jose Manuel', lastName: 'Garcia', secondLastName: 'de la O', hidden: true, isAvaliable: false, age: '12', phone: '6181020927', patient: 'Amelia', hourDate: '1:00', hoursNeed: '3', firstTime: true, haveExtras: true },
      { name: 'Jose Manuel', lastName: 'Garcia', secondLastName: 'de la O', hidden: true, isAvaliable: true, age: '12', phone: '6181020927', patient: 'Amelia', hourDate: '4:00', hoursNeed: '2', firstTime: true, haveExtras: true },
    ]

  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();
  stringDate: string;

  calendar = {
    mode: 'month',
    currentDate: new Date()
  };

  constructor(
    public navCtrl: NavController,
    public eventsService: EventService
  ) { }


  ngOnInit(): void {

  }

  addEvent() {
  }

  async getEvents() {
    try {
      const events: any = await this.eventsService.getEvents();
      console.log("fechas todas   " + events);

      var json = events.evento;
      this.eventSource = [];

      for (var i = 0; i < json.length; i++) {
        // console.log(json[i].nombre_mob);

        var ano = json[i].ano;
        var mes = json[i].mes - 1;
        var dia = json[i].dia;

        //console.log("llega en  "+i+"    "+ano+"-"+mes+"-"+dia);
        ano = new Date(Date.UTC(ano, mes, dia) + (1000 * 60 * 60 * 24));


        this.eventSource.push({
          title: json[i].nombre_evento,
          startTime: ano,
          endTime: ano,
          allDay: false
        });
      }


    } catch (error) {
      console.log("Error" + JSON.stringify(error));

      alert("Verifica que cuentes con internet");
    }


  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  onEventSelected(event) {
    let start = moment(event.startTime).format('LLLL');
    let end = moment(event.endTime).format('LLLL');

    console.log(start, end);

  }

  OnViewTitleChanged(title){
    this.viewTitle =  title;

  }

  onTimeSelected(ev) {
    this.selectedDay = ev.selectedTime;
    this.stringDate = this.selectedDay.getDate() + " de " + getMonthString(this.selectedDay.getMonth() + 1) + " del " + this.selectedDay.getFullYear();
  }
}
