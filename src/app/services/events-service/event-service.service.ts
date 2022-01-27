import { Injectable } from '@angular/core';
import { BASE_URL } from 'src/environments/environment';
import { HttpServiceService } from '../http-service/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(
    public httpService: HttpServiceService
  ) { }

  async getEvents() {
    const url = BASE_URL + 'client';

    try {
      const response = await this.httpService.getMethod(url);
    } catch(error) {
      console.log(error);
    }
    

  }

  createClient(body)

}
