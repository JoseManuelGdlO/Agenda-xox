import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/services/clients/clients.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.page.html',
  styleUrls: ['./register-form.page.scss'],
})
export class RegisterFormPage implements OnInit {

  treats: any = {data: []}

  clientBody = {
    address: "123",
    age: "123",
    email: "13",
    id_doctor: "123",
    last_name: "543",
    second_last_name: "645",
    name: "345",
    patient: "534",
    phonenumber: "34"
  }

  history = {
      description: ''
  }

  constructor(
    public clientsService: ClientsService
  ) { }

  async ngOnInit() {
    this.treats = await this.clientsService.getAllTreats();

    console.log(this.treats)
  }



}
