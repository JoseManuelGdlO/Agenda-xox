import { Injectable } from '@angular/core';
import { BASE_URL } from 'src/environments/environment';
import { HttpServiceService } from '../http-service/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(
    public HttpServic: HttpServiceService
  ) { }

  async getAllTreats(){
    let response;
    try {
      const url = BASE_URL + 'getTreats';
      response = await this.HttpServic.getMethod(url);
    } catch (error) {
      console.error(error);
      response = {data: []};
    }

    return response;
  }
}
